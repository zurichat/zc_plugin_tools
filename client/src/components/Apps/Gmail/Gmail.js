import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";
// import { useHistory } from "react-router-dom";
// import ToolsHeader from "../../toolsheader/toolsheader";
import "./Gmail.css";
import gmailLayout from "../../../assets/gmailLayout.png";
import gmailLogo from "../../../assets/gmailLogo.png";

const Gmail = () => {
  const [clicked, setClicked] = useState("desc");
  return (
    <div className="container max-w-screen-lg mt-9">
      <div className="container-left flex flex-col">
        <div className="flex flex-col self-baseline mb-3">
          <img src={gmailLogo} alt="Gmail Logo" className="w-60" />
          <div className="flex flex-col mt-4">
            <button className="btn text-white bg-green-600 hover:bg-green-500 font-extrabold text-sm p-3">
              Add to Zuri
            </button>
            <button className="btn mt-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-extrabold text-sm p-3">
              Learn More
            </button>
          </div>
          <div className="mt-7 h-px bg-gray-400"></div>
        </div>

        <p className="font-bold">Supported Languages</p>
        <p className="mb-4 text-sm">English</p>
        <p className="font-bold">Pricing</p>
        <p className="mb-4 text-sm">Free</p>
        <p className="font-bold">Categories</p>
        <button className=" w-1/3 border-1 border-gray-500 py-2 text-gray-800 text-sm my-1 rounded hover:text-black hover:font-extrabold">
          Productivity
        </button>
        <button className=" w-1/2 border-1 border-gray-500 py-2 text-gray-800 text-sm my-1 rounded hover:text-black hover:font-extrabold">
          Project Management
        </button>
        <button className=" w-1/3 border-1 border-gray-500 py-2 text-gray-800 text-sm my-1 rounded hover:text-black hover:font-extrabold">
          Other Tools
        </button>
      </div>
      <div className="container-right">
        <h1 className="text-4xl font-black mb-5">Gmail</h1>
        <div className=" border-b w-full flex mb-4">
          <button
            onClick={() => setClicked("desc")}
            className={`mr-4  border-b  px-2 hover:text-green-600 ${
              clicked == "desc"
                ? "text-black border-green-600"
                : "text-gray-500"
            }`}
          >
            Description
          </button>
          <button
            onClick={() => setClicked("feat")}
            className={`mr-4  border-b  px-2 hover:text-green-600 text-sm ${
              clicked == "feat"
                ? "text-black border-green-600"
                : "text-gray-500"
            }`}
          >
            Features
          </button>
          <button
            onClick={() => setClicked("perm")}
            className={`mr-4  border-b  px-2 hover:text-green-600 text-sm ${
              clicked == "perm"
                ? "text-black border-green-600"
                : "text-gray-500"
            }`}
          >
            Permission
          </button>
          <button
            onClick={() => setClicked("sec")}
            className={`mr-4  border-b  px-2 hover:text-green-600 text-sm ${
              clicked == "sec" ? "text-black border-green-600" : "text-gray-500"
            }`}
          >
            {" "}
            Security and Compliance
          </button>
        </div>
        {clicked === "desc" ? (
          <div className=" w-full rounded-md pt-2">
            <img src={gmailLayout} alt="Gmail Layout illustration" />
          </div>
        ) : null}
        {clicked === "desc" ? (
          <div className="mt-4">
            <p className="">
              Keep conversations moving forward by bringing context from an
              email into a Zuri channel or direct message. You can choose to add
              a message and include attachments along with the email as well.
            </p>
            <h3 className="pt-3 font-bold">When to send email into Zuri:</h3>
            <ul className="list-inside list-disc">
              <li className="">
                Email chain getting too noisy? Send it into Zuri Chat where you
                can discuss quickly and move forward.
              </li>
              <li className="">
                Have an idea you want to share with your team? Send it along to
                a relevant channel with a note about your insights.
              </li>
              <li className="">
                Flag your teammates in Zuri Chat and use the email content to
                set context.
              </li>
            </ul>

            <p className="pt-4 font-bold">How the Add-On works:</p>
            <ul className="list-inside list-disc">
              <li className="py-1">
                Start by installing the Zuri Chat for Gmail Add-On from the G
                Suite Marketplace
              </li>
              <li className="">
                Open any email and click on the Zuri icon in the right-hand side
                of your inbox
              </li>
              <li className="">
                Choose the channel or person you’d like to forward the email to
                inside of Zuri
              </li>
              <li className="">
                Add a message and include attachments if you’d like
              </li>
              <li className="">
                Voilà! The email is forwarded into Zuri Chat where anyone in the
                channel or direct message you shared it to can see the email
                content and open attachments.
              </li>
            </ul>

            <p className="pt-4 font-bold">
              Please note that the following limits apply to emails shared via
              this app:
            </p>
            <ul className="list-inside list-disc">
              <li className="py-1">
                The combined headers and body of an email cannot be larger than
                1MB.
              </li>
              <li className="py-1">
                When combined with attachments, an email cannot be larger than
                30 MB.
              </li>
              <li className="py-1">
                There is a maximum of 20 attachments per email.
              </li>
            </ul>
          </div>
        ) : null}

        {clicked === "sec" ? (
          <div className="mt-4">
            <div className="flex spa">
              <div className="bg-white w-full py-4 px-4 flex justify-between rounded items-center h-30">
                <p>Download security and compliance information</p>
                <button className="btn p-7 border-1 border-gray-500 py-2 text-gray-800 text-sm my-1 rounded hover:text-black hover:font-extrabold">
                  Download CSV
                </button>
              </div>
            </div>
            <div className="h-px w-full bg-gray-300"></div>
            <div className="bg-white w-full py-4 px-4 flex justify-between rounded items-center">
              <p>
                Review the details to better understand this app’s security
                practices. To learn more about assessing apps for your workspace
                visit our{" "}
                <a href="/home" className="text-green-600">
                  Help Center
                </a>
                <div className="link mt-9">
                  <div className="mt-3">
                    <h3 className="font-extrabold">General</h3>
                    {/* <i className="fa fa-angle-right"></i> */}
                  </div>
                  <div className="mt-3 h-px bg-gray-300"></div>
                  <div className="mt-3">
                    <h3 className="font-extrabold">
                      Privacy & data governance
                    </h3>
                    {/* <i className="fa fa-angle-right"></i> */}
                  </div>
                  <div className="mt-3 h-px bg-gray-300"></div>
                  <div className="mt-3">
                    <h3 className="font-extrabold">
                      Certifications & compliance
                    </h3>
                    {/* <i className="fa fa-angle-right"></i> */}
                  </div>
                  <div className="mt-3 h-px bg-gray-300"></div>
                  <div className="mt-3">
                    <h3 className="font-extrabold">Security</h3>
                    {/* <i className="fa fa-angle-right"></i> */}
                  </div>
                </div>
              </p>
            </div>
            <div className="mt-5"></div>
            <div className="bg-white w-full py-4 px-4 rounded items-center">
              <h3 className="font-extrabold mb-3">Scopes</h3>
              <p>ZuriChat for Gmail has 8 User Token Scopes</p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Gmail;
