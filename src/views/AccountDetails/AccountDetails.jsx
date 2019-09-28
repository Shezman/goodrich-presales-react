import React, { Component } from 'react';
import { connect } from 'react-redux';
import { wallet } from '../../actions/auth';
import { toaster } from '../../helper/Toaster';
export class AccountDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      wallet_data: []
    };
  }

  componentDidMount() {
    this.props.wallet();
  }
  componentWillReceiveProps(newProps) {
    const { wallet_response } = newProps;
    if (wallet_response && wallet_response.status === 'success') {
      // toaster('success', 'Data fetched successfully')
      this.setState({ wallet_data: wallet_response.data });
    }
  }
  render() {
    const { wallet_data } = this.state;
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
                        Settings
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
                              <th>2019</th>
                              <th />
                              <th>Price</th>
                              <th>Amount</th>
                              <th>Total</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Sep 6</td>
                              <td>GSW</td>
                              <td>$ 1.00</td>
                              <td>2,000</td>
                              <td>$ 2,000</td>
                            </tr>
                            <tr>
                              <td>Sep 9</td>
                              <td>NYK</td>
                              <td>$ 2.00</td>
                              <td>1,000</td>
                              <td>$ 2,000</td>
                            </tr>
                            <tr>
                              <td>Sep 11</td>
                              <td>MIL</td>
                              <td>$ 3.00</td>
                              <td>3,000</td>
                              <td>$ 9,000</td>
                            </tr>
                            <tr>
                              <td>Sep 16</td>
                              <td>GSW</td>
                              <td>$ 1.00</td>
                              <td>2,000</td>
                              <td>$ 2,000</td>
                            </tr>
                            <tr>
                              <td>Sep 19</td>
                              <td>NYK</td>
                              <td>$ 2.00</td>
                              <td>1,000</td>
                              <td>$ 2,000</td>
                            </tr>
                            <tr>
                              <td>Sep 23</td>
                              <td>MIL</td>
                              <td>$ 3.00</td>
                              <td>3,000</td>
                              <td>$ 9,000</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="settings_tab">
                      <div className="row form-group">
                        <label className="col-xs-12 col-sm-4 col-sm-offset-2 text-left">
                          Email Address:
                        </label>
                        <span className="col-xs-12 col-sm-6">
                          xxxxxxxx@gmail.com
                        </span>
                      </div>
                      <div className="row form-group">
                        <label className="col-xs-12 col-sm-4 col-sm-offset-2 text-left">
                          Password:
                        </label>
                        <span className="col-xs-12 col-sm-6">
                          Reset Password
                        </span>
                      </div>
                      <div className="row form-group">
                        <label className="col-xs-12 col-sm-4 col-sm-offset-2 text-left">
                          Phone Number:
                        </label>
                        <span className="col-xs-12 col-sm-6">
                          + ( x ) xxx -xxx -xxxx
                        </span>
                      </div>
                      <div className="row form-group">
                        <label className="col-xs-12 col-sm-4 col-sm-offset-2 text-left">
                          Address:
                        </label>
                        <span className="col-xs-12 col-sm-6">Add</span>
                      </div>
                      <div className="row form-group">
                        <label className="col-xs-12 col-sm-4 col-sm-offset-2 text-left">
                          Nationality:
                        </label>
                        <span className="col-xs-12 col-sm-6">Add</span>
                      </div>
                      <div className="row form-group">
                        <label className="col-xs-12 col-sm-4 col-sm-offset-2 text-left">
                          Account Number:
                        </label>
                        <span className="col-xs-12 col-sm-6">
                          (randomly generated)
                        </span>
                      </div>
                      <div className="row form-group">
                        <label className="col-xs-12 col-sm-4 col-sm-offset-2 text-left">
                          Broker Contact:
                        </label>
                        <span className="col-xs-12 col-sm-6">
                          Broker Name
                          <br />
                          Broker Email
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
