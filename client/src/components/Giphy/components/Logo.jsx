import logo from "../assets/giphy.svg";
import "../styles/logo.css";

const Logo = () => {
  return (
    <div className="logo-wrapper">
      <img src={logo} />
    </div>
  );
};

export default Logo;
