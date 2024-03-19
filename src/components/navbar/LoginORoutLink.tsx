import { Link } from "react-router-dom";
import { loginSVG } from "../../assets/SVGS";
import { useUserHook } from "../../hooks/useUserHook";

const LoginORoutLink = () => {
  const { userName } = useUserHook();

  return (
    <div>
      {userName ? (
        <Link to="/pages/Login" className="login_or_logout_link_item nav_link">
          {loginSVG}
          <p>Log Out</p>
        </Link>
      ) : (
        <Link to="/" className="login_or_logout_link_item nav_link">
          <div className="login_svg_parent">{loginSVG}</div>
          <p>Log In</p>
        </Link>
      )}
    </div>
  );
};

export default LoginORoutLink;
