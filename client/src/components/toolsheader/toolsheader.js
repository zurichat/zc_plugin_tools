import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const ToolsHeader = ({}) => {
  return (
    <div>
      <Link to={"/"}>
        <div className="">
          <div className="cursor-pointer p-2 flex space-x-2  w-max rounded-full text-gray-700">
            <div>
              <FontAwesomeIcon icon={faAngleDoubleLeft} className="" />
            </div>
            <div className="">Back to Main</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ToolsHeader;
