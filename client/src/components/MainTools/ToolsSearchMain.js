import React from "react";

const ToolsSearchMain = () => {
  return (
    <div>
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
          <div>Category</div>
          <div>Staff Picks</div>
          <div>Tool Collection</div>
        </div>
      </div>
    </div>
  );
};

export default ToolsSearchMain;
