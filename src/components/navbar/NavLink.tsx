import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

interface NavLinkProps {
    icon: ReactNode;
    linkName: string;
    path: string;
    setActiveLink: (path: string) => void;
    isActive: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ icon, linkName, path, setActiveLink, isActive }) => {
  
  const handleClick = () => {
    setActiveLink(path);
  };

  return (
    <Link to={path} onClick={handleClick}>
        <div className={isActive ? "nav_link active" : "nav_link"}>
            {icon}
            <p>{linkName}</p>
        </div>
    </Link>
  );
};

export default NavLink;
