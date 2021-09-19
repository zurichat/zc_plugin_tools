import React, { useState } from "react";

import "./About_Messages.css";
import gmailLogo from "../assets/gmailLogo.png";
import Vector from "./About_Message_Img/Vector.png";
import Vector_logo from "./About_Message_Img/Vector_logo.png";
import gss1 from "./About_Message_Img/gss1.png";
import gss2 from "./About_Message_Img/gss2.png";
import GmailMessageLogo from './About_Message_Img/gmail-logo-message-page.png';
import GmailMessageLogoMobile1 from './About_Message_Img/gmail-logo-message-mobile1.png';
import GmailMessageLogoMobile2 from './About_Message_Img/gmail-logo-message-mobile2.png';
import GmailMessageImage from './About_Message_Img/gmail-message-image-.png';
import GmailMessageImageMobile from './About_Message_Img/gmail-message-image-mobile.png'
import LinkButton from './About_Message_Img/link-button.png';
import BoltButton from './About_Message_Img/Bolt.png';
import DropDownButton from './About_Message_Img/chevron-down.png';
import AttachButton from './About_Message_Img/clip.png';
import SendButton from './About_Message_Img/send-button.png';
import BoldButton from './About_Message_Img/Bold-button.png';
import ItalicButton from './About_Message_Img/Italic-button.png';
import ListButton from './About_Message_Img/list-button.png';
import AtSignGmail from './About_Message_Img/at-sign.png';
import GmailMessageHomeButton from './About_Message_Img/home.png';
import GmailMessageMessageButton from './About_Message_Img/message_icon.png';
import GmailMessageUserButton from './About_Message_Img/user-icon.png';

