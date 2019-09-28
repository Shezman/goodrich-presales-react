import React, { Component } from 'react';
import Invest from './Invest';
import Team from './Team';
import Methodology from './Methodology';

export default class BuyChip extends Component {
  render() {
    return (
      <div>
        <section className="home bg-image home-small innerpage" id="home">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="home-wrapper home-intro row pagetitle">
                  <div className="col-md-12">
                    <h1>Buy Chips</h1>
                    <h4 className="normal-font-w">
                      The SIM allows you to put your love, passion and
                      analytical skills to the test by trading Goodrich Team
                      Chips (GTC) based on sports performance.
                    </h4>
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
        <Methodology />
      </div>
    );
  }
}
