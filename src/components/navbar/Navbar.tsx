import React from "react";
import NavLink from "./NavLink";
import DashboardIconSVG from "../SVGS/DashboardIconSVG";

const NavBar: React.FC = () => {

  return (
    <div className="navbar">
      <NavLink
        icon={<DashboardIconSVG />}
        linkName="Main"
        path="/"
      />
      <NavLink
        icon={<DashboardIconSVG />}
        linkName="Dashboard"
        path="/pages/Dashboard"
        
      />
      <NavLink
        icon={<DashboardIconSVG />}
        linkName="Link 3"
        path="/link3"
        
      />
      <NavLink
        icon={<DashboardIconSVG />}
        linkName="Link 4"
        path="/link4"
        
      />
      <NavLink
        icon={<DashboardIconSVG />}
        linkName="Link 5"
        path="/link5"
      />
    </div>
  );
};

export default NavBar;
