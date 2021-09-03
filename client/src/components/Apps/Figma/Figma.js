import React, { Component } from 'react';
import './../../searchbar.component'
import SearchBar from "./../../searchbar.component"
import FigmaAbout from "./about-secttion/FigmaAbout";
import FigmaMessages from "./messages-section/FigmaMessages";
import  logo from "./images/fignaLogo.png"
import './css/Figma.css'


const initialState = {
  page : 'about'
}
class Figma extends Component{
  constructor() {
    super()
    this.state = initialState
  }

  

  render (){
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
      <h4 onClick ={() => {this.setState({page : 'messages'})}} className={this.state.page === 'about'? '' : 'selected'}>Messages</h4>
      <h4 onClick ={() => {this.setState({page : 'about'}) }} className={this.state.page === 'about'? 'selected' : ''}>About</h4>
    </div>{
      this.state.page === 'about'?
      <FigmaAbout /> :
      <FigmaMessages />
    }
    
  </>;
  }
}

export default Figma;