import React from "react";
import './../../searchbar.component'
import SearchBar from "./../../searchbar.component"
import FigmaAbout from "./about-secttion/FigmaAbout";
import  logo from "./images/fignaLogo.png"
import './css/Figma.css'

const Figma = () => {
  return <>
    <SearchBar />
    <div className ='Start-title'>
      <div className ="figmalogo-container">
        <img src ={logo} />
      </div>
      <h4 className ="Logo-tag">Figma</h4>
      <div className= "arrow-down">^</div>
    </div>
    <div className='welcome-nav'>
      <h4>Messages</h4>
      <h4 className='selected'>About</h4>
    </div>
    <FigmaAbout />
  </>;
};

export default Figma;
