import React from 'react'
import '../style/githubgivepermission.css';
import { BiMessageAltDetail } from 'react-icons/bi';
import { CgMicrosoft } from 'react-icons/cg';
import { BsFillCaretRightFill } from 'react-icons/bs';
import { CgArrowsExchangeAlt } from 'react-icons/cg';
import { Link } from 'react-router-dom';

const Githubgivepermission = () => {
    return (
        <section className="ggp">
            <section className="ggpSection">
                <div className="ggpdiv">
                    <p className="ggpP">
                        <img
                            src='https://image.flaticon.com/icons/png/512/25/25231.png'
                            alt='github logo'
                            className="ggpimg"
                        />
                        <CgArrowsExchangeAlt />
                        <svg className="ggpimg" width="30" height="30" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="3.91602" width="11.7504" height="11.7504" rx="1.0991" fill="#00B87C" />
                            <rect y="13.4291" width="11.7504" height="11.7504" rx="1.0991" fill="#FEA162" />
                            <rect x="17.3457" y="5.59546" width="11.7504" height="11.7504" rx="1.0991" fill="#1A61DB" />
                            <rect x="13.4297" y="19.0244" width="11.7504" height="11.7504" rx="1.0991" fill="#DC1AA3" />
                        </svg>
                    </p>
                    <div className="ggpdiv2">
                        <p className="ggpBold ggpMargintop">Github is requesting permission to access the Zuri workspace</p>
                    </div>
                    <div className="ggpLeft">
                        <div>
                            <p className="ggpMargintop ggpBold ggpSmallfont">What will Github be able to view?</p>
                        </div>
                        <div>

                            <p className="ggpMargintop ggpSmallfont ggpFlex"><BiMessageAltDetail /><span className="ggpspan">Content and info about channel and conversations</span><BsFillCaretRightFill /></p>
                            <p className="ggpSmallfont ggpFlex"><span className="ggpspan2">View basic information about public channels in your workspace</span></p>
                            <p className="ggpSmallfont ggpFlex"><span className="ggpspan2">View basic information about private channels that Github has been added to</span></p>
                            <p className="ggpSmallfont ggpFlex"><span className="ggpspan2">View basic information about direct messages that Github has been added to</span></p>
                        </div>
                        <div>

                            <p className="ggpMargintop ggpSmallfont ggpFlex"><CgMicrosoft /><span className="ggpspan">Content and info about your workspace</span><BsFillCaretRightFill /></p>
                        </div>
                        <div>
                            <p className="ggpMargintop ggpBold ggpSmallfont">What will Github be able to do?</p>
                        </div>
                        <div>

                            <p className="ggpMargintop ggpSmallfont ggpFlex"><BiMessageAltDetail /><span className="ggpspan">Perform actions in channels and conversations</span><BsFillCaretRightFill /></p>
                        </div>
                        <div>

                            <p className="ggpMargintop ggpSmallfont ggpFlex"><CgMicrosoft /><span className="ggpspan">Perform actions in your workspace</span><BsFillCaretRightFill /></p>
                        </div>
                    </div>
                    <div className="ggpdiv3">
                        <button
                            className="ggpbtn"
                        >
                            Cancel
                        </button>
                        <Link to="/github/github-message" >
                        <button
                            className="ggpbtn2"
                        >
                            Allow
                        </button>
                        </Link>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Githubgivepermission;
