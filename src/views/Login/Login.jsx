import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { toaster } from '../../helper/Toaster';
import { loginUser } from '../../actions/auth';

let LoginFlag = false;
export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login_user_name: '',
      login_password: ''
    };
  }
  componentWillReceiveProps(newProps) {
    const { login_response } = newProps;

    if (login_response && login_response.status === 'success' && LoginFlag) {
      window.location.href = '/account_details';
      toaster('success', 'Login successful');
      LoginFlag = false;
    } else if (
      login_response &&
      login_response.status === 'fail' &&
      LoginFlag
    ) {
      toaster('error', 'Something went wrong');
      LoginFlag = false;
    }
  }
  handleChange = (e, name) => {
    this.setState({ [name]: e.target.value });
  };

  loginHandler = e => {
    const { login_user_name, login_password } = this.state;
    e.preventDefault();
    if (login_user_name !== '' && login_password !== '') {
      let data = {
        username: login_user_name,
        password: login_password
      };
      this.props
        .loginUser(data)
        .then(() => (window.location.href = '/account_details'))
        .catch(err => toaster('error', 'Login Details are invalid'));
      LoginFlag = true;
    } else if (login_user_name === '' && login_password !== '') {
      toaster('error', 'Please enter user name');
    } else if (login_user_name !== '' && login_password === '') {
      toaster('error', 'Please enter password.');
    } else {
      toaster('error', 'Please fill all the fields.');
    }
  };

  render() {
    const { login_user_name, login_password } = this.state;
    return (
      <div>
        <section className="home bg-image home-small" id="home">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="home-wrapper home-intro row">
                  <div className="col-md-6 col-sm-10 col-md-offset-3 col-sm-offset-1 m-t-20">
                    <div className="tabbable-panel">
                      <div className="tabbable-line">
                        <div className="tab-content tab-content-BuySell m-t-9">
                          <div className="tab-pane active" id="tab_default_2">
                            <form
                              className="intro-form"
                              action="#"
                              id="invite-2"
                              method="POST"
                            >
                              <h5>
                                Sign in
                                <span>
                                  Have an account? Sign in &amp; start trading
                                </span>
                              </h5>

                              <input
                                type="text"
                                placeholder="User Name"
                                name="login_user_name"
                                onChange={e =>
                                  this.handleChange(e, 'login_user_name')
                                }
                                value={login_user_name}
                                required="required"
                              />

                              <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                name="login_password"
                                onChange={e =>
                                  this.handleChange(e, 'login_password')
                                }
                                value={login_password}
                                required="required"
                              />

                              <Link
                                to="/forgot_password"
                                className="forgot-password"
                              >
                                Forgot your password?
                              </Link>
                              <button
                                type="submit"
                                className="btn btn-secondary btn-block border-radius"
                                onClick={e => this.loginHandler(e)}
                              >
                                Sign In
                              </button>
                              <p>
                                By Signing in you agree to our{' '}
                                <a href="#">terms of conditions</a>
                              </p>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* end col */}
            </div>
            {/* end row */}
          </div>
          {/* end container */}
        </section>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    login_response: store.auth.login_response
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loginUser: params => dispatch(loginUser(params))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
