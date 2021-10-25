import { Link } from "react-router-dom";

import { ActionBtn, WhiteBtn } from "./Button";
import Logo from "./Logo";

import "../styles/descriptionAction.css";


function DescriptionAction(){
  return (
    <div className="action-section">
      <Logo />
      <div className="btn-wrapper">
        <ActionBtn>Configuration</ActionBtn>
        <ActionBtn>App Homepage</ActionBtn>
      </div>
      {/* <div className="learn">
        <Link to={`/`}>Learn more & Support</Link>
      </div>
      <div className="categories-section">
        <p>Categories</p>
        <div className="categoryBtns">
          <WhiteBtn>Social & fun</WhiteBtn>
          <WhiteBtn>Essential Apps</WhiteBtn>
        </div>
      </div> */}
    </div>
  );
};

export default DescriptionAction;
