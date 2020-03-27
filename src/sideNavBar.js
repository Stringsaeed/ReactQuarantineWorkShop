import * as React from "react";
import { Navigation } from "baseui/side-navigation";
import { withRouter } from "react-router-dom";

const SideNavBar = ({ history, location }) => {
  return (
    <Navigation
      items={[
        {
          title: "Home",
          itemId: "/",
          pathname: "/",
        },
      ]}
      style={{flex: 1}}
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
