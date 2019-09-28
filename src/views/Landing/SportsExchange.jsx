import React, { Component } from 'react'

export class SportsExchange extends Component {
    render() {
        return (
            <section id="sports-exchange">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h2>Trade Team Chips on Sports Exchange</h2>
                  <div className="sports-exchange">
                    <div className="left">
                      <div className="ipad ipad1">
                        <img src="images/iPad-Pro-Mockup.png" alt />
                      </div>
                      <div className="ipad">
                        <img src="images/iPad-Pro-Mockup2.png" alt />
                      </div>
                    </div>
                    <div className="right">
                      <p>
                        The Sports Investment Exchange functions like a stock
                        exchange for sports. Only that instead of company shares,
                        you are buying and selling Team Chips. Executed trades are
                        posted in real time so that you can see price fluctuations
                        as transactions are confirmed. Trading is easy. Simply hit
                        the “trade” button and decide whether you’d like to buy or
                        sell Team Chips. That’s it! As soon as your order is
                        matched, the trade is executed within seconds, and you can
                        start participating in your favorite team’s success.
                        <br />
                        <b>
                          Put your analytical abilities to the test! Are <br />
                          you up for the challenge?More About Exchange
                        </b>
                      </p>
                      <a href="#">More About Exchange</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
    }
}

export default SportsExchange
