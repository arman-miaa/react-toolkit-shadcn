import { Link } from "react-router";
import logo from "../../assets/logo.jpg";
import { ModeToggle } from "../mode-toggle";
import FacebookLoginButton from "../FacebookLoginButton";
import GoogleLoginButton from "../GoogleLoginButton ";
import Logout from "../Logout";
import GoogleAdsLoginButton from "../GoogleAdsLoginButton";

const Navbar = () => {
  return (
    <header className="w-full flex items-center  shadow-sm py-4">
      <div className="container mx-auto  flex items-center gap-3 px-4">
        <img
          src={logo}
          alt="Logo"
          className="w-10 h-10 rounded-full object-cover"
        />
        <h3 className="text-xl font-semibold text-gray-800">Task Master</h3>
      <Link to="/">Task</Link>
        <Link to="/user">User</Link>
        <FacebookLoginButton />
        <GoogleLoginButton />
        <Logout />
        <GoogleAdsLoginButton/>
      </div>
      <div>
        <ModeToggle/>
      </div>
    </header>
  );
};

export default Navbar;
