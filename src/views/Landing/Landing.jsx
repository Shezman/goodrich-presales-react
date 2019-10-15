import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toaster } from '../../helper/Toaster';
import { Link } from 'react-router-dom';
import { loginUser, registerUser } from '../../actions/auth';

import Team from './Team';
import Invest from './Invest';
import SportsExchange from './SportsExchange';
import Blog from './Blog';
import Milestone from './Milestone';

let LoginFlag = false;
export class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login_user_name: '',
      login_password: '',
      first_name: '',
      last_name: '',
      phone_number: '',
      user_name: '',
      register_email: '',
      register_password: '',
      confirm_password: ''
    };
  }

  componentWillReceiveProps(newProps) {
    const { login_response } = newProps;
    if (login_response && login_response.status === 'success' && LoginFlag) {
      window.location.href = '/account_details';
      toaster('success', 'Login successful');
      LoginFlag = false;
    } else if (login_response && login_response.status == 'fail' && LoginFlag) {
      toaster('error', 'Something went wrong');
      LoginFlag = false;
    }
  }

  handleChange = (e, name) => {
    // let regs = /^([a-zA-Z0-9@*#]{0,25})$/;
    // if (name === "login_password" && regs.test(e.target.value) === false) {
    //   return;
    // }
    let reg = /^[0-9]{0,10}$/;
    if (name === 'phone_number' && reg.test(e.target.value) === false) {
      return;
    }

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
      this.props.loginUser(data);
      LoginFlag = true;
    } else if (login_user_name === '' && login_password !== '') {
      toaster('error', 'Please enter user name');
    } else if (login_user_name !== '' && login_password === '') {
      toaster('error', 'Please enter password.');
    } else {
      toaster('error', 'Please fill all the fields.');
    }
  };

  registerHandler = e => {
    e.preventDefault();
    const {
      first_name,
      last_name,
      phone_number,
      user_name,
      register_email,
      register_password,
      confirm_password
    } = this.state;

    if (
      first_name !== '' &&
      last_name !== '' &&
      phone_number !== '' &&
      user_name !== '' &&
      register_email !== '' &&
      register_password !== '' &&
      confirm_password !== ''
    ) {
      if (phone_number.length < 6) {
        toaster('error', "Phone Number can't be less than 6 digits");
        return;
      }
      if (
        register_email !== '' &&
        !register_email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,3})$/i)
      ) {
        toaster('error', 'Email ID is not valid');
        return;
      }

      if (register_password.length < 6 || confirm_password.length < 6) {
        toaster('error', 'Password must contains 6 digits.');
        return;
      }
      if (register_password !== confirm_password) {
        toaster('error', 'Password and confirm password not matched.');
        return;
      }

      let data = {
        first_name: first_name,
        last_name: last_name,
        phone_number: phone_number,
        user_name: user_name,
        register_email: register_email,
        register_password: register_password,
        confirm_password: confirm_password
      };
      localStorage.setItem('register_data', JSON.stringify(data));
      this.props.history.push('/otp');
    } else {
      toaster('error', 'Please fill all the fields');
    }
  };

  render() {
    const {
      login_user_name,
      login_password,
      first_name,
      last_name,
      user_name,
      phone_number,
      register_email,
      register_password,
      confirm_password
    } = this.state;
    return (
      <div className="landing_home">
        {/* HOME */}
        <section className="home bg-image home-small" id="home">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="home-wrapper home-intro row">
                  <div className="col-md-7">
                    <div className="left">
                      <h1>
                        Genesis of Sports Investment <br /> Market
                      </h1>
                      <h4 className="normal-font-w">
                        Goodrich is aiming to create a new medium of engagement
                        for the global sports fans with sports teams through our
                        Sports Investment Market (SIM).
                      </h4>
                      <h4 className="normal-font-w">
                        The SIM allows you to put your love, passion and
                        analytical skills to the test by trading Goodrich Team
                        Chips (GTC) based on sports performance.
                      </h4>
                      <h4 className="normal-font-w">
                        Currently launching the NBA GTC (Sep 22, 2019)!
                      </h4>
                      <a href className="btn btn-custom about-us">
                        More About Us
                      </a>
                    </div>
                  </div>
                  <div className="col-md-5 col-sm-10 m-t-20">
                    <div className="tabbable-panel">
                      <div className="tabbable-line">
                        <ul className="nav nav-tabs border-bottom-none">
                          <li className="active">
                            <a
                              className="normal-font-w border-none"
                              href="#tab_default_1"
                              data-toggle="tab"
                            >
                              Register{' '}
                            </a>
                          </li>
                          <li className>
                            <a
                              className="normal-font-w border-none"
                              href="#tab_default_2"
                              data-toggle="tab"
                            >
                              Sign In{' '}
                            </a>
                          </li>
                        </ul>
                        <div className="tab-content tab-content-BuySell m-t-9">
                          <div className="tab-pane active" id="tab_default_1">
                            <form
                              className="intro-form"
                              action="#"
                              id="invite"
                              method="POST"
                            >
                              <h5>
                                Register
                                <span>
                                  Don't have an account? Register to start
                                  trading
                                </span>
                              </h5>
                              <div className="row">
                                <div className="col-md-6 padding-right">
                                  <input
                                    name="fname"
                                    id="fname-2"
                                    className="fname"
                                    placeholder="First Name"
                                    type="text"
                                    required="required"
                                    value={first_name}
                                    onChange={e =>
                                      this.handleChange(e, 'first_name')
                                    }
                                  />
                                </div>
                                <div className="col-md-6 padding-left">
                                  <input
                                    name="fname"
                                    id="fname-3"
                                    className="lname"
                                    placeholder="Last Name"
                                    type="text"
                                    required="required"
                                    value={last_name}
                                    onChange={e =>
                                      this.handleChange(e, 'last_name')
                                    }
                                  />
                                </div>
                              </div>
                              <input
                                name="user_name"
                                id="fname-4"
                                className="user_name"
                                placeholder="User Name"
                                type="text"
                                required="required"
                                value={user_name}
                                onChange={e =>
                                  this.handleChange(e, 'user_name')
                                }
                              />
                              <input
                                type="text"
                                placeholder="Phone Number"
                                name="phone_number"
                                required="required"
                                value={phone_number}
                                onChange={e =>
                                  this.handleChange(e, 'phone_number')
                                }
                              />
                              {/* <div class="row">
                                <div className="col-md-6 padding-right">
                                  <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Username"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                  />
                                </div>
                                <div className="col-md-6 padding-left">
                                  <input
                                    class="form-control"
                                    type="tel"
                                    placeholder="1-(555)-555-5555"
                                    id="example-tel-input"
                                  />
                                </div>
                              </div> */}

                              <input
                                type="email"
                                placeholder="Email Address"
                                name="email"
                                required="required"
                                value={register_email}
                                onChange={e =>
                                  this.handleChange(e, 'register_email')
                                }
                              />
                              <input
                                type="password"
                                placeholder="Password"
                                className="form-control"
                                required="required"
                                value={register_password}
                                onChange={e =>
                                  this.handleChange(e, 'register_password')
                                }
                              />
                              <input
                                type="password"
                                placeholder="Confirm Password"
                                className="form-control"
                                required="required"
                                value={confirm_password}
                                onChange={e =>
                                  this.handleChange(e, 'confirm_password')
                                }
                              />
                              {/* <div class="row">
                                <div className="col-md-12">
                                  <textarea
                                    class="form-control"
                                    id="exampleTextarea"
                                    rows="3"
                                    placeholder="Address"
                                  ></textarea>
                                </div>
                              </div>
                              <div class="row">
                                <div class="form-group col-md-12">
                                  <label for="exampleSelect1">Country</label>
                                  <select
                                    multiple
                                    class="form-control"
                                    id="exampleSelect1"
                                  >
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                  </select>
                                </div>
                              </div>
                              <div class="row">
                                <div className="col-md-12">
                                  <input
                                    class="form-control"
                                    type="tel"
                                    placeholder="Postal Code"
                                    id="example-tel-input"
                                  />
                                </div>
                              </div> */}

                              <button
                                type="submit"
                                onClick={e => this.registerHandler(e)}
                                className="btn btn-secondary btn-block border-radius"
                              >
                                Register
                              </button>
                              <p>
                                By Signing up you agree to our{' '}
                                <a href="#">terms of conditions</a>
                              </p>
                            </form>
                          </div>
                          <div className="tab-pane" id="tab_default_2">
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
              </div>{' '}
              {/* end col */}
            </div>{' '}
            {/* end row */}
          </div>
          {/* end container */}
        </section>
        {/* END HOME */}
        {/* START INVEST PERFORMANCE */}
        <Invest />
        {/* END INVEST PERFORMANCE */}
        {/* START TEAM PERFORMANCE */}
        <Team />
        {/* END TEAM PERFORMANCE */}
        {/* START SPORTS EXCHANGE */}
        <SportsExchange />
        {/* END SPORTS EXCHANGE */}
        {/* BLOG */}
        <Blog />
        {/* end BLOG */}
        <Milestone />
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    login_response: store.auth.login_response,
    register_response: store.auth.register_response
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loginUser: params => dispatch(loginUser(params)),
    registerUser: params => dispatch(registerUser(params))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing);
