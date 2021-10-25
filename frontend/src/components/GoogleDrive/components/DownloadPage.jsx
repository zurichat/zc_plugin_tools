import { useState } from "react";
import Modal from "./Modal";

function DownloadPage() {
  const [clicked, setClicked] = useState("desc");

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <div className="flex flex-wrap w-full mt-6">
      <div className="flex flex-col w-11/12 md:w-3/12 px-4">
        <div className="flex justify-center rounded-md w-full bg-white self-center py-16 mb-4">
          <img
            src="https://th.bing.com/th/id/R.0791e494a09baaf7535695412b321278?rik=QfFNx0%2b43QLAJw&pid=ImgRaw&r=0"
            // src=""
            alt="tool logo"
            className="h-28 "
          />
        </div>
        <button className="bg-green-500 py-2 my-2" onClick={openModal}>
          Add to Zuri
        </button>
        <Modal showModal={showModal} setShowModal={setShowModal} />
        <div className="w-full border  mb-6"></div>

        <p className="font-bold">Supported Languages</p>
        <p className="mb-4">English</p>
        <p className="font-bold">Pricing</p>
        <p className="mb-4">Free</p>
        <p className="font-bold">Categories</p>
        <div className="">
          <button className="  bg-white border p-1 text-gray-400 text-xs my-1 rounded-md block">
            Productivity
          </button>
          <button className="  bg-white border p-1 text-gray-400 text-xs my-1 rounded-md block">
            Communication
          </button>
          <button className="  bg-white border p-1 text-gray-400 text-xs my-1 rounded-md block">
            Developer Tools
          </button>
        </div>
      </div>
      <div className=" w-full md:w-9/12 mb-2 px-4 md:px-8">
        <h1 className="font-extrabold text-2xl mt-4 md:mt-0 mb-2 md:mb-5">
          Google Drive
        </h1>
        <div className=" border-b w-full flex mb-4">
          <button
            onClick={() => setClicked("desc")}
            className={`mr-1 md:mr-6  border-b text-xs md:text-base px-1 md:px-2 ${
              clicked == "desc"
                ? "text-black border-green-600"
                : "text-gray-500"
            }`}
          >
            Description
          </button>
          <button
            onClick={() => setClicked("feat")}
            className={` mr-1 md:mr-6  border-b text-xs md:text-base px-1 md:px-2 ${
              clicked == "feat"
                ? "text-black border-green-600"
                : "text-gray-500"
            }`}
          >
            Features
          </button>
          <button
            onClick={() => setClicked("perm")}
            className={`mr-1 md:mr-6  border-b text-xs md:text-base  px-1 md:px-2 ${
              clicked == "perm"
                ? "text-black border-green-600"
                : "text-gray-500"
            }`}
          >
            Permission
          </button>
          <button
            onClick={() => setClicked("sec")}
            className={` mr-1 md:mr-6  border-b text-xs md:text-base  px-1 md:px-2 ${
              clicked == "sec" ? "text-black border-green-600" : "text-gray-500"
            }`}
          >
            Security
          </button>
        </div>
        {clicked === "desc" ? (
          <div className=" w-full bg-blue-500 rounded-md px-2 md:px-14 py-4 md:py-10">
            <h1 className=" text-base md:text-2xl mb-2 text-white text-center">
              Get notified as soon as someone makes a comment or suggestion
            </h1>
            <div className=" relative bg-white rounded-md w-10/12 m-auto pl-14 md:px-32 py-3 md:py-5">
              <img
                className="absolute h-8 w-8 left-3 md:left-20 top-5 "
                src="https://th.bing.com/th/id/R.0791e494a09baaf7535695412b321278?rik=QfFNx0%2b43QLAJw&pid=ImgRaw&r=0"
                alt="logo image"
              />
              <h3 className="text-sm">
                <span className="font-bold mr-2">Google Drive</span>
                <span className="bg-gray-200 text-xs text-gray-400 mr-2">
                  APP
                </span>
                <span className=" text-gray-400 text-sm">5:58 PM</span>
              </h3>
              <p>
                Jane Lorenson <span className="text-blue-400">janel@</span>
                commented on
              </p>
              <p className=" text-blue-500 font-bold">
                Summer Retreat Financial Planning
              </p>
              <div className=" pl-2 border-l-4 border-blue-600">
                <p className=" text-xs italic border-l-2 pl-2 ">
                  Is this going to be enough money for breakfast
                </p>
                <p className=" text-xs">
                  "Yes, i think this budget is perfect. Thanks!"
                </p>
              </div>
            </div>
          </div>
        ) : null}
        {clicked === "desc" ? (
          <div>
            <p className="text-xs my-3 font-bold">
              Stay up to date about what’s happening on Google Drive without
              leaving Zuri by connecting Google Drive and Zuri app
            </p>
            <p className="text-xs font-bold">
              With Google Drive on Zuri, you can stay updated on:
            </p>
            <ul className=" text-xs font-bold">
              <li className="py-1">New Commits</li>
              <li className="py-1">New Pull Requests</li>
              <li className="py-1">New Issues</li>
              <li className="py-1">Code Reviews</li>
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default DownloadPage;
