import React from "react";
import { BsLightning } from "react-icons/bs";
import { FiBold, FiAlignCenter, FiAtSign } from "react-icons/fi";
import {
  AiOutlineItalic,
  AiOutlineUnorderedList,
  AiOutlineSmile,
} from "react-icons/ai";
import { BiLink, BiSend, BiChevronDown } from "react-icons/bi";
import { ImAttachment } from "react-icons/im";
const FigmaTextBar = () => {
  return (
    <section className={`figma-msgs_text-bar`}>
      <input type='text' className={`figma-msgs_text-bar_input`} />
      <div className='figma-msgs_text-bar_tools'>
        <div className='figma-msgs_text-bar_tools_tool'>
          <BsLightning />
        </div>
        <div className='figma-msgs_text-bar_tools_tool'>
          <FiBold />
        </div>
        <div className='figma-msgs_text-bar_tools_tool'>
          <AiOutlineItalic />
        </div>
        <div className='figma-msgs_text-bar_tools_tool'>
          <BiLink />
        </div>
        <div className='figma-msgs_text-bar_tools_tool'>
          <AiOutlineUnorderedList />
        </div>
        <div className='figma-msgs_text-bar_tools_tool'>
          <FiAlignCenter />
        </div>
        <div className='figma-msgs_text-bar_tools_tool'>
          <FiAtSign />
        </div>
        <div className='figma-msgs_text-bar_tools_tool'>
          <AiOutlineSmile />
        </div>
        <div className='figma-msgs_text-bar_tools_tool'>
          <ImAttachment />
        </div>
        <div className='figma-msgs_text-bar_tools_tool'>
          <BiSend />
        </div>
        <div className='figma-msgs_text-bar_tools_tool'>
          <BiChevronDown />
        </div>
      </div>
    </section>
  );
};

export default FigmaTextBar;
