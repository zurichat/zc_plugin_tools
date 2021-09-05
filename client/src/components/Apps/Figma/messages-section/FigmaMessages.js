import React from "react";
import ss1 from "./../images/ss1.png";
import logo from "./../images/fignaLogo.png";
import "./../css/messages.css";

const FigmaMessages = () => {
  return (
    <>
      <div className="messages-welcome">
        <img src={logo}></img>
        <div className="welcome-info">
          <h4>This conversation is just between the two of you </h4>
          <p>
            Here you can post and recieve comments with <span>@Figma</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default FigmaMessages;
