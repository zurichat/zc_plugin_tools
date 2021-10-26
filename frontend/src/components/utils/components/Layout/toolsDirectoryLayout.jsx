import React from "react";
import { Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const ToolsDirectory = ({ children }) => (
  <div className="">
    <div className="">{children}</div>
  </div>
);

const ToolsDirectoryLayout = ({ component: Component, ...rest }) => {
  return (
    <div>
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
      <Route
        {...rest}
        render={(props) => (
          <ToolsDirectory>
            <Component {...props} />
          </ToolsDirectory>
        )}
      />
    </div>
  );
};

export default ToolsDirectoryLayout;
