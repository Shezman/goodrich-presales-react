import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="footer-box-wrap">
                <div className="footer-box">
                  <div className="subscribe">
                    <label>Subscribe to Our Newsletter</label>
                    <div className="email-subscribe">
                      <i className="fa fa-envelope-o" aria-hidden="true" />
                      <input
                        type="text"
                        name="email"
                        id="subscribe"
                        placeholder="Enter your email"
                      />
                      <input
                        type="submit"
                        className="btn btn-custom"
                        defaultValue="Enter"
                      />
                    </div>
                  </div>
                  <div className="join-community">
                    <h5>Join Our Community</h5>
                    <a href="#">
                      {" "}
                      <i className="fa fa-telegram" />
                    </a>{" "}
                    <a href="#">
                      {" "}
                      <i className="fa fa-facebook" />
                    </a>{" "}
                    <a href="#">
                      {" "}
                      <i className="fa fa-instagram" />
                    </a>{" "}
                    <a href="#">
                      {" "}
                      <i className="fa fa-twitter" />
                    </a>{" "}
                    <a href="#">
                      {" "}
                      <i className="fa fa-linkedin" />
                    </a>{" "}
                    {" "}
                    <a href="#">
                      {" "}
                      <i className="fa fa-wechat" />
                    </a>
                  </div>
                </div>
                <div className="footer-box">
                  <h4>Explore</h4>
                  <ul>
                    <li>About Goodrich</li>
                    <li>We Are Hiring</li>
                    <li>Contact Us</li>
                    <li>Blog</li>
                  </ul>
                </div>
                <div className="footer-box">
                  <h4>Support</h4>
                  <ul>
                    <li>Knowledge Hub</li>
                    <li>myGR Account</li>
                    <li>Broker Log In</li>
                    <li>Partnership</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copy-right">
          <p>
            Copyright ©&nbsp;2019 Goodrich <a href>| Terms &amp; Conditions</a>
            <a href> | Privacy Policy</a>
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
