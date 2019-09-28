import React, { Component } from 'react'

export class Blog extends Component {
    render() {
        return (
            <section id="blog">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="title-box text-center">
                  <h2>Buy Your Preferred chips</h2>
                  <p>
                    We’ve made the trading process of GTC as easy as possible
                    for you.
                  </p>
                </div>
              </div>
            </div>
            {/* end row */}
            <div className="row">
              <div className="col-md-12">
                <div className="blog-inner-wrap">
                  <div className="blog-box">
                    <div className="blog-box-inner">
                      <div className="blog-box-content">
                        <h4 className="blog-grid-title-md">
                          {/* <a href="#">Lorem ipsum dolor sit amet</a> */}
                        </h4>
                        <p>
                          Create a GoodRich account using your email address.
                        </p>
                      </div>
                      <div className="blog-box-footer">
                        <a href="#" className="btn btn-sm btn-custom">
                          Sign Up
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="blog-box">
                    <div className="blog-box-inner">
                      <div className="blog-box-content">
                        <h4 className="blog-grid-title-md">
                          {/* <a href="#">Lorem ipsum dolor sit amet</a> */}
                        </h4>
                        <p>
                          Decide which Team Chips you would like to buy, and how
                          many.
                        </p>
                      </div>
                      <div className="blog-box-footer">
                        <a href="#" className="btn btn-sm btn-custom">
                          Purchase
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="blog-box">
                    <div className="blog-box-inner">
                      <div className="blog-box-content">
                        <h4 className="blog-grid-title-md">
                          {/* <a href="#">Lorem ipsum dolor sit amet</a> */}
                        </h4>
                        <p>
                          That’s it! You are now a proud owner of Team Chips. If
                          you want to sell your chips, just hit the “trade”
                          button and sell.
                        </p>
                      </div>
                      <div className="blog-box-footer">
                        <a href="#" className="btn btn-sm btn-custom">
                          Trade
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* end row */}
          </div>{" "}
          {/* end container */}
        </section>
        )
    }
}

export default Blog
