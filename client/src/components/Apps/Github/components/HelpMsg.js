import React from 'react'
import git from "../assets/github.svg";

const HelpMsg = () => {
    return (
        <div>
            <div className="block" >
                <div className="hidden grid-cols-12 md:grid lg:grid mb-7" >
                    <div>
                        <img src={git} alt="git banner" className="w-8 md:w-11 lg:w-10" />
                    </div>
                    <div className="col-span-11">
                        <p className="text-xs text-black" >This conversation is just between the two of you </p>
                        <p className="text-gray-500" >Here you can post and recieve comments with <a href="#" className="text-blue-500 text-decoration-none" >@Github</a></p>
                    </div>
                </div>
                <div className="block mb-10 md:hidden lg:hidden" >
                    <div>
                        <img src={git} alt="git banner" className="w-10 mb-2 md:w-11 lg:w-10" />
                    </div>
                    <div className="flex" >
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="4" cy="4" r="3.6" stroke="black" stroke-width="0.8"/>
                        </svg>
                        <p className="font-bold text-md" >Github</p>
                    </div>
                    <div className="text-xs text-gray-500 pr-7">
                        <p>This is the very beginning of your direct message history with GitHub. Only two of you are in this conversation, and no one can join it.</p>
                    </div>
                </div>
                <div className="flex mb-4" >
                    <svg id="horizontal-line" className="relative w-2/5 h-1/6 top-3"  viewBox="0 0 466 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="-8.53639e-08" y1="0.760986" x2="466" y2="0.760907" stroke="#C1C1C1"/>
                    </svg>
                    <div className="px-4 py-1 sm:px-8 sm:py-2 rounded-3xl" style={{border: '1px solid gray'}} >
                        <h2 className="text-xs font-bold text-black-500" >Today</h2>
                    </div>
                    <svg id="horizontal-line" className="relative w-2/5 h-1/6 top-3" viewBox="0 0 466 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="-8.53639e-08" y1="0.760986" x2="466" y2="0.760907" stroke="#C1C1C1"/>
                    </svg>
                </div>
                <div className="grid grid-cols-12 mb-12" >
                    <div>
                        <img src={git} alt="git banner" className="w-8 md:w-11 lg:w-10" />
                    </div>
                    <div className="col-span-11 ml-2 md:ml-0 lg:-ml-6">
                        <p className="mb-1 text-sm font-bold md:text-md lg:text-lg" >Github 
                            <span className="p-1 ml-1 text-xs bg-gray-300" >App</span> 
                            <span className="ml-2 text-xs text-gray-300" >10:43 AM</span> 
                        </p>
                        <p className="text-xs text-black-500" >You’ve successfully installed Github on this worksace</p>
                        <p className="text-xs text-black-500">To subscribe a channel to a repository, use the following slash command:<br />/github subscribe owner/reository</p>
                        <p className="mt-3 text-xs text-black-500">Looking for additional help? Try /github help</p>
                    </div>
                </div>
                <div className="flex mb-4" >
                    <svg id="horizontal-line" className="relative w-2/5 h-1/6 top-3"  viewBox="0 0 466 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="-8.53639e-08" y1="0.760986" x2="466" y2="0.760907" stroke="#C1C1C1"/>
                    </svg>
                    <div className="px-4 py-1 sm:px-8 sm:py-2 rounded-3xl" style={{border: '1px solid gray'}} >
                        <h2 className="text-xs font-bold text-black-500" >Today</h2>
                    </div>
                    <svg id="horizontal-line" className="relative w-2/5 h-1/6 top-3" viewBox="0 0 466 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="-8.53639e-08" y1="0.760986" x2="466" y2="0.760907" stroke="#C1C1C1"/>
                    </svg>
                </div>
                <div className="grid grid-cols-12 mb-12" >
                    <div>
                        <img src={git} alt="git banner" className="w-8 md:w-11 lg:w-10" />
                    </div>
                    <div className="col-span-11 ml-2 md:ml-0 lg:-ml-6">
                        <p className="mb-1 text-sm font-bold md:text-md lg:text-lg" >Github 
                            <span className="p-1 ml-1 text-xs bg-gray-300" >App</span> 
                            <span className="ml-2 text-xs text-gray-300" >10:52 AM</span> 
                        </p>
                        <p className="text-xs text-black-500" >Need some help with <span className="text-yellow-600" >/github</span> ?</p>
                        <p className="text-xs text-black-500">Subscribe to notifications for a respository</p>
                        <p className="text-xs text-yellow-600"> /github subscribe owner/respository</p>
                        <p className="text-xs text-black-500">Unsubscribe from notifications for a respository</p>
                    </div>
                </div>
                {/* <div className="flex mb-4" >
                    <svg id="horizontal-line" className="relative w-2/5 h-1/6 top-3"  viewBox="0 0 466 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="-8.53639e-08" y1="0.760986" x2="466" y2="0.760907" stroke="#C1C1C1"/>
                    </svg>
                    <div className="px-4 py-1 sm:px-8 sm:py-2 rounded-3xl" style={{border: '1px solid gray'}} >
                        <h2 className="text-xs font-bold text-black-500" >Today</h2>
                    </div>
                    <svg id="horizontal-line" className="relative w-2/5 h-1/6 top-3" viewBox="0 0 466 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="-8.53639e-08" y1="0.760986" x2="466" y2="0.760907" stroke="#C1C1C1"/>
                    </svg>
                </div> */}
            </div>
        </div>
    )
}

export default HelpMsg
