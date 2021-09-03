import React from "react";
import vector from "../assets/settings.svg";
import ppl from "../assets/people.svg";
import github from "../assets/git-logo.svg";
import arrow from "../assets/arrow.svg";
import star from "../assets/star.svg";
import info from "../assets/info.svg";
import git from "../assets/github.svg";
import line from "../assets/line.svg";
import zap from "../assets/zap.svg";
import bold from "../assets/bold.svg";
import italic from "../assets/italic.svg";
import line30 from "../assets/Line-30.svg";
import list from "../assets/list.svg";
import link from "../assets/link.svg";
import align from "../assets/align-center.svg";
import atsign from "../assets/at-sign.svg";
import smile from "../assets/smile.svg";
import navigation from "../assets/navigation.svg";
import paperclip from "../assets/paperclip.svg";
import aa from "../assets/Aa.svg";
import chevdown from "../assets/chev-down.svg";

const GithubInstalled = () => {
  return <div className="container" >
      <div className="inline-flex lg:relative mt-3 left-2/3" >
        <input type="text"  className="border-2 border-gray-300 w-60 h-7 rounded-sm" placeholder="   Search here" />
        <img src={vector} className="mx-3" alt="setting wheel" />
        <div className="bg-green-200 rounded-full relative bottom-1" >
          <img src={ppl} alt="people of brooklyn" className="h-9" />
        </div>
      </div>
    <div className="bg-green-500 p-3 mt-5 text-white">
      <div>
        <ul  className="inline-flex px-4" >
          <li className="px-2"><img src={github} className="bg-white rounded-full w-7" alt="github" /></li>
          <li className="px-2">
            <div className="overflow-hidden" >
              <button className="bg-transparent border-none inline-flex">
                <h2 className="text-xl" >Github</h2> <img src={arrow} alt="arrow" className="mt-3 ml-2" />
              </button>
            </div>
          </li>
          <li className="px-2"><img src={star} className="mt-1.5" alt="star" /></li>
        </ul>
      </div>
      <div className="pr-8">
        <img src={info} alt="info" className="relative left-full" />
      </div>
    </div>
    <div className="mb-48 divide-y-2 > *">
      <ul className="inline-flex font-medium text-md ml-4 -mb-0.5 text-gray-500">
        <li className="pr-2 border-bottom-2 border-b-4 text-black border-green-400" >Description</li>
        <li className="pr-2 hover:text-black border-b-5 hover:text-black" >About</li>
      </ul>
      <hr className="bg-gray-700 " />
    </div>
    <div className="mb-20 ml-10">
      <div>
        <div className="block" >
          <div className="grid grid-cols-12 mb-7" >
            <div>
              <img src={git} alt="git banner" />
            </div>
            <div className="col-span-11">
              <p className="text-gray-500 text-xs" >This conversation is just between the two of you </p>
              <p>Here you can post and recieve comments with <a href="#" className="text-decoration-none text-blue-500" >@Github</a></p>
            </div>
          </div>
          <div className="flex mb-4" >
            <img src={line} className="w-10 sm:h-auto sm:w-full" alt="line" /><div className="sm:px-8 py-1 px-4 sm:py-2 rounded-3xl" style={{border: '1px solid gray'}} >
              <h2 className="text-black-500 text-xs font-bold" >Today</h2>
            </div><img src={line} className="w-10 sm:h-auto sm:w-full"  alt="line" />
          </div>
          <div className="grid grid-cols-12 mb-12" >
            <div>
              <img src={git} alt="git banner" />
            </div>
            <div className="col-span-11">
              <p className="text-md font-bold mb-1" >Github 
                <span className="text-xs ml-1 p-1 bg-gray-300" >App</span> 
                <span className="text-gray-300 ml-2 text-xs" >02:02 AM</span> 
              </p>
              <p className="text-xs text-black-500" >You’ve successfully installed Github on this worksace</p>
              <p className="text-xs text-black-500">To subscribe a channel to a repository, use the following slash command:<br />/github subscribe owner/reository</p>
              <p className="text-xs text-black-500 mt-3">Looking for additional help? Try /github help</p>
            </div>
          </div>
          <div className="bg-white rounded-md border border-gray-300 py-2 px-10 mr-5" >
            <textarea className="border-0 w-full" placeholder="Send a message to Github" ></textarea>
            <div className="inline-flex" >
              <img className="mx-1" src={zap} alt="zap" />
              <img className="ml-1 mr-2" src={line30} alt="line" />
              <img className="mx-1" src={bold} alt="bold" />
              <img className="mx-1" src={italic} alt="italic" />
              <img className="mx-1" src={link} alt="link" />
              <img className="mx-1" src={list} alt="list" />
              <img className="mx-1" src={align} alt="align" />
            </div>
            <div className="hidden sm:inline-flex lg:relative left-2/3">
              <img className="mx-1" src={aa} alt="aa" />
              <img className="mx-1" src={atsign} alt="atsign" />
              <img className="mx-1" src={smile} alt="smile" />
              <img className="mx-1" src={paperclip} alt="paperclip" />
              <img className="mx-1" src={navigation} alt="navigation" />
              <img className="mx-2" src={line30} alt="line30" />
              <img className="mx-1" src={chevdown} alt="chevdown" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>;
};

export default GithubInstalled;
