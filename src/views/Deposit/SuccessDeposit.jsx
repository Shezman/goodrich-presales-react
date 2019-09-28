import React, { Component } from "react";

export default class SuccessDeposit extends Component {
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
                      We have linked your bank account to your Goodrich account.
                      You are now able to deposit up to $?????? And trade chips.
                    </p>
                    <p>
                      <i>
                        Please note: You will not be able to withdraw money or
                        deposit until your identity is fully verified
                      </i>
                    </p>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-secondary btn-block enter_sim_btn"
                  >
                    Enter the Sim
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
