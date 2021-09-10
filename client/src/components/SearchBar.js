import React, {useState, useRef} from "react";
import styles from "./SearchBar.module.css"
import SearchIcon from "../assets/search-icon.svg"

const SearchBar = ({showRecoSec}) => {
  const [inputText, setInputText] = useState('')
  const inputTextRef = useRef()
  // const getSearch = () => {
  //   const inputTextVal = inputTextRef.current.value
  //   setInputText(inputTextVal)
  // }

  const checkInput = () => {
    const inputTextVal = inputTextRef.current.value
    inputText.length > 0 && showRecoSec(inputText, true)
    inputText.length === 0 && showRecoSec(inputText, false)
    // toolList.map((item) => item.installed && item.name.toLocaleLowerCase().search(inputText) != -1 ? showNoInstall(false) : showNoInstall(true))
  }
  
  return(
    <div className={styles.search_box}>
     <img src={SearchIcon} className={styles.icon} alt="" />
     <input type="text" className={styles.input} ref = {inputTextRef} onChange={(e) => setInputText(e.currentTarget.value)}  onKeyUp={checkInput} placeholder="Search Tools"/>  
    </div>
  );
};

export default SearchBar;
