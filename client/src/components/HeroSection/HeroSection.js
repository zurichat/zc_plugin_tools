import React, {useState} from 'react'
import styles from "./HeroSection.module.css"
import HeroLaptopImg from "../../assets/hero-laptop.png"
import TitleBox from '../fragments/TitleBox'
import { Link } from 'react-router-dom'

const HeroSection = () => {
    const [showHero, setShowHero] = useState(true)
    return (
        <div className ={styles.hero_section}>
            <TitleBox title = 'tools' text= 'tool directory' link = {true}/>
            {/* end of title box */}
           {showHero && (
                <div className={styles.content_box}>
                <span className={styles.cancel} onClick ={() => setShowHero(!showHero)}>&times;</span>
                <div className={styles.content_wrap}>
                    <div className={styles.title}>Powerful tools integrated just for Zuri chat</div>
                    <p className={styles.text}>Tools belong to you and your team, and they
                     provide you extra features to make you more productive. 
                    Install once and everyone can make use of them.</p>
                    <Link to= "/tools"  className={styles.btn}>Browse available tools</Link>
                </div>
                {/* end of content-wrap */}
                <div className={styles.image_box}>
                    <figure className={styles.img_wrap}>
                    <img src={HeroLaptopImg} alt="" className={styles.img} />
                    </figure>
                </div>
            </div>
           )}
        {/* end of content box */}
        </div>
    //     {/* end of content-wrap */}
    //     <div className={styles.image_box}>
    //       <figure className={styles.img_wrap}>
    //         <img src={HeroLaptopImg} alt="" className={styles.img} />
    //       </figure>
    //     </div>
    //   </div>
    //   {/* end of content box */}
    // </div>
  );
};

export default HeroSection;

// #242424  Powerful tools integrated just for Zuri chat
// #3A3A3A    Tools belong to you and your team, and they provide you extra features to make you more productive. Install once and everyone can make use of them.
// #009B69   Browse available tools
