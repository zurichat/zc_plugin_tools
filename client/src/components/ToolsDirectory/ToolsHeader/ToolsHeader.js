import React from "react"
import SearchIcon from "../../../assets/toolsheadersearchicon.svg"
import DownArrowIcon from "../../../assets/Vectordownicon.svg"
const ToolsHeader = () => {
    return (
    <div>
    <div className="flex items-center mb-4">
    <h3 className= "font-bold">Tools Directory</h3>
        <p className="ml-auto">Back to tools</p>
    </div>
        <div className="flex bg-white px-2 py-1 rounded-sm shadow-sm mb-4" >
        <img src={ SearchIcon } alt="" className="mr-1" />
        <input type="search" placeholder="Search Tools Directory"/>     
        </div>
        <div className="flex items-center">
            <div className="all mr-16">
            <p>All</p>
            </div>
            <div className="categories flex items-center ml-2 cursor-pointer">
            <p className="text mr-1">Category</p>
            <img src= { DownArrowIcon } alt="" />
            </div>
            <div className="staffpicks flex items-center ml-12 cursor-pointer">
            <p className="text mr-1">Staff Picks</p>
            <img src= { DownArrowIcon } alt="" />
            </div>
            <div className="toolcollections flex items-center ml-12 cursor-pointer">
            <p className="text mr-1">Tools Collection</p>
            <img src= { DownArrowIcon } alt="" />
            </div>
        </div>
    </div>
    )
};

export default ToolsHeader