const About_Messages = () => {
  const [clicked, setClicked] = useState("about");
  return (
    <>
      <div className='Start-title'>
        <div className='gmaillogo-container'>
          <img
            src={gmailLogo}
            style={{ cursor: "pointer" }}
            onClick={() => {
              location.reload();
            }}
          />
        </div>
        <h4
          className='Logo-tag'
          style={{ cursor: "pointer" }}
          onClick={() => {
            location.reload();
          }}
        >
          Gmail
        </h4>
        <img
          src={Vector}
          style={{
            marginLeft: "10px",
          }}
        />
      </div>

      <div className='welcome-nav'>
        <h4
          onClick={() => {
            setClicked("messages");
          }}
          className={clicked == "messages" ? "selected" : ""}
        >
          Messages
        </h4>

        <h4
          onClick={() => {
            setClicked("about");
          }}
          className={clicked == "about" ? "selected" : ""}
        >
          About
        </h4>
      </div>
      {clicked === "about" ? (
        /* This is where the about section goes*/
        <div>
          <div className='gmail-about-section-infoblock'>
            <div className='gmail-about-section-banner'>
              <img src={Vector_logo} />
              <button>Configuration</button>
              <button>Learn more</button>
            </div>
            <div className='gmail-about-section-text'>
              <h3>Gmail</h3>
              <br></br>

              <p>
                Keep conversations moving forward by bringing context from an
                email into a Zuri channel or direct message. You can choose to
                add a message and include attachments along with the email as
                well.
                <br></br>
                When to send email into Zuri:<br></br>• Email chain getting too
                noisy? Send it into Zuri Chat where you can discuss quickly and
                move forward.
                <br></br>• Have an idea you want to share with your team? Send
                it along to a relevant channel with a note about your insights.
                <br></br>• Flag your teammates in Zuri Chat and use the email
                content to set context.
                <br></br>
                <br></br>
                How the Add-On works:<br></br>• Start by installing the Zuri for
                Gmail Add-On from the G Suite Marketplace
                <br></br>• Open any email and click on the Slack icon in the
                right-hand side of your inbox
                <br></br>• Choose the channel or person you’d like to forward
                the email to inside of Zuri Chat
                <br></br>• Add a message and include attachments if you’d like
                <br></br>• Voilà! The email is forwarded into Zuri where anyone
                in the channel or direct message you shared it to can see the
                email content and open attachments.
                <br></br>
                Please note that the following limits apply to emails shared via
                this app:<br></br>• The combined headers and body of an email
                cannot be larger than 1MB.
                <br></br> • When combined with attachments, an email cannot be
                larger than 30 MB.
                <br></br>• There is a maximum of 20 attachments per email.
              </p>
            </div>
          </div>
          <div className='gmail-screenshots-heading-container'>
            <h4>Screenshots</h4>
          </div>
          <div className='gmail-screenshots-container'>
            <img src={gss1} className='purple-bg'></img>
            <img src={gss2} className='gray-bg'></img>
            <img src={gss1} className='purple-bg'></img>
          </div>
        </div>
      ) : (
          <div>
            <div className="flex gmailMessage-first-section mt-9 mx-3">
              <div className="gmailMessagelogo-box1">
                <picture>
                  <source
                    media="(max-width: 414px)"
                    srcset={GmailMessageLogoMobile1} />
                  <img src={GmailMessageLogo} alt="gmail-logo" className="gmailMessage_logo1 m-auto" />
                </picture>
              </div>
              <div className="gmailMessage-first-section-content">
                <h4 className="font-semibold gmailMessage-first-section-content-header">This conversation is just between the two of you. </h4>
                <p className="font-medium gmailMessage-first-section-content-p">Here you can post and  recieve comments with <a href="#" className="gmailMessage-linkPage">@Gmail</a></p>
              </div>
              <div className="gmailMessage-first-section-content-mobile">
                <h4 className="font-bold gmailMessage-first-section-content-mobile-header my-3">Gmail</h4>
                <p className="font-medium gmailMessage-first-section-content-mobile-p">This is the very beginning of your direct message history with <a href="#" className="gmailMessage-linkPage">@Gmail</a>. Only two of you are in this conversation, and no one can join it.</p>
              </div>
            </div>
            <div className="gmailMessage-days"><p className="font-black text-center gmailMessage-days-text">Yesterday</p></div>
            <div className="flex gmailMessage-second-section mx-3">
              <div className="gmailMessage-logo-box2">
                <picture>
                  <source
                    media="(max-width: 414px)"
                    srcset={GmailMessageLogoMobile2} />
                  <img src={GmailMessageLogo} alt="gmail-logo" className="gmailMessage_logo2 m-auto" />
                </picture>
              </div>
              <div className="gmailMessage-second-section-content1">
                <h4 className="font-semibold gmailMessage-second-section-content1-header">Gmail<span className="font-semibold gmailMessage-second-section-content1-header-app align-middle">APP</span><span className="font-bold gmailMessage-second-section-content1-header-time align-middle">9:52AM</span></h4>
                <p className="font-normal gmailMessage-second-section-content1-p">Connect your Gmail account to start getting notifications</p>
              </div>
            </div>
            <div className="gmailMessage-second-section-content2">
              <p className="font-normal mb-3 gmailMessage-second-section-content2-p">(139 kB)</p>
              <picture>
                <source
                  media="(max-width: 414px)"
                  srcset={GmailMessageImageMobile} />
                <img src={GmailMessageImage} alt="Gmail layout description" />
              </picture>
              <div className="gmailMessage-second-section-content3">
                <p className="gmailMessage-second-section-content3-p">Keep conversations moving forward by bringing context from an email into a Zuri channel or direct message. You can choose to add a message and include attachments along with the email as well.</p>
                <p className="mt-1 gmailMessage-second-section-content3-p">When to send email into Zuri:</p>
                <ul className="pl-4 mt-1 gmailMessage-second-section-content3-p">
                  <li>Email chain getting too noisy? Send it into Zuri Chat where you can discuss quickly and move forward.</li>
                  <li>Have an idea you want to share with your team? Send it along to a relevant channel with a note about your insights.</li>
                  <li>Flag your teammates in Zuri Chat and use the email content to set context.</li>
                </ul>
                <button className="gmailMessage-connect-button font-normal">Connect your account</button>
              </div>
            </div>
            <div className="border border-solid rounded-sm bg-white py-3 gmailMessage-messageArea">
              <textarea placeholder="Send a message to John" rows="1" className="border-none my-0 ml-0 font-medium gmailMessage-textarea" />
              <div className="flex justify-between px-3 pt-2">
                <span>
                  <button className="border-r pr-3 pt-1"><img src={BoltButton} /></button>
                  <button className="pl-3 pt-1"><img src={BoldButton} /></button>
                  <button className="pl-3 pt-1"><img src={ItalicButton} /></button>
                  <button className="pl-3 pt-1"><img src={LinkButton} /></button>
                  <button className="pl-3 pt-1"><img src={ListButton} /></button>
                </span>
                <span>
                  <button className="pr-3 pt-1"><img src={AtSignGmail} /></button>
                  <button className="pr-3 pt-1"><img src={AttachButton} /></button>
                  <button className="border-r pr-3 pt-1"><img src={SendButton} /></button>
                  <button className="pl-3"><img src={DropDownButton} className="py-1" /></button>
                </span>
              </div>
            </div>
            <div className="flex justify-between gmailMessage-messageAreaMobile items-center">
              <button><img src={GmailMessageHomeButton} alt="home" className="mx-auto" /><span>Home</span></button>
              <button><img src={GmailMessageMessageButton} alt="dms" className="mx-auto" /><span>DMs</span></button>
              <button><img src={GmailMessageUserButton} alt="me" className="mx-auto" /><span>You</span></button>
            </div>
          </div>
      )}
    </>
  );
};

export default About_Messages;
