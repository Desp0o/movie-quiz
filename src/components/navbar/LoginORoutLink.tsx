import { Link } from "react-router-dom"
import { loginSVG } from "../../assets/SVGS"


const LoginORoutLink = () => {
    const user = 's'

  return (
    <div>
        {user
            ?
            <Link to='/pages/Login' className="login_or_logout_link_item nav_link">
                <div className="login_svg_parent">{loginSVG}</div>
                <p>Log Out</p>
            </Link>
            :
            <Link to='/' className="login_or_logout_link_item nav_link">{loginSVG} Log In</Link>
        }
    </div>
  )
}

export default LoginORoutLink