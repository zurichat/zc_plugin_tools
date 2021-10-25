import React, { useState } from "react";

import "../styles/About_Messages.css";
import gmailLogo from "../assets/gmailLogo.png";
import Vector from "../assets/Vector.png";
import Vector_logo from "../assets/Vector_logo.png";
import gss1 from "../assets/gss1.png";
import gss2 from "../assets/gss2.png";

const AboutMessages = () => {
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
        <div>message section</div>
      )}
    </>
  );
};

export default AboutMessages;
