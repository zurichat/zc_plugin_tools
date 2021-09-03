import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";
// import { useHistory } from "react-router-dom";
// import ToolsHeader from "../../toolsheader/toolsheader";

const Gmail = () => {
  return (
    // Please Clean the code below and add your code to complete your task, This is an example code that can be deleted
    <>
      {/* <ToolsHeader /> */}
      <div className="flex flex-col h-screen">
        {/* <div
        onClick={handleClick}
        className="cursor-pointer p-2 flex space-x-2  w-max rounded-full text-gray-700"
      >
        <div>
          <FontAwesomeIcon icon={faAngleDoubleLeft} className="" />
        </div>
        <div className="">Back to Main</div>
      </div> */}
        <div className="flex flex-1 justify-center items-center ">
          <div className="font-extrabold text-2xl">
            This is the Gmail Home Page
          </div>
        </div>
      </div>
    </>
  );
};

export default Gmail;
