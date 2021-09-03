import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

const ToolsHeader = ({ children }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/");
  };

  return (
    <div>
      <div
        onClick={handleClick}
        className="cursor-pointer p-2 flex space-x-2  w-max rounded-full text-gray-700"
      >
        <div>
          <FontAwesomeIcon icon={faAngleDoubleLeft} className="" />
        </div>
        <div className="">Back to Main</div>
      </div>
      <div className="">{children}</div>
    </div>
  );
};

export default ToolsHeader;
