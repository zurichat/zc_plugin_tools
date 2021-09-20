import React from 'react';
import './main-layout.css';
import DescriptionAction from '../descriptionActions/descriptionAction';
import Description from '../description/Description';

function MainGiphyLayout() {
  return (
    <div className="main-side-section">
      <div className="top">
        <DescriptionAction />
        <Description />
      </div>
      
    </div>
  );
}

export default MainGiphyLayout;
