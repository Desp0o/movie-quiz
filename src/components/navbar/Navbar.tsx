import React from "react";
import NavLink from "./NavLink";
import { LinkDataBase } from "./LinksDB";

const NavBar: React.FC = () => {
  return (
    <div className="navbar">
      {LinkDataBase.map((link, index) => {
        return (
          <NavLink
            key={index}
            iconActive={link.iconActive}
            iconInactive={link.iconInactive}
            linkName={link.linkName}
            path={link.path}
          />
        );
      })}
    </div>
  );
};

export default NavBar;
