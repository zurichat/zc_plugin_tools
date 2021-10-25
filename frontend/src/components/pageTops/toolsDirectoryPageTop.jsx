import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function ToolsDirectoryPageTop(props) {
  return (
    <div className="flex justify-between mx-8 mt-4  pb-3 mb-3">
      <div className="font-black text-lg lg:text-lg xl:text-xl 2xl:text-2xl">
        Tools Directory
      </div>
      <Link to={"/"} className="no-underline">
        <div className="flex justify-between items-center space-x-2 cursor-pointer text-black bg-gray-200 border-gray-400 px-2 py-1 hover:bg-gray-400  rounded-full transition transform duration-300 ease-in-out">
          <div className="font-bold hover:text-white">
            <FontAwesomeIcon icon={faChevronLeft} className="" />
          </div>
          <div className="hover:text-white">Back to Tools</div>
        </div>
      </Link>
    </div>
  );
}

export default ToolsDirectoryPageTop;
