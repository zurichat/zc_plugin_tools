import React from 'react';
import './main-layout.css';
import DescriptionAction from '../descriptionActions/descriptionAction';
import Description from '../description/Description';
import Screenshots from '../screenshots/screenshots';

function MainGiphyLayout() {
  return (
    <div className="main-side-section">
      <div className="top">
        <DescriptionAction />
        <Description />
      </div>
      <div className="bottom">
        <Screenshots />
      </div>
    </div>
  );
}

export default MainGiphyLayout;
