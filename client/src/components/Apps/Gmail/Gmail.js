import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";
// import { useHistory } from "react-router-dom";
// import ToolsHeader from "../../toolsheader/toolsheader";
import gmailLayout from '../../../assets/gmailLayout.png'
import gmailLogo from '../../../assets/gmailLogo.png'

const Gmail = () => {
  const [clicked, setClicked] = useState("desc");

  return (
    <div className='h-full pt-6'>
      <div className=" flex flex-col md:flex-row w-full">
        <div className=" flex flex-col md:w-3/12  px-4">
          <div className=" flex justify-center w-full bg-white self-center py-6">
            <img
              src={gmailLogo}
              alt="Gmail Logo"
              className="h-44 "
            />
          </div>
          <button className="bg-green-500 py-3 rounded text-white mt-4">Add to Zuri</button>
          <button className="bg-transparent border-2 border-green-500 py-3 rounded text-green-500 mt-2">Learn More</button>
          <div className="w-full border  mb-6"></div>

          <p className="font-bold">Supported Languages</p>
          <p className="mb-4">English</p>
          <p className="font-bold">Pricing</p>
          <p className="mb-4">Free</p>
          <p className="font-bold">Categories</p>
          <button className=" w-1/3 border-2 border-gray-400 py-2 text-gray-800 text-sm my-1 rounded">
            Productivity
          </button>
          <button className=" w-1/2 border-2 border-gray-400 py-2 text-gray-800 text-sm my-1 rounded">
            Project Management
          </button>
          <button className=" w-1/3 border-2 border-gray-400 py-2 text-gray-800 text-sm my-1 rounded">
            Other Tools
          </button>
        </div>
        <div className=" md:w-9/12 mb-2 px-8">
          <h1 className="font-extrabold text-2xl  mb-5">Gmail</h1>
          <div className=" border-b w-full flex mb-4">
            <button
              onClick={() => setClicked("desc")}
              className={`mr-6  border-b  px-2 ${
                clicked == "desc"
                  ? "text-black border-green-600"
                  : "text-gray-500"
              }`}
            >
              Description
            </button>
            <button
              onClick={() => setClicked("feat")}
              className={`mr-6  border-b  px-2 ${
                clicked == "feat"
                  ? "text-black border-green-600"
                  : "text-gray-500"
              }`}
            >
              Features
            </button>
            <button
              onClick={() => setClicked("perm")}
              className={`mr-6  border-b  px-2 ${
                clicked == "perm"
                  ? "text-black border-green-600"
                  : "text-gray-500"
              }`}
            >
              Permission
            </button>
            <button
              onClick={() => setClicked("sec")}
              className={`mr-6  border-b  px-2 ${
                clicked == "sec"
                  ? "text-black border-green-600"
                  : "text-gray-500"
              }`}
            >
              {" "}
              Security and Compliance
            </button>
          </div>
          {clicked === "desc" ? (
            <div className=" w-full rounded-md py-10">
              <img src={gmailLayout} alt="Gmail Layout illustration" />
            </div>
          ) : null}
          {clicked === "desc" ? (
            <div>
              <p className="">
              Keep conversations moving forward by bringing context from an email into a Zuri channel or direct message. You can choose to add a message and include attachments along with the email as well.
              </p>
              <p className="py-3 font-medium">
              When to send email into Zuri:
              </p>
              <ul className="list-inside list-disc">
                <li className="py-1">Email chain getting too noisy? Send it into Zuri Chat where you can discuss quickly and move forward.</li>
                <li className="py-1">Have an idea you want to share with your team? Send it along to a relevant channel with a note about your insights.</li>
                <li className="py-1">Flag your teammates in Zuri Chat and use the email content to set context.</li>
              </ul>

              <p className="py-3 font-medium">How the Add-On works:</p>
              <ul className="list-inside list-disc">
                <li className="py-1">Start by installing the Zuri Chat for Gmail Add-On from the G Suite Marketplace</li>
                <li className="py-1">Open any email and click on the Zuri icon in the right-hand side of your inbox</li>
                <li className="py-1">Choose the channel or person you’d like to forward the email to inside of Zuri</li>
                <li className="py-1">Add a message and include attachments if you’d like</li>
                <li className="py-1">Voilà! The email is forwarded into Zuri Chat where anyone in the channel or direct message you shared it to can see the email content and open attachments.</li>
              </ul>

              <p className="py-3 font-medium">Please note that the following limits apply to emails shared via this app:</p>
              <ul className="list-inside list-disc">
                <li className="py-1">The combined headers and body of an email cannot be larger than 1MB.</li>
                <li className="py-1">When combined with attachments, an email cannot be larger than 30 MB.</li>
                <li className="py-1">There is a maximum of 20 attachments per email.</li>
              </ul>
            </div>
          ) : null}
          {clicked === "perm" ? (
            <div className=" w-full rounded-md py-10">
              <img src={gmailLayout} alt="Gmail Layout illustration" />
            </div>
          ) : null}
          {clicked === "perm" ? (
            <div className="relative bg-white p-4">
              <h3>Permissions</h3>
              <h4>ZuriChat for Gmail will be able to view:</h4>
              <p className="p-3">Content and info about channels and conversations</p><hr/>
              <p className="p-3">Content and info about your workspace</p><hr/>
              
              <h4 className="mt-3">ZuriChat for Gmail will be able to do:</h4>
              <p className="p-3">Perform actions as you</p><hr/>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Gmail;
