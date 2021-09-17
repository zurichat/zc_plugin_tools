import React, { useState, useRef } from "react";
import styles from "./SearchFieldTools.module.css";
import SearchIcon from "../../assets/search-icon.svg";

const SearchFieldTools = ({ sendInputText }) => {
  const [inputText, setInputText] = useState("");
  const sendInputTextToDirectory = () => {
    sendInputText(inputText);
  };
  return (
    <div className={styles.search_box}>
      <img src={SearchIcon} className={styles.icon} alt='search-icon' />
      <input
        type='text'
        className={styles.input}
        placeholder='Search Tools'
        onChange={(e) => setInputText(e.currentTarget.value)}
        onKeyUp={sendInputTextToDirectory}
      />
    </div>
  );
};

export default SearchFieldTools;
