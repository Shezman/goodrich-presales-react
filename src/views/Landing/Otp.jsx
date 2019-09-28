import React, { Component } from "react";
import { connect } from "react-redux";
import { toaster } from "../../helper/Toaster";
import { getOtp, validateOtp, registerUser } from "../../actions/auth";
import PhoneCode from "react-phone-code";

let get_otp_flag = false;
let otp_flag = false;
let register_flag = false;
export class Otp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      phone: "",
      phone_code: "",
      otp: "",
      request_id: ""
    };
  }
  componentWillMount() {
    let storage_data = JSON.parse(localStorage.getItem("register_data"));
    this.setState({
      name: storage_data && storage_data.first_name,
      phone: storage_data && storage_data.phone_number
    });
  }

  componentWillReceiveProps(newProps) {
    const { get_otp_response, otp_response, register_response } = newProps;

    if (
      get_otp_response &&
      get_otp_response.status === "success" &&
      get_otp_flag
    ) {
      this.setState({ request_id: get_otp_response.data.request_id });
      toaster("success", "Otp successfully delivered");
      get_otp_flag = false;
    } else if (
      get_otp_response &&
      get_otp_response.status === "fail" &&
      get_otp_flag
    ) {
      toaster("error", "Something went wrong.");
      get_otp_flag = false;
    }
    if (otp_response && otp_response.status === "success" && otp_flag) {
      this.props.history.push("/congratulation");
      toaster("success", "Otp verified successfully");
      let register_data = JSON.parse(localStorage.getItem("register_data"));
      let data = {
        firstName: register_data.first_name,
        lastName: register_data.last_name,
        email: register_data.register_email,
        username: register_data.user_name,
        password: register_data.register_password,
        password2: register_data.confirm_password,
        phoneNo: register_data.phone_number
      };
      this.props.registerUser(data);
      register_flag = true;
      otp_flag = false;
    } else if (otp_response && otp_response.status === "fail" && otp_flag) {
      otp_flag = false;
      toaster("error", "Something went wrong.");
    }
    if (
      register_response &&
      register_response.status === "success" &&
      register_flag
    ) {
      this.props.history.push("/");
      register_flag = false;
      toaster("success", register_response.data.message);
    } else if (
      register_response &&
      register_response.status === "fail" &&
      register_flag
    ) {
      register_flag = false;
      toaster("error", register_response.data.message);
    }
  }
  getOtp = e => {
    const { phone, phone_code } = this.state;
    e.preventDefault();
    if (phone !== "") {
      if (phone_code === "") {
        toaster("error", "Please select phone code");
        return;
      }
      if (phone !== "" && !phone.match(/^[0-9]{0,10}$/)) {
        toaster("error", "Phone must contain 10 digits");
        return;
      }
      let phone1 = phone_code.substring(1) + phone;
      let data = {
        phoneNo: phone1
      };

      this.props.getOtp(data);
      get_otp_flag = true;
    } else {
      toaster("error", "Please fill the mobile number.");
    }
  };
  validateOtp = e => {
    console.log(this.state.request_id);
    const { otp, request_id } = this.state;
    e.preventDefault();
    if (otp !== "") {
      let data = {
        requestId: request_id,
        otp: otp
      };
      this.props.validateOtp(data);
      otp_flag = true;
    } else {
      toaster("error", "Please fill the OTP.");
    }
  };

  handleChange = (e, name) => {
    let reg = /^[0-9]{0,10}$/;
    if (name === "phone" && reg.test(e.target.value) === false) {
      return;
    }
    this.setState({ [name]: e.target.value });
  };
  render() {
    const { phone, otp, name } = this.state;

    return (
      <div>
        {/* otp */}
        <section className="otp_section bg-dark">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="home-wrapper home-intro row">
                  <div className="col-md-6 col-sm-10 col-sm-offset-1 col-md-offset-3 m-t-20">
                    <div className="tabbable-panel">
                      <div className="tabbable-line">
                        <div className="tab-content tab-content-BuySell m-t-9">
                          <div className="tab-pane active">
                            <form
                              className="intro-form"
                              action="#"
                              id="invite"
                              method="POST"
                            >
                              <h5>
                                Hey <span>{name}</span>
                              </h5>
                              <h3>
                                In order to secure your account, we need more
                                information.
                              </h3>
                              <div className="form-group">
                              <PhoneCode
                                onSelect={code =>
                                  this.setState({ phone_code: code })
                                } // required
                                showFirst={["US", "IN"]}
                                defaultValue="select county"
                                id="some-id"
                                name="some-name"
                                className="form-control"
                              />
                              </div>

                              <input
                                type="text"
                                placeholder="Phone Number"
                                name="phone"
                                value={phone}
                                onChange={e => this.handleChange(e, "phone")}
                                required="required"
                                disabled
                              />
                              <div className="form-group">
                                <button
                                  type="button"
                                  onClick={e => this.getOtp(e)}
                                  className="btn btn-secondary btn-block border-radius"
                                >
                                  Send Code
                                </button>
                              </div>
                              <input
                                type="text"
                                placeholder="OTP"
                                onChange={e => this.handleChange(e, "otp")}
                                className="form-control"
                                required="required"
                              />
                              <button
                                type="button"
                                onClick={e => this.validateOtp(e)}
                                className="btn btn-secondary btn-block border-radius"
                              >
                                Next
                              </button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
              {/* end col */}
            </div>{" "}
            {/* end row */}
          </div>
          {/* end container */}
        </section>
        {/* END HOME */}
      </div>
    );
  }
}
const mapStateToProps = store => {
  return {
    get_otp_response: store.auth.get_otp_response,
    otp_response: store.auth.otp_response,
    register_response: store.auth.register_response
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getOtp: params => dispatch(getOtp(params)),
    validateOtp: params => dispatch(validateOtp(params)),
    registerUser: params => dispatch(registerUser(params))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Otp);
