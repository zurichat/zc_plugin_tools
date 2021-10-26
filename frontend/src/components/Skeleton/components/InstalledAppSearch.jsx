import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const InstalledAppSearch = () => {
  return (
    <div>
      <div>
        <div className="mx-4 mb-4 relative flex">
          <input
            type="text"
            name="searchInstalled"
            id="searchInstalled"
            placeholder="Search Tools"
            className="pl-10 py-2 rounded-md flex-1 outline-none focus:ring focus:ring-gray-300"
          />
          <div className="absolute top-2 left-2">
            <FontAwesomeIcon icon={faSearch} className="text-gray-200" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstalledAppSearch;
