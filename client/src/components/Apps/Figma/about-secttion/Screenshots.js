import React from "react";

function Screenshots() {
  return (
    <div>
      <div className="screenshots-heading-container">
        <h4>Screenshots</h4>
      </div>
      <div className="screenshots-container">
        <img src={ss1}></img>
        <img src={ss2}></img>
        <img src={ss3}></img>
      </div>
    </div>
  );
}

export default Screenshots;
