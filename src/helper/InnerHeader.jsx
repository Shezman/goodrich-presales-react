import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { toaster } from '../helper/Toaster';
export class InnerHeader extends Component {
  handleLogout = e => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };
  handleToast = () => {
    toaster('success', 'This feature is coming soon');
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
                  this.props.props.location.pathname === '/account_details'
                    ? 'active'
                    : ''
                }
              >
                <Link to="/account_details" className="scroll-func">
                  ACCOUNT
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
                <a href="#" onClick={e => this.handleLogout(e)}>
                  Log Out
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
                <Link to="/cart">
                  <i className="fa fa-shopping-cart" />
                </Link>
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

export default InnerHeader;
