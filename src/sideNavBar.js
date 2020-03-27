import * as React from "react";
import { Navigation } from "baseui/side-navigation";
import { withRouter } from "react-router-dom";

const SideNavBar = ({ history, location }) => {
  return (
    <Navigation
      items={[
        {
          title: "Form",
          itemId: "/",
          pathname: "/",
        },
        {
          title: "Global State",
          itemId: "/global_state",
          pathname: "/",
        },
        {
          title: "Async Calls",
          itemId: "/async",
          pathname: "/async",
        },
      ]}
      activeItemId={location.pathname}
      onChange={({ event, item }) => {
        // prevent page reload
        event.preventDefault();
        history.push(item.itemId);
      }}
    />
  );
};
export default withRouter(SideNavBar);
