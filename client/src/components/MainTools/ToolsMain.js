import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import ToolsSearchMain from "./ToolsSearchMain";

const ToolsMainPage = () => {
  return (
    <div>
      <div className="flex flex-col mx-8 my-4">
        <div className="flex justify-between  pb-3 mb-3">
          <div className="font-black">Tools Directory</div>
          <Link to={"/"} className="no-underline">
            <div className="flex justify-between items-center space-x-2 cursor-pointer text-black">
              <div className="font-semibold">
                <FontAwesomeIcon icon={faChevronLeft} className="" />
              </div>
              <div className="">Back to Tools</div>
            </div>
          </Link>
        </div>
        <ToolsSearchMain />
      </div>
    </div>
  );
};

export default ToolsMainPage;
