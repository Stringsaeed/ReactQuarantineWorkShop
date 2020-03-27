// import * as React from "react";
// import { Navigation } from "baseui/side-navigation";
// import { withRouter } from "react-router-dom";
//
// const App = ({ history, location }) => {
//   return (
//     <Navigation
//       items={[
//         {
//           title: "Home",
//           itemId: "/home",
//         },
//       ]}
//       activeItemId={location.pathname}
//       onChange={({ event, item }) => {
//         // prevent page reload
//         event.preventDefault();
//         history.push(item.itemId);
//       }}
//     />
//   );
// };
// export default withRouter(App);

import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SideNavBar from "./sideNavBar";
import Home from "./home";

const AppRouter = () => (
  <BrowserRouter basename="/">
    <div style={{ display: "flex", flexDirection: "row" }}>
      <SideNavBar />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
