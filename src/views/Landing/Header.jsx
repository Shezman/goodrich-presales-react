import React, { Component } from 'react';

export class Header extends Component {
  render() {
    return (
      <div className="navbar navbar-custom sticky" role="navigation">
        <div className="container">
          <div className="navbar-collapse collapse" id="data-scroll">
            <ul className="nav navbar-nav navbar-left">
              <li className="active">
                <a className="scroll-func" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="scroll-func" href="#">
                  BUY CHIPS
                </a>
              </li>
              <li>
                <a className="scroll-func" href="#">
                  EXCHANGE
                </a>
              </li>
              <li className="dropdown">
                <a
                  href="#"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  MORE
                  <span className="caret" />
                </a>
                <ul className="dropdown-menu dropdown-menu-dark dropdown-left-0">
                  <li>
                    <a href="landing.html">ABOUT</a>
                  </li>
                  <li>
                    <a href="landing-2.html">HELP</a>
                  </li>
                  <li>
                    <a href="landing-2.html">CONTACT</a>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#">Log In</a>
              </li>
              <li>
                <a href="#" className="sign-up">
                  Sign Up
                </a>
              </li>
              <li className="dropdown">
                <a
                  href="#"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  EN
                  <span className="caret" />
                </a>
                <ul className="dropdown-menu dropdown-menu-dark dropdown-left-0">
                  <li>
                    <a href>English</a>
                  </li>
                  {/* <li>
                    <a href>CHINESE</a>
                  </li> */}
                </ul>
              </li>
              <li>
                <a href>
                  <i className="fa fa-shopping-cart" />
                </a>
              </li>
            </ul>
          </div>
          {/*/Menu */}
        </div>
        {/* end container */}
      </div>
    );
  }
}

export default Header;
