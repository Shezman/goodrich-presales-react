import React, { Component } from "react";
import { connect } from "react-redux";
import { confirmRegister } from "../../actions/auth";
import { toaster } from "../../helper/Toaster";
export class Congratulation extends Component {
  constructor(props) {
    super(props)
    this.state = {
       token: this.props.match.params.token
    }
  }

  componentWillReceiveProps(newProps){
    if(newProps.confirm_response && newProps.confirm_response.status === 'success'){
      toaster('success', newProps.confirm_response.data && newProps.confirm_response.data.message)
      this.props.history.push('/login')
    }else  if(newProps.confirm_response && newProps.confirm_response.status === 'fail'){
      toaster('error', newProps.confirm_response.data && newProps.confirm_response.error.message)
    }
  }

  handleFunc = () =>{
    this.props.confirmRegister(this.state.token)
  }

  render() {
    return (
      <div>
        <section className="home bg-image home-small innerpage" id="home">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="home-wrapper home-intro row pagetitle">
                  <div className="col-md-12">
                    <h1>Congratulation</h1>
                  </div>
                </div>
              </div>{" "}
              {/* end col */}
            </div>{" "}
            {/* end row */}
            <div className="row ">
              <div className="container">
                <div className="row deposits_congrats">
                  <div className="col-md-12 congratulation">
                    <p>
                      Your Goodrich account has been approved! Please check your
                      email to activated and start to track your sports team on
                      the SIM now!.
                    </p>
                    <p>
                      <img src="/images/congrats.png" />
                    </p>
                  </div>
                </div>
                <button className='btn btn-custom' onClick={(e)=> this.handleFunc(e)} >Activate</button>
              </div>
            </div>
          </div>
          {/* end container */}
        </section>
      </div>
    );
  }
}
const mapStateToProps = store => {
  return {
    confirm_response: store.auth.confirm_response
  };
};

const mapDispatchToProps = dispatch => {
  return {
    confirmRegister: params => dispatch(confirmRegister(params))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Congratulation);