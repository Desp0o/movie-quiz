import React from "react";
import NavLink from "./NavLink";
import { DashboardIconSVG } from "../SVGS/DashboardIconSVG";

const NavBar: React.FC = () => {

  const {dashIconActive, dashIconInactive} = DashboardIconSVG()

  return (
    <div className="navbar">
      <NavLink
        iconActive={dashIconActive}
        iconInactive={dashIconInactive}
        linkName="Main"
        path="/"
      />
      <NavLink
        iconActive={''}
        iconInactive={''}
        linkName="Dashboard"
        path="/pages/Dashboard"
        
      />
      <NavLink
        iconActive={''}
        iconInactive={''}
        linkName="Link 3"
        path="/link3"
        
      />
      <NavLink
        iconActive={''}
        iconInactive={''}
        linkName="Link 4"
        path="/link4"
        
      />
      <NavLink
        iconActive={''}
        iconInactive={''}
        linkName="Link 5"
        path="/link5"
      />
    </div>
  );
};

export default NavBar;
