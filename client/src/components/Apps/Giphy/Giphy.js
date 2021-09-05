// import ToolsHeader from "../../toolsheader/toolsheader";
import DescriptionAction from "./descriptionActions/descriptionAction";
import GiphyHeader from "./GiphyHeader/GiphyHeader";
import React from "react";
import MainGiphyLayout from "./main-giphy-layout/MainGiphyLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import './giphy.css'

const Giphy = () => {
  return (
      <div className="giphy-plugin-page bg-gray-200">
        <GiphyHeader />
        <div className="backBtn">
         <Link to="/" > <FontAwesomeIcon icon={faAngleLeft} className="" /> Back to Tools</Link>
        </div>  
        <MainGiphyLayout />
      </div>
  );
};

export default Giphy;
