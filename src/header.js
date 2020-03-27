import React from "react";

import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationList,
  StyledNavigationItem,
} from "baseui/header-navigation";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <HeaderNavigation>
      <StyledNavigationList $align={ALIGN.left}>
        <StyledNavigationItem>
          <h1>Voting Machine - Voter Plus</h1>
        </StyledNavigationItem>
      </StyledNavigationList>
      <StyledNavigationList $align={ALIGN.center} />
      <StyledNavigationList $align={ALIGN.right}>
        <StyledNavigationItem>
          <NavLink to="/">Home</NavLink>
        </StyledNavigationItem>
        <StyledNavigationItem>
          <NavLink to="/vote">Vote Now!</NavLink>
        </StyledNavigationItem>
      </StyledNavigationList>
    </HeaderNavigation>
  );
};

export default Header;
