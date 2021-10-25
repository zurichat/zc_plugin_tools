import React, {useState} from 'react';

import DescriptionAction from './DescriptionAction';
import Description from './Description';
import Screenshots from './Screenshots';



function MainGiphyLayout() {
  const [selectedTab, setSelectedTab] = useState('about');
  return (
    <div className="w-full text-black flex flex-col">
      <div className="w-full border-t border-b border-gray-100 flex">
        <button 
          onClick={() => setSelectedTab('message')} 
          className={` text-black text-base font-semibold mx-2 py-2 px-2
          ${ selectedTab === "message" ? "border-b-2 border-green-500" : "border-b-2 border-transparent"}`}>
          Message
        </button>
        <button 
          onClick={()=> setSelectedTab('about')} 
          className={` text-black text-base font-semibold mx-2 py-2 px-2
          ${ selectedTab === "about" ? "border-b-2 border-green-500" : "border-b-2 border-transparent"}`}>
          About
        </button>
      </div>
      {
        selectedTab === 'message' ? (<div>Message Tab</div>) : (
          <div className="">
            <div className="flex flex-col items-center sm:flex-row sm:items-start sm:justify-between pt-4 px-4">
                <DescriptionAction />
                <Description />
            </div>
            <div className="giphy-bottom">
                <Screenshots />
            </div>  

          </div>
        )
      }
       
    </div>
  );
}

export default MainGiphyLayout;
