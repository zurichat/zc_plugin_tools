import React from "react";
import SearchBar from "../searchcomponent/searchbar.component";
import Settings from "../../../../assets/giphy/settingsgif.svg";
import DisplayPic from "../../../../assets/giphy/displaypic.png";
import "./GiphyHeader.css";

const GiphyHeader = () => {
  return (
    <div className="giphy-headerr">
      <SearchBar text="Search Giphy" />
      <img src={Settings} alt="" className="settingsgiphy" />
      <img src={DisplayPic} alt="" className="dpgiphy" />
    </div>
  );
};

export default GiphyHeader;
