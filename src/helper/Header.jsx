import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { toaster } from '../helper/Toaster';
export class Header extends Component {
  handleToast = () => {
    toaster('warning', 'You need to login first to access this functionality');
  };
  render() {
    return (
      <div className="navbar navbar-custom sticky" role="navigation">
        <div className="container">
          <div className="navbar-collapse collapse" id="data-scroll">
            <ul className="nav navbar-nav navbar-left">
              <li
                className={
                  this.props.props.location.pathname === '/' ? 'active' : ''
                }
              >
                <Link to="/" className="scroll-func">
                  Home
                </Link>
              </li>
              <li
                className={
                  this.props.props.location.pathname === '/buychip'
                    ? 'active'
                    : ''
                }
              >
                <Link to="/buychip" className="scroll-func">
                  BUY CHIPS
                </Link>
              </li>
              <li
                className={
                  this.props.props.location.pathname === '/x' ? 'active' : ''
                }
              >
                <Link to="/exchange" className="scroll-func">
                  EXCHANGE
                </Link>
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
                    <Link to="/about">ABOUT</Link>
                  </li>
                  <li>
                    <Link to="landing-2.html">HELP</Link>
                  </li>
                  <li>
                    <Link to="/contact">CONTACT</Link>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link to="/login">Log In</Link>
              </li>
              <li>
                <Link to="/register" className="sign-up">
                  Sign Up
                </Link>
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
                  EN/CN
                  <span className="caret" />
                </a>
                <ul className="dropdown-menu dropdown-menu-dark dropdown-left-0">
                  <li>
                    <a href>English</a>
                  </li>
                  <li>
                    <a href>CHINESE</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#" onClick={e => this.handleToast(e)}>
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
