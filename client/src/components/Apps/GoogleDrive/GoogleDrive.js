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
};

export default GoogleDrive;
