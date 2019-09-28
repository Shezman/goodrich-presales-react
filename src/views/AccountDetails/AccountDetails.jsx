import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as _ from 'lodash';
import { wallet } from '../../actions/auth';
import { toaster } from '../../helper/Toaster';
import Axios from 'axios';
export class AccountDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      wallet_data: [],
      purchaseData: [],
      userData: {}
    };
  }

  componentDidMount() {
    const walletResponse = this.props.wallet().catch(err => {
      console.log(err);
      // localStorage.removeItem('token');
      // window.location.href = '/';
    });
    console.log(walletResponse);
    const { wallet_data } = this.state;
    const token = localStorage.getItem('token');
    if (token) {
      this.setState(prevState => ({
        ...prevState,
        token
      }));
    }
    // if (wallet_data.length < 1 && token) {
    //   localStorage.removeItem('token');
    //   window.location.href = '/';
    // }
    this._getPurchases();
    this._getProfile();
  }
  componentWillReceiveProps(newProps) {
    const { wallet_response } = newProps;
    if (wallet_response && wallet_response.status === 'success') {
      // toaster('success', 'Data fetched successfully')
      this.setState({ wallet_data: wallet_response.data });
    }
    const token = localStorage.getItem('token');
    console.log('Token', token);
    console.log('Wallet response', wallet_response);
    if (_.isEmpty(wallet_response)) {
      console.log('Wallet Response is Empty');
    }
    // if (_.isEmpty(wallet_response) && token) {
    //   localStorage.removeItem('token');
    //   window.location.href = '/';
    // }
  }

  _getPurchases = () => {
    const { token } = this.state;
    console.log(token);
    Axios.get('http://localhost:5000/wallet/purchase', {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    })
      .then(({ data: response }) => {
        console.log(response);
        const { data } = response;
        this.setState(prevState => ({
          ...prevState,
          purchaseData: data
        }));
      })
      .catch(err => console.log(err));
  };

  _getProfile = () => {
    const { token } = this.state;
    console.log(token);
    Axios.get('http://localhost:5000/user', {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    })
      .then(({ data: response }) => {
        console.log(response);
        const { data } = response;
        this.setState(prevState => ({
          ...prevState,
          userData: data
        }));
      })
      .catch(err => console.log(err));
  };

  render() {
    const { wallet_data, purchaseData, userData } = this.state;
    let portfolio = 0;
    wallet_data.map(item => {
      portfolio = portfolio + item.totalValue;
    });
    return (
      <div>
        <section className="account_tab_section">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-md-8 col-md-offset-2">
                <div className="account_tab-bg ">
                  {/* Nav tabs */}
                  <ul className="nav nav-tabs" role="tablist">
                    <li className="active">
                      <a href="#account_tab" role="tab" data-toggle="tab">
                        Account
                      </a>
                    </li>
                    <li>
                      <a href="#history_tab" role="tab" data-toggle="tab">
                        History
                      </a>
                    </li>
                    <li>
                      <a href="#settings_tab" role="tab" data-toggle="tab">
                        Profile
                      </a>
                    </li>
                  </ul>
                  {/* Tab panes */}
                  <div className="tab-content">
                    <div className="tab-pane fade active in" id="account_tab">
                      <div className="card card-top">
                        <h3>Chips Value</h3>
                        <h4>$ {portfolio}</h4>
                      </div>
                      <div className="table-responsive">
                        <table className="table table-hover">
                          <thead>
                            <tr>
                              <th />
                              <th>Price</th>
                              <th>Amount</th>
                              <th>Total</th>
                            </tr>
                          </thead>

                          <tbody>
                            {wallet_data.length !== 0 ? (
                              <React.Fragment>
                                {wallet_data.map((data, index) => {
                                  return (
                                    <tr key={index}>
                                      <td>{data.teamId}</td>
                                      <td>$ {data.price}</td>
                                      <td>{data.amount}</td>
                                      <td>$ {data.totalValue}</td>
                                    </tr>
                                  );
                                })}
                              </React.Fragment>
                            ) : (
                              <tr>No data found</tr>
                            )}
                          </tbody>
                        </table>
                      </div>
                      <div className="card card-bottom">
                        <div className="row">
                          <div className="col-md-3 col-md-offset-6">
                            <h3>DEPOSIT:</h3>
                          </div>
                          <div className="col-md-3">
                            <h3>Chips Value</h3>
                            <h4>$ {portfolio}</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="history_tab">
                      <div className="table-responsive">
                        <table className="table table-hover">
                          <thead>
                            <tr>
                              <th>
                                Date <span>&#38;</span> Time
                              </th>
                              <th />
                              <th>Price</th>
                              <th>Amount</th>
                              <th>Total</th>
                            </tr>
                          </thead>
                          <tbody>
                            {purchaseData.length !== 0 ? (
                              <React.Fragment>
                                {purchaseData.map((data, index) => {
                                  return (
                                    <tr key={index}>
                                      <td>{data.purchaseDate}</td>
                                      <td>$ {data.teamId}</td>
                                      <td>${data.price}</td>
                                      <td>$ {data.quantity}</td>
                                      <td>$ {data.total}</td>
                                    </tr>
                                  );
                                })}
                              </React.Fragment>
                            ) : (
                              <tr>No data found</tr>
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="settings_tab">
                      <div className="row form-group">
                        <label className="col-xs-12 col-sm-4 col-sm-offset-2 text-left">
                          Name:
                        </label>
                        <span className="col-xs-12 col-sm-6">
                          {userData.name}
                        </span>
                      </div>
                      <div className="row form-group">
                        <label className="col-xs-12 col-sm-4 col-sm-offset-2 text-left">
                          Email Address:
                        </label>
                        <span className="col-xs-12 col-sm-6">
                          {userData.email}
                        </span>
                      </div>

                      <div className="row form-group">
                        <label className="col-xs-12 col-sm-4 col-sm-offset-2 text-left">
                          Phone Number:
                        </label>
                        <span className="col-xs-12 col-sm-6">
                          {userData.phoneNo}
                        </span>
                      </div>
                      <div className="row form-group">
                        <label className="col-xs-12 col-sm-4 col-sm-offset-2 text-left">
                          Username
                        </label>
                        <span className="col-xs-12 col-sm-6">
                          {userData.username}
                        </span>
                      </div>
                      <div className="row form-group">
                        <label className="col-xs-12 col-sm-4 col-sm-offset-2 text-left">
                          Nationality:
                        </label>
                        <span className="col-xs-12 col-sm-6"></span>
                      </div>
                      <div className="row form-group">
                        <label className="col-xs-12 col-sm-4 col-sm-offset-2 text-left">
                          Account Number:
                        </label>
                        <span className="col-xs-12 col-sm-6">
                          {userData.userId}
                        </span>
                      </div>
                      <div className="row form-group">
                        <label className="col-xs-12 col-sm-4 col-sm-offset-2 text-left">
                          Broker Contact:
                        </label>
                        <span className="col-xs-12 col-sm-6">
                          You have not been assigned a broker yet
                          {/* <br /> */}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
const mapStateToProps = store => {
  return {
    wallet_response: store.auth.wallet_response
  };
};

const mapDispatchToProps = dispatch => {
  return {
    wallet: params => dispatch(wallet(params))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountDetails);
