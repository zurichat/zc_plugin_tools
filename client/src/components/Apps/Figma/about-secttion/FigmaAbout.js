import React from "react";
import  logo from "./../images/fignaLogo.png"
import ss1 from "./../images/ss1.png"
import ss2 from "./../images/ss2.png"
import ss3 from "./../images/ss3.png"
import './../css/about.css'

const FigmaAbout = () => {
    return (
      <>
        <div className='banner-section'>
          <div className='banner-image-container'>
            <img src={logo} />
            <button>Configuration</button>
            <button>App Homepage</button>
          </div>
          <div className='description'>
            <h2 className='heading'>Figma</h2>
            <p>
              Figma is where teams recieve comments and post comments about
              their teams design success for further collaborations. The Figma
              app for Zuri Chat keeps everyone up to date on the latest design
              work through relevant notifications about file updates and
              comments.<br></br>
              <br></br>
              With the app, you can receive and reply to file comments directly
              in Zuri Chat. You’ll also get notified when:<br></br>• someone
              replies to one of your comments<br></br>• You’re tagged in a file
              <br></br>• You’re invited to a new file<br></br>• New comments are
              made to a file you subscribed to<br></br>
            </p>
          </div>
        </div>
        <div className='screenshots-heading-container'>
          <h4>Screenshots</h4>
        </div>
        <div className='screenshots-container'>
          <img src={ss1}></img>
          <img src={ss2}></img>
          <img src={ss3}></img>
        </div>
      </>
    )
}

export default FigmaAbout