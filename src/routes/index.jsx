import React from "react";
import OuterRoutes from "./OuterRoutes";
import InnerRoutes from "./InnerRoutes";
import Header from "../helper/Header";
import InnerHeader from "../helper/InnerHeader";
import Footer from "../helper/Footer";
import { Route, Switch, Redirect } from "react-router-dom";
class Routes extends React.Component {
  render() {
    return (
      <div>
        {!localStorage.getItem("token") ? (
          <div>
            <Header props={this.props} />
            <Switch>
              {OuterRoutes.map((prop, key) => {
                if (prop.redirect)
                  return <Redirect from={prop.path} to={prop.to} key={key} />;
                return (
                  <Route
                    exact
                    path={prop.path}
                    component={prop.component}
                    key={key}
                  />
                );
              })}
            </Switch>
            <Footer />
          </div>
        ) : (
          <div>
            <InnerHeader props={this.props} />
            <Switch>
              {InnerRoutes.map((prop, key) => {
                if (prop.redirect)
                  return <Redirect from={prop.path} to={prop.to} key={key} />;
                return (
                  <Route
                    exact
                    path={prop.path}
                    component={prop.component}
                    key={key}
                  />
                );
              })}
            </Switch>
            <Footer />
          </div>
        )}
      </div>
    );
  }
}

export default Routes;
