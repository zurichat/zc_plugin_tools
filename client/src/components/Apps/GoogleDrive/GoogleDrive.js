<<<<<<< HEAD
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

const GoogleDrive = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/");
  };
  return (
    // Please Clean the code below and add your code to complete your task, This is an example code that can be deleted
    <div className="flex flex-col h-screen">
      <div
        onClick={handleClick}
        className="cursor-pointer p-2 flex space-x-2 bg-gray-500 w-max m-4 rounded-full text-white"
      >
        <div>
          <FontAwesomeIcon icon={faAngleDoubleLeft} className="" />
        </div>
        <div className="">back to main</div>
      </div>
      <div className="flex flex-1 justify-center items-center ">
        <div className="font-extrabold text-2xl">
          This is the Google Drive Home Page
        </div>
      </div>
    </div>
  );
=======
import React, {useState} from "react";
import styles from './GoogleDrive.module.css'
import Messages from './Messages/Messages'
import About from './About/About'

const  GoogleDrive = () => {

  const [page, setPage] = useState('messages')
  
  console.log(page)

  return (
    <div className={styles.container}>
      <div className={styles.layer1}>
        
      </div>

      <div className={styles.layer2}>
        <h3 className={page==='messages'? styles.markGreen: null} onClick={() => setPage('messages')}>Messages</h3>
        <h3 className={page==='about'? styles.markGreen: null} onClick={() => setPage('about')}>About</h3>
      </div>
      <React.Fragment>
        {page === 'messages'? <Messages />:null}
        {page === 'about'? <About />:null}
      </React.Fragment>


    </div>);
>>>>>>> 492e67567111d965527c0335cbe3146c9c2738dc
};

export default GoogleDrive;
