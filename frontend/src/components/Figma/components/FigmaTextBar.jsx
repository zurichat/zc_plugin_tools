import React from "react";
import { BsLightning } from "react-icons/bs";
import { FiBold, FiAlignCenter, FiAtSign } from "react-icons/fi";
import {
  AiOutlineItalic,
  AiOutlineUnorderedList,
  AiOutlineSmile,
  AiOutlineCamera,
} from "react-icons/ai";
import { BiLink, BiSend, BiChevronDown } from "react-icons/bi";
import { ImAttachment } from "react-icons/im";
import { IoDocumentAttachOutline } from "react-icons/io5";

const FigmaTextBar = () => {
  return (
    <div className={`figma-msgs_text-bar_container`}>
      <div className={`figma-msgs_text-bar`}>
        <input
          type='text'
          className={`figma-msgs_text-bar_input`}
          placeholder={`Send a message to Figma`}
        />
        <div className={`figma-msgs_text-bar_tools_mobile`}>
          <div className={`figma-msgs_text-bar_tools_tool-container`}>
            <BsLightning />
          </div>
          <div className={`figma-msgs_text-bar_tools_tool-container`}>
            <AiOutlineCamera />
          </div>
          <div className={`figma-msgs_text-bar_tools_tool-container`}>
            <IoDocumentAttachOutline />
          </div>
        </div>
        <div className={`figma-msgs_text-bar_tools`}>
          <div
            className={`figma-msgs_text-bar_tools_tool figma-msgs_text-bar_tools_tool-lightning`}
          >
            <BsLightning />
          </div>
          <div className={`figma-msgs_text-bar_tools_tool-container`}>
            <div className={`figma-msgs_text-bar_tools_tool`}>
              <FiBold />
            </div>
            <div className={`figma-msgs_text-bar_tools_tool`}>
              <AiOutlineItalic />
            </div>
            <div className={`figma-msgs_text-bar_tools_tool`}>
              <BiLink />
            </div>
            <div className={`figma-msgs_text-bar_tools_tool`}>
              <AiOutlineUnorderedList />
            </div>
            <div className={`figma-msgs_text-bar_tools_tool`}>
              <FiAlignCenter />
            </div>
          </div>
          <div
            className={`figma-msgs_text-bar_tools_tool-container figma-msgs_text-bar_tools_tool-container_2`}
          >
            <div className={`figma-msgs_text-bar_tools_tool`}>
              <FiAtSign />
            </div>
            <div className={`figma-msgs_text-bar_tools_tool`}>
              <AiOutlineSmile />
            </div>
            <div className={`figma-msgs_text-bar_tools_tool`}>
              <ImAttachment />
            </div>
            <div className={`figma-msgs_text-bar_tools_tool`}>
              <BiSend />
            </div>
          </div>
          <div className={`figma-msgs_text-bar_tools_tool`}>
            <BiChevronDown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FigmaTextBar;
