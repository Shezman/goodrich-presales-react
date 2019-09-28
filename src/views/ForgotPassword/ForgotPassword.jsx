import React, { Component } from "react";

export default class ForgotPassword extends Component {
  render() {
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
                                Forgot Password
                                <span></span>
                              </h5>

                              <input
                                type="email"
                                placeholder="Email Address"
                                name="login_email"
                                value=""
                                required="required"
                              />

                              <button
                                type="submit"
                                className="btn btn-secondary btn-block border-radius"
                              >
                                Send
                              </button>
                              <p>
                                By forgot password you agree to our terms of
                                conditions
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
