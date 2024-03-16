import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

interface NavLinkProps {
    icon: ReactNode;
    linkName: string;
    path: string;
    isActive: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ icon, linkName, path, isActive }) => {
  

  return (
    <Link to={path}>
        <div className={isActive ? "nav_link active" : "nav_link"}>
            {icon}
            <p>{linkName}</p>
        </div>
    </Link>
  );
};

export default NavLink;
