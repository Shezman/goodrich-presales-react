import React, { Component } from "react";
import { connect } from "react-redux";
import { toaster } from "../../helper/Toaster";
import { registerUser } from "../../actions/auth";

export class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: "",
      last_name: "",
      phone_number: "",
      user_name: "",
      register_email: "",
      register_password: "",
      confirm_password: ""
    };
  }
  componentWillReceiveProps(newProps) {
    const { register_response } = newProps;

    if (register_response && register_response.status === "success") {
      this.props.history.push("/");
    } else if (register_response && register_response.status !== "fail") {
      toaster("error", register_response.message);
    }
  }

  handleChange = (e, name) => {
    let reg = /^[0-9]{0,10}$/;
    if (name === "phone_number" && reg.test(e.target.value) === false) {
      return;
    }
    this.setState({ [name]: e.target.value });
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
      first_name !== "" &&
      last_name !== "" &&
      phone_number !== "" &&
      user_name !== "" &&
      register_email !== "" &&
      register_password !== "" &&
      confirm_password !== ""
    ) {
      if (user_name.length < 6) {
        toaster("error", "User name can't be less than 6 digits");
        return;
      }
      if (phone_number.length < 10) {
        toaster("error", "Phone Number can't be less than 10 digits");
        return;
      }
      if (
        register_email !== "" &&
        !register_email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,3})$/i)
      ) {
        toaster("error", "Email ID is not valid");
        return;
      }

      if (register_password.length < 6 || confirm_password.length < 6) {
        toaster("error", "Password must contains 6 digits.");
        return;
      }
      if (register_password !== confirm_password) {
        toaster("error", "Password and confirm password not matched.");
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
      localStorage.setItem("register_data", JSON.stringify(data));
      this.props.history.push("/otp");
    } else {
      toaster("error", "Please fill all the fields");
    }
  };
  render() {
    const {
      first_name,
      last_name,
      register_email,
      user_name,
      phone_number,
      register_password,
      confirm_password
    } = this.state;
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
                                      this.handleChange(e, "first_name")
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
                                      this.handleChange(e, "last_name")
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
                                  this.handleChange(e, "user_name")
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
                                type="text"
                                placeholder="Phone Number"
                                name="phone_number"
                                required="required"
                                value={phone_number}
                                onChange={e =>
                                  this.handleChange(e, "phone_number")
                                }
                              />

                              <input
                                type="email"
                                placeholder="Email Address"
                                name="email"
                                required="required"
                                value={register_email}
                                onChange={e =>
                                  this.handleChange(e, "register_email")
                                }
                              />
                              <input
                                type="password"
                                placeholder="Password"
                                className="form-control"
                                required="required"
                                value={register_password}
                                onChange={e =>
                                  this.handleChange(e, "register_password")
                                }
                              />
                              <input
                                type="password"
                                placeholder="Confirm Password"
                                className="form-control"
                                required="required"
                                value={confirm_password}
                                onChange={e =>
                                  this.handleChange(e, "confirm_password")
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
                                className="btn btn-secondary btn-block border-radius"
                                onClick={e => this.registerHandler(e)}
                              >
                                Register
                              </button>
                              <p>
                                By Signing up you agree to our{" "}
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
    register_response: store.auth.register_response
  };
};

const mapDispatchToProps = dispatch => {
  return {
    registerUser: params => dispatch(registerUser(params))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
