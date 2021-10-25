import React from "react";
import Settings from "../../../../assets/giphy/settingsgif.svg";
import DisplayPic from "../../../../assets/giphy/displaypic.png";
import "./GiphyHeader.css";
import SearchBarGiphy from "../searchcomponent/searchbargiphy";

const GiphyHeader = () => {
  return (
    <div className="giphy-headerr">
      <SearchBarGiphy text="Search Giphy" />
      <img src={Settings} alt="" className="settingsgiphy" />
      <img src={DisplayPic} alt="" className="dpgiphy" />
    </div>
  );
};

export default GiphyHeader;
