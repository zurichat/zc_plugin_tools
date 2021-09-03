import React from "react";
// import { Link } from "react-router-dom";
// import { IoChevronBackOutline } from "react-icons/io5";
import Image from "../assets/ZV_64LdGoao.jpg";
import GithubLogo from "../assets/Rectangle 693.jpg";
import "../style/GithubHome.css";
const GithubHome = () => {
  return (
    <section className="github_home github_home_padding">
      {/* <div className="top_nav">
        <h2 className={`font-bold text-lg lg:text-lg xl:text-xl 2xl:text-2xl`}>
          Tool Directory
        </h2>
        <Link
          to="/"
          className="flex items-center gap-2 lg:text-md font-semibold"
        >
          <IoChevronBackOutline />
          Back home
        </Link>
      </div> */}
      <div className={`github_home_main`}>
        <section className={`github_home_main-section1`}>
          <div className={`flex flex-col gap-4`}>
            <div
              className={`bg-white flex flex-row items-center justify-center py-6 rounded`}
            >
              <img src={GithubLogo} alt="github logo" />
            </div>
            <div className={`github_btn_container flex flex-col gap-2`}>
              <button
                disabled="disabled"
                className={`github_btn_container-btn bg-githubGreen text-white`}
              >
                Add to Zuri Chat
              </button>
              <button
                disabled="disabled"
                className={`github_btn_container-btn bg-transparent text-githubGreen`}
              >
                Learn More
              </button>
            </div>
          </div>
          <div className={"hidden lg:block p-0.5 bg-githubGrey"}></div>
          <div className={`hidden lg:flex flex-col gap-3`}>
            <p className={`flex flex-col gap-1`}>
              <span className={`font-bold github_home-desc`}>
                Supported Languages
              </span>
              <span className={`font-normal github_home-desc`}>English</span>
            </p>
            <p className={`flex flex-col gap-1`}>
              <span className={`font-bold github_home-desc`}>Pricing</span>
              <span className={`font-normal github_home-desc`}>
                Currently Free
              </span>
            </p>
            <p className={`flex flex-col gap-1`}>
              <span className={`font-bold github_home-desc`}>Categories</span>
              <ul
                className={`font-normal text-lg lg:text-base xl:text-lg 2xl:text-xl text-githubTextGrey flex flex-row lg:flex-col gap-1`}
              >
                <li className={`github_categories`}>Productivity</li>
                <li className={`github_categories`}>Communication</li>
                <li className={`github_categories`}>Developer Tools</li>
              </ul>
            </p>
          </div>
        </section>
        <section className={`github_home_main-section2`}>
          <h1 className={`font-black text-3xl `}>Github</h1>
          <div className={`flex flex-col gap-4`}>
            <nav className={`github_home_nav`}>
              <ul
                className={`flex flex-row items-center gap-4 md:gap-6 lg:gap-12`}
              >
                <li className={`github_home_nav-active github_home_nav-link`}>
                  Description
                </li>
                <li className={`github_home_nav-link`}>Features</li>
                <li className={`github_home_nav-link`}>Permissions</li>
                <li className={`github_home_nav-link`}>
                  Security & complaince
                </li>
              </ul>
            </nav>
            <div className={`flex flex-col gap-8`}>
              <section className="bg-githubBlue flex flex-row gap-1 lg:gap-0 items-center lg  text-white font-bold p-5 rounded">
                <h2 className="w-6/12 lg:w-2/6 text-xl lg:text-2xl 2xl:text-4xl ">
                  Bring your code to the conversations you care about
                </h2>
                <div className="w-6/12 lg:w-4/6 rounded overflow-hidden">
                  <img src={Image} alt="repository" className="w-full" />
                </div>
              </section>
              <div
                className={`flex flex-col gap-8  text-lg lg:text-base xl:text-lg 2xl:text-xl`}
              >
                <p>
                  Stay up to date about what’s happening on github without
                  leaving Zuri by connecting GitHub and Zuri app.
                </p>
                <p className={`flex flex-col gap-2`}>
                  <span>With Github on Zuri, you can stay updated on:</span>
                  <ul className="list-disc flex flex-col gap-1.5 list-inside">
                    <li>New commits </li>
                    <li>New pull requests</li>
                    <li> New commits</li>
                    <li> Code reviews</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default GithubHome;
