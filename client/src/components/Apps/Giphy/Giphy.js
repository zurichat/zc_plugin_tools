// import ToolsHeader from "../../toolsheader/toolsheader";
import DescriptionAction from "./descriptionActions/descriptionAction";
import GiphyHeader from "./GiphyHeader/GiphyHeader";
import React from "react";
import MainGiphyLayout from "./main-giphy-layout/MainGiphyLayout";

const Giphy = () => {
  return (
    <>
      {/* <ToolsHeader /> */}
      <div>
        <GiphyHeader />
        <MainGiphyLayout />
      </div>
    </>
  );
};

export default Giphy;
