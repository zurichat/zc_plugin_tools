import React, { useEffect, useState } from "react";
import useMedia from "../customHooks/useMedia";
import ss1 from "../images/ss1.png";
import logo from "../images/Figma_logo.png";
import "../css/FigmaMessages.css";

const FigmaMessages = () => {
  const localHostUrl =
    "https://www.figma.com/oauth?client_id=V2IvPlEApDfBT9uNS5Rbrf&redirect_uri=http://localhost:3000/figma/authenticate/&scope=file_read&state=state&response_type=code";
  const deployedUrl =
    "https://www.figma.com/oauth?client_id=V2IvPlEApDfBT9uNS5Rbrf&redirect_uri=http://externaltools.zuri.chat/figma/authenticate/&scope=file_read&state=state&response_type=code";

  return (
    <section className={`figma-msgs`}>
      <header className={`figma-msgs_intro`}>
        <div className={`figma-msgs_intro-logo`}>
          <img src={logo}></img>
        </div>
        <p className={`figma-msgs_intro-desc`}>
          <span className={`figma-msgs_intro-desc_header`}>
            This conversation is just between the two of you
          </span>
          <span className={`figma-msgs_intro-desc_txt`}>
            Here you can post and recieve comments with <span>@Figma</span>
          </span>
        </p>
      </header>
      {/* add class name "second-info" */}
      {/* <div className='hidden'>
        <img src={logo}></img>
        <p>
          <h4 className='logo-tag'>Figma</h4>
          Connect your figma account to start getting notifications
        </p>
      </div> */}

      {/* add class name "info-img-section" */}
      {/* <div className='hidden'>
        <span className='download-size'>(139 kb)</span>
        <img src={ss1}></img>

        <p>
          Figma s where teams recieve comments and post comments about their
          teams design success for further collaborations. The Figma app for
          Zuri Chat keeps everyone up to date on the latest design work through
          relevant notifications about file nupdates and comments.
        </p>

        <p>
          With th app, you can recieve an reply to the file comments directly in
          Zuri Chat. You'll also get notified when:
          <ul>
            <li>someone replies to one of your comments</li>
            <li>You're tagged in a file</li>
            <li>You're invited to a new file</li>
            <li>New comments are made to a file you subscribed to</li>
          </ul>
        </p>
        <div className='mt-6 fig-connect-btn'>
          <a
            className='px-4 py-2  bg-white font-extrabold  rounded-sm'
            href={
              window.location.hostname == "localhost"
                ? localHostUrl
                : deployedUrl
            }
          >
            Connect your account
          </a>
        </div>
      </div> */}
    </section>
  );
};

export default FigmaMessages;
