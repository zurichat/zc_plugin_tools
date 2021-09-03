import React from "react";
import Demo from "../assets/ga-img/demo-img.svg";
import Logo from "../assets/ga-img/drive-logo.svg";

export default function About() {
  return (
    <section className="py-4">
      <div className="md:flex items-start mb-5 px-4">
        <img src={Logo} alt="logo" className="h-60 mr-7 mb-3 md:mb-0" />
        <div className="flex flex-col items-start p-0">
          <h2 className="font-fam3 font-semibold text-black-header my-3 mx-0 text-xl leading-6">
            Google Drive
          </h2>
          <p className="font-fam3 font-normal text-black-body my-2 mx-0 text-base leading-5">
            Use Google Drive within Zuri Chat to:
          </p>
          <div className="">
            <ul className="font-fam3 list-inside list-disc">
              <li className="mb-1 font-normal text-black-body text-sm leading-5">
                Create new Google Docs, Slides, and Sheets files
              </li>
              <li className="mb-1 font-normal text-black-body text-sm leading-5">
                Import an existing file from Google Drive into a Channel or
                Direct Message
              </li>
              <li className="mb-1 font-normal text-black-body text-sm leading-5">
                Search directly within Google Drive files shared within Zuri
                Chat
              </li>
              <li className="mb-1 font-normal text-black-body text-sm leading-5">
                Automatically grant access to the files you share with the right
                audience
              </li>
              <p></p>
              <li className="mb-1 font-normal text-black-body text-sm leading-5">
                Get updates in Zuri Chat on changes in Drive, like comments,
                access requests and new files shared with you
              </li>
              <li className="font-normal text-black-body text-sm leading-5">
                Reply directly to comment notifications from within Zuri Chat
                and have them posted to the file
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-start mb-5 px-4">
        <button className="w-60 p-3 font-fam3 text-sm b font-semibold border border-opacity-20 border-black-body rounded bg-gray-backg">
          Configuration
        </button>
        <button className="w-60 p-3 font-fam3 text-sm b font-semibold border border-opacity-20 border-black-body rounded bg-gray-backg">
          App Homepage
        </button>
      </div>
      <div>
        <div className="border-gray-bdr p-4 border-t border-b ">
          <h3 className="font-fam3 font-black text-black-header text-sm">
            Screenshots
          </h3>
        </div>
        <div className="py-7 px-4 flex flex-wrap gap-4 border-gray-bdr border-b">
          <img src={Demo} alt="demo" />
          <img src={Demo} alt="demo" />
          <img src={Demo} alt="demo" />
        </div>
      </div>
    </section>
  );
}
