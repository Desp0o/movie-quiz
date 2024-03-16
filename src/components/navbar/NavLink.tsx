import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"
import { useSelector } from "react-redux";

interface NavLinkProps {
    icon: ReactNode;
    linkName: string;
    path: string;
}

interface RootState {
  linkReducer:{
    value: string;
  }
}

const NavLink: React.FC<NavLinkProps> = ({linkName, icon, path }) => {
  
  const linkNameStore = useSelector((state: RootState) => state.linkReducer.value)

  return (
    <Link to={path}>
        <div className={linkName === linkNameStore ? "nav_link active" : "nav_link"}>
            {icon}
            <p>{linkName}</p>
        </div>
    </Link>
  );
};

export default NavLink;
