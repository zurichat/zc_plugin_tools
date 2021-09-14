import React, { useState, useEffect } from "react";
import FigmaMessageConnectAccount from "../components/FigmaMessageConnectAccount";

const FigmaMessagesContainer = ({ hero, logo, localHostUrl, deployedUrl }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentTime, setCurrentTime] = useState(null);

  console.log(currentTime);

  useEffect(() => {
    const time = new Date();
    if (currentTime === null)
      return setCurrentTime(`${time.getHours()}:${time.getMinutes()}`);
  }, []);

  return (
    <section className={`figma-msgs_msg-container`}>
      <div className={`figma-msgs_msg-container_logo`}>
        <img src={logo} alt='figma-logo' />
      </div>
      <div className={`figma-msgs_msg-container_main-container`}>
        {isVisible && (
          <FigmaMessageConnectAccount
            currentTime={currentTime}
            hero={hero}
            localHostUrl={localHostUrl}
            deployedUrl={deployedUrl}
          />
        )}
      </div>
    </section>
  );
};

export default FigmaMessagesContainer;
