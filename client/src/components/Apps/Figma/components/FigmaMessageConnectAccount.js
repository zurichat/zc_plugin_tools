import React from "react";

const FigmaMessageConnectAccount = ({
  currentTime,
  deployedUrl,
  localHostUrl,
  hero,
}) => {
  return (
    <div className={`figma-msgs_msg-container_main`}>
      <section className={`figma-msgs_msg-container_main-header`}>
        <h2 className={`figma-msgs_msg-container_main-header_stamp`}>
          Figma{" "}
          <span
            className={`md:hidden figma-msgs_msg-container_main-header_stamp-app`}
          >
            App
          </span>{" "}
          {currentTime && (
            <span
              className={`md:hidden figma-msgs_msg-container_main-header_stamp-time`}
            >
              {currentTime}
            </span>
          )}
        </h2>
        <p className={`figma-msgs_msg-container_main-header_txt`}>
          Connect your Figma account to start getting notifications
        </p>
      </section>
      <div className={`figma-msgs_msg-container_hero`}>
        <p className={`figma-msgs_msg-container_hero-size`}>
          {`(139kb)`}{" "}
          <span className={`figma-msgs_msg-container_hero-arrow-down`}></span>
        </p>
        <div className={`figma-msgs_msg-container_hero-img`}>
          <img src={hero} alt={`hero image`} />
        </div>
        <div className={`figma-msgs_msg-container_hero-desc`}>
          <p>
            Figma is where teams recieve comments and post comments about their
            teams design success for further collaborations. The Figma app for
            Zuri Chat keeps everyone up to date on the latest design work
            through relevant notifications about file updates and comments.
          </p>

          <div>
            <p>
              With the app, you can recieve and reply to the file comments
              directly in Zuri Chat. You'll also get notified when:
            </p>
            <ul>
              <li>Someone replies to one of your comments</li>
              <li>You're tagged in a file</li>
              <li>You're invited to a new file</li>
              <li>New comments are made to a file you subscribed to</li>
            </ul>
          </div>
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
        </div>
      </div>
    </div>
  );
};

export default FigmaMessageConnectAccount;
