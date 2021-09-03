import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";
// import { faEdit } from "@fortawesome/free-regular-svg-icons";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-grow min-h-screen">
      {/* <div className="max-w-md min-w-0 border-2 border-blue-700  ">
        <div className="flex space-x-4 p-6">
          <img src="./zurichatlogo.svg" alt="Zuri Logo" />
          <p className="font-bold text-2xl">Zuri</p>
        </div>
        <div className="bg-green-500">
          <div className="flex justify-between items-center px-6 py-2">
            <p className="font-bold text-white text-lg ">HNGi8</p>
            <div className="text-lg bg-white py-1 px-2 rounded-full">
              <FontAwesomeIcon icon={faEdit} />
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col space-y-4 py-6 px-10">
            <p>Channels</p>
            <p>Chess Board Room</p>
            <p>Whiteboard Room</p>
            <p>Company Holiday Calender</p>
            <p>Notice Board Plugin</p>
            <p>Channels Plugin</p>
            <p>Zuri Todo App</p>
            <p>Goals Zuri App</p>
            <p>Messages</p>
          </div>
        </div>
      </div> */}

      <div className="flex-grow bg-gray-200">{children}</div>
    </div>
  );
};

export default Layout;
