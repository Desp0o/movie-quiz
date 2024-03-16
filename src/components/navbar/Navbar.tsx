import React, { useState } from "react";
import NavLink from "./NavLink";
import DashboardIconSVG from "../SVGS/DashboardIconSVG";

const NavBar: React.FC = () => {
  const [activeLink, setActiveLink] = useState("");

  return (
    <div className="navbar">
      <NavLink
        icon={<DashboardIconSVG />}
        linkName="Link 1"
        path="/link1"
        isActive={activeLink === "/link1"}
      />
      <NavLink
        icon={<DashboardIconSVG />}
        linkName="Link 2"
        path="/link2"
        isActive={activeLink === "/link2"}
      />
      <NavLink
        icon={<DashboardIconSVG />}
        linkName="Link 3"
        path="/link3"
        isActive={activeLink === "/link3"}
      />
      <NavLink
        icon={<DashboardIconSVG />}
        linkName="Link 4"
        path="/link4"
        isActive={activeLink === "/link4"}
      />
      <NavLink
        icon={<DashboardIconSVG />}
        linkName="Link 5"
        path="/link5"
        isActive={activeLink === "/link5"}
      />
    </div>
  );
};

export default NavBar;
