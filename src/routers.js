import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SideNavBar from "./sideNavBar";
import Home from "./home";
import GlobalState from "./globalState";

const AppRouter = () => (
  <BrowserRouter basename="/">
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ width: 300 }}>
        <SideNavBar />
      </div>
      <Switch>
        {[
          <Route key="home" exact path="/" component={() => <Home />} />,
          <Route
            key="global_state"
            exact
            path="/global_state"
            component={() => <GlobalState />}
          />,
          <Route key="async" exact path="/async" />,
        ]}
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
