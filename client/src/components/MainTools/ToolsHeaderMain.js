import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronLeft, faAngleDown } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";

const ToolsHeaderMain = () => {
  return (
    <div>
      <div className="flex flex-col mx-8 my-4">
        {/* <div className="flex justify-between  pb-3 mb-3">
          <div className="font-black">Tools Directory</div>
          <Link to={"/"} className="no-underline">
            <div className="flex justify-between items-center space-x-2 cursor-pointer text-black">
              <div className="font-semibold">
                <FontAwesomeIcon icon={faChevronLeft} className="" />
              </div>
              <div className="">Back to Tools</div>
            </div>
          </Link>
        </div> */}
        <div className="border-b-2 border-gray-300">
          <div className="flex pb-8 ">
            <input
              type="text"
              name="SearchBar"
              id="SearchBar"
              placeholder="Search Tools Directory"
              className="p-1 flex-1 rounded-md outline-none focus:ring focus:ring-gray-300 "
            />
          </div>
          <div className="flex space-x-14 text-sm mb-2">
            <div>All</div>
            <div className="flex space-x-2">
              <div>Category</div>
              <div>
                <FontAwesomeIcon icon={faAngleDown} />
              </div>
            </div>
            <div className="flex space-x-2">
              <div>Staff Picks</div>
              <div>
                <FontAwesomeIcon icon={faAngleDown} />
              </div>
            </div>
            <div className="flex space-x-2">
              <div>Tool Collection</div>
              <div>
                <FontAwesomeIcon icon={faAngleDown} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsHeaderMain;
