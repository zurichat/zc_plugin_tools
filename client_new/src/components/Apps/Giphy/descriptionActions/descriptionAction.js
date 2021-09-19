import { Link } from "react-router-dom";

import { GreenBtn, WhiteBtn } from "../buttons/button";
import Logo from "../logo/logo";

import "./descriptionAction.css";

const DescriptionAction = () => {
  return (
    <div className="action-section">
      <Logo />
      <div className="btn-wrapper">
        <GreenBtn>Add to Zuri Chat</GreenBtn>
      </div>
      <div className="learn">
        <Link to={`/`}>Learn more & Support</Link>
      </div>
      <div className="categories-section">
        <p>Categories</p>
        <div className="categoryBtns">
          <WhiteBtn>Social & fun</WhiteBtn>
          <WhiteBtn>Essential Apps</WhiteBtn>
        </div>
      </div>
    </div>
  );
};

export default DescriptionAction;
