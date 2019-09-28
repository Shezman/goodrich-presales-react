import React, { Component } from "react";

export default class Deposit extends Component {
  render() {
    return (
      <div>
        <section className="home bg-image home-small innerpage" id="home">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="home-wrapper home-intro row pagetitle">
                  <div className="col-md-12">
                    <h1>Fund Your Account!</h1>
                  </div>
                </div>
              </div>{" "}
              {/* end col */}
            </div>{" "}
            {/* end row */}
            <div className="row ">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <ul className="fund_Account">
                      <li>
                        In order to make purchases on Goodrich, you will need to
                        link your bank account.{" "}
                      </li>
                      <li>We use Plaid to link your bank. </li>
                      <li>
                        It’s secure (transfer of your information is encrypted)
                        and private (credentials will never be accessible to
                        Goodrich).
                      </li>
                    </ul>
                  </div>
                  <input
                    className="form-control search_bar"
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button
                    type="submit"
                    className="btn btn-secondary btn-block enter_sim_btn"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* end container */}
        </section>
      </div>
    );
  }
}
