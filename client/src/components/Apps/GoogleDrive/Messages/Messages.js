import styles from "./Messages.module.css";
import AttachmentIcon from "../assets/message-icons/attachment.svg";
import HideFormatIcon from "../assets/message-icons/hide-formatting.png";
import ShortcutIcon from "../assets/message-icons/shortcut.png";
import LinksIcon from "../assets/message-icons/links.svg";
import ItalicsIcon from "../assets/message-icons/italic.svg";
import BulletListIcon from "../assets/message-icons/bulletlist.svg";
import AlignCenterIcon from "../assets/message-icons/align-center.svg";
import AtIcon from "../assets/message-icons/at.svg";
import EmojiIcon from "../assets/message-icons/emoji.svg";
import SendIcon from "../assets/message-icons/send.svg";
import ArrowIcon from "../assets/message-icons/arrow-down.svg";

function Messages() {
  return (
    <div className={`${styles.height} w-full py-1`}>
      <div className=" h-100vh w-full h-5/6"></div>
      <div className="w-full h-1/6 border-2 border-gray-500 px-4 mx-4 rounded-sm">
        <textarea className="h-2/6 border-gray-700 outline-none mx-3 bg-transparent px-4" placeholder="Send a message to Google Drive"></textarea>
        <div className="flex w-full  px-3 p-1">
          <div className="flex items-center mr-auto">
              <img className=" h-4 mx-2 cursor-pointer" src={ShortcutIcon} alt="" />
              <div className=" h-5 border-r mx-2 cursor-pointer border-gray-900"></div>
              <p className=" mx-2 cursor-pointer">B</p>
              <img className="mx-2 cursor-pointer h-4" src={ItalicsIcon} alt="" />
              <img className=" h-4 mx-2 cursor-pointer" src={LinksIcon} alt="" />
              <img className=" h-4 mx-2 cursor-pointer" src={BulletListIcon} alt="" />
              <img className=" h-4 mx-2 cursor-pointer" src={AlignCenterIcon} alt="" />
          </div>
          <div className="flex items-center">
                <img className=" h-4 mx-2 cursor-pointer" src={HideFormatIcon} alt="" />
                <img className=" h-4 mx-2 cursor-pointer" src={AtIcon} alt="" />
                <img className=" h-4 mx-2 cursor-pointer" src={EmojiIcon} alt="" />
                <img className=" h-4 mx-2 cursor-pointer" src={AttachmentIcon} alt="" />
                <img className=" h-4 mx-2 cursor-pointer" src={SendIcon} alt="" />
                <div className=" h-5 border-r mx-2 cursor-pointer border-gray-900"></div>
                <img className=" h-4 mx-2 cursor-pointer" src={ArrowIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
    
  )
  
//   <div className={styles.wrapper}>
//   <div className={styles.child}>
//       <div className={styles.driveimg}>
//       <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Drive_icon_%282020%29.svg/1147px-Google_Drive_icon_%282020%29.svg.png"/>
//       </div>
//       <div className={styles.info}>
//        <p><b>This conversation is just between the two of you.</b></p>
//        <p>Here you can post and receive comments with <a href="#">@GDrive</a>.</p>
//       </div>g

// </div>
//   <div className={styles.chat}>
//       <ul>
//           <li>Type <b>"off"</b> or <b>"stop"</b> to turn off notifications.</li>
//           <li>Type <b>"on"</b> or <b>"start"</b> to turn on notifications.</li>
//           <li>Type <b>"help"</b> for assistance.</li>
//           <li>Type <b>"feedback"</b> followed by what's on your mind to share your comments with Drive's customer service team. See Google's <a href="#">Privacy Policy</a> and <a href="#">Terms of Service.</a></li>
//       </ul>
//   </div>
//   <div>
//   <textarea id="story" name="story"
//  rows="5" cols="33" placeholder="Send a message to Google Drive">
   
//   </textarea>
//   </div>
   
// </div>;
}

export default Messages;
