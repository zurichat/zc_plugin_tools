import React from "react";
import SearchIcon from "../../../../assets/giphy/searchhh.svg";
import "./searchbar.css";
// Styles

const SearchBar = (props) => {
  return (
    <div className="appsearchbarr">
      <input type="text " placeholder={props.text} />
      <img src={SearchIcon} alt="" />
    </div>
  );
};

export default SearchBar;
