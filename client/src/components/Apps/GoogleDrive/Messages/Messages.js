import styles from "./Messages.module.css";

function Messages() {
  return <div className={styles.wrapper}>
  <div className={styles.child}>
      <div className={styles.driveimg}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Drive_icon_%282020%29.svg/1147px-Google_Drive_icon_%282020%29.svg.png"/>
      </div>
      <div className={styles.info}>
       <p><b>This conversation is just between the two of you.</b></p>
       <p>Here you can post and receive comments with <a href="#">@GDrive</a>.</p>
      </div>

</div>
  <div className={styles.chat}>
      <ul>
          <li>Type <b>"off"</b> or <b>"stop"</b> to turn off notifications.</li>
          <li>Type <b>"on"</b> or <b>"start"</b> to turn on notifications.</li>
          <li>Type <b>"help"</b> for assistance.</li>
          <li>Type <b>"feedback"</b> followed by what's on your mind to share your comments with Drive's customer service team. See Google's <a href="#">Privacy Policy</a> and <a href="#">Terms of Service.</a></li>
      </ul>
  </div>
  <div>
  <textarea id="story" name="story"
 rows="5" cols="33" placeholder="Send a message to Google Drive">
   
  </textarea>
  </div>
   
</div>;
}

export default Messages;
