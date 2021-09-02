import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const ToolsHero = () => {
  const [hidden, setHidden] = useState(false);
  return (
    <>
      <div className={`${hidden ? "hidden" : "flex"} flex-col mx-6 my-4`}>
        <div className="flex justify-between font-bold pb-3">
          <div>Tools</div>
          <Link to={"/tools"} className="no-underline">
            <div className="flex justify-between items-center space-x-2 cursor-pointer text-black">
              <div className="">
                <FontAwesomeIcon icon={faAngleDoubleRight} className="" />
              </div>
              <div className="">Tools Directory</div>
            </div>
          </Link>
        </div>
        <div className="bg-white flex p-3 rounded-lg ">
          <div className="flex-1">
            <div className=" max-w-md pt-4 pl-2 ">
              <div className="font-bold text-xl">
                Powerful tools integrated just for Zuri chat
              </div>
              <div className="text-xs">
                Tools belong to you and your team, and they provide you extra
                features to make you more productive. Install once and everyone
                can make use of them
              </div>
              <div className="mt-4">
                <Link
                  to={"/tools"}
                  className="text-xs px-2 py-2 bg-green-500 text-white rounded-sm no-underline"
                >
                  Browse available tools
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:inline-flex flex-end ">
            <img src="./zuriamigo.svg" alt="" />
          </div>
          <button
            className="cursor-pointer px-2 h-full"
            onClick={() => setHidden(true)}
          >
            <FontAwesomeIcon icon={faTimes} className="" />
          </button>
        </div>
      </div>
    </>
  );
};

export default ToolsHero;
