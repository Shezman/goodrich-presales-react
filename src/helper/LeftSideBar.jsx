import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import InnerRoutes from "../routes/InnerRoutes";
class LeftSideBar extends Component {
  activeRoute(routeName) {
    return window.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }
  render() {
    return (
      <div className="left_sidebar">
        <div className="logo_div">
          <div className="menu_toggle">
            <span />
            <span />
            <span />
          </div>
          <div className="site_logo">
            <Link to="#">Pogo</Link>
          </div>
        </div>
        <div className="main_menu">
          <ul>
            <li>
              <NavLink className="" to="#" activeClassName="activeClass">
                <i className="home_icon" />
                <span className="">Home</span>
              </NavLink>
            </li>
            {InnerRoutes.map((prop, key) => {
              return (
                prop.name && (
                  <li className={this.activeRoute(prop.path)} key={key}>
                    <Link to={prop.path}>
                      <i className="billing_icon" />
                      <span>{prop.name}</span>
                    </Link>
                  </li>
                )
              );
            })}
            {/* <li><a href="#"><i className="home_icon"></i><span>Home</span></a></li> */}
            {/* <li className={this.activeRoute("/dashboard")}>
              <Link to="/dashboard">
                <i className="billing_icon" />
                <span>Billing</span>
              </Link>
            </li>
            <li className={this.activeRoute("/products")}>
              <Link to="/products">
                <i className="billing_icon" />
                <span>Products</span>
              </Link>
            </li>
            <li>
              <Link to="#">
                <i className="setting_icon" />
                <span>Settings</span>
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    );
  }
}

export default LeftSideBar;
