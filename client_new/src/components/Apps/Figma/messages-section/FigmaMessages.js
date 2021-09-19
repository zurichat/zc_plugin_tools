import React, { useEffect, useState } from "react";
import FigmaMessagesContainer from "../container/FigmaMessagesContainer";
import FigmaTextBar from "../components/FigmaTextBar";
import Day from "../components/Day";
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
          <img src={logo} alt={`figma-logo`}></img>
        </div>
        <p className={`figma-msgs_intro-mobile`}>
          <span className={`figma-msgs_intro-mobile_header`}>
            <span className={`figma-msgs_intro-mobile_circle`}></span>
            <span>Figma</span>
          </span>
          <span className={`figma-msgs_intro-mobile_txt`}>
            This is the very beginning of your direct message history with
            <i> @Figma</i>. Only two of you are in this conversation, and no one
            can join it.
          </span>
        </p>
        <p className={`figma-msgs_intro-desktop`}>
          <span className={`figma-msgs_intro-desktop_header`}>
            This conversation is just between the two of you
          </span>
          <span className={`figma-msgs_intro-desktop_txt`}>
            <span>Here you can post and recieve comments with</span>{" "}
            <i>@Figma</i>
          </span>
        </p>
      </header>
      <Day day={`Today`} />
      <FigmaMessagesContainer
        hero={ss1}
        logo={logo}
        localHostUrl={localHostUrl}
        deployedUrl={deployedUrl}
      />
      <FigmaTextBar />
    </section>
  );
};

export default FigmaMessages;
