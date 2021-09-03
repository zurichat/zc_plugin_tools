import React, { useState } from "react";
import HeroSection from "../HeroSection/HeroSection";
import InstalledTools from "../MainPage/Instaledtoolssection";
const ToolsView = () => {
  const [showHero, setShowHero] = useState(true);

  return (
    <div style={{ padding: "12px 2rem" }}>
      <h4 style={{
        position: "relative",
        left: 20.35,
        right: 73.12,
        top: 46.82,
        bottom: 51.62,
        
        fontFamily: "Lato",
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: 15,
        lineHeight: 15
      }}>Installed Tools</h4>
      <div style={{
        display: "flex"
      }} >
        <Card
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          position: "relative",
          width: 362,
          height: 96.23,
          background: "white",
          borderRadius: 8,
          margin: 20

          //backgroundColor: "yellow",
        }}
      >
        <CardContent style={{
          display: "inline-flex",
        }}>
          <img src="./apps/gmail.png" alt="App logo"  width="60" height = "60"/>
          <section style={{
            margin: 5
          }}>
          <Typography
            style={{

              fontFamily: "Lato",
              fontStyle: "normal",
              fontWeight: "bolder",
              fontSize: 14,
              color: "#242424"
            }}
            color="textSecondary"
            gutterBottom
          >
            <a href="">Gmail</a>
          </Typography>
          <Typography style={{
            fontFamily: "Lato",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: 12,
            color: "#767676",
          }}>
          Get access to the organization’s mail without leaving Zuri Chat
          </Typography>
          </section>
          
        </CardContent>
      </Card>
      <Card
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          position: "relative",
          width: 362,
          height: 96.23,
          background: "white",
          borderRadius: 8,
          margin: 20

          //backgroundColor: "yellow",
        }}
      >
        <CardContent style={{
          display: "inline-flex",
        }}>
          <img src="./apps/Figma.png" alt="App logo"  width="60" height = "60"/>
          <section style={{
            margin: 5
          }}>
          <Typography
            style={{

              fontFamily: "Lato",
              fontStyle: "normal",
              fontWeight: "bolder",
              fontSize: 14,
              color: "#242424"
            }}
            color="textSecondary"
            gutterBottom
          >
            <a href="">Figma</a>
          </Typography>
          <Typography style={{
            fontFamily: "Lato",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: 12,
            color: "#767676",
          }}>
          Get access to the organization’s mail without leaving Zuri Chat
          </Typography>
          </section>
          
        </CardContent>
      </Card>
      <Card
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          position: "relative",
          width: 362,
          height: 96.23,
          background: "white",
          borderRadius: 8,
          margin: 20

          //backgroundColor: "yellow",
        }}
      >
        <CardContent style={{
          display: "inline-flex",
        }}>
          <img src="./apps/github.png" alt="App logo"  width="60" height = "60"/>
          <section style={{
            margin: 5
          }}>
          <Typography
            style={{

              fontFamily: "Lato",
              fontStyle: "normal",
              fontWeight: "bolder",
              fontSize: 14,
              color: "#242424"
            }}
            color="textSecondary"
            gutterBottom
          >
            <a href="">Github</a>
          </Typography>
          <Typography style={{
            fontFamily: "Lato",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: 12,
            color: "#767676",
          }}>
          Get access to the organization’s mail without leaving Zuri Chat
          </Typography>
          </section>
          
        </CardContent>
      </Card>
      
      </div>
      <div style={{
        display: "flex"
      }} >
      <Card
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          position: "relative",
          width: 362,
          height: 96.23,
          background: "white",
          borderRadius: 8,
          margin: 20

          //backgroundColor: "yellow",
        }}
      >
        <CardContent style={{
          display: "inline-flex",
        }}>
          <img src="./apps/googleDrive.png" alt="App logo"  width="60" height = "60"/>
          <section style={{
            margin: 5
          }}>
          <Typography
            style={{

              fontFamily: "Lato",
              fontStyle: "normal",
              fontWeight: "bolder",
              fontSize: 14,
              color: "#242424"
            }}
            color="textSecondary"
            gutterBottom
          >
            <a href="">Google Drive</a>
          </Typography>
          <Typography style={{
            fontFamily: "Lato",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: 12,
            color: "#767676",
          }}>
          Get access to the organization’s mail without leaving Zuri Chat
          </Typography>
          </section>
          
        </CardContent>
      </Card>
      <Card
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          position: "relative",
          width: 362,
          height: 96.23,
          background: "white",
          borderRadius: 8,
          margin: 20
        }}
      >
        <CardContent style={{
          display: "inline-flex",
        }}>
          <img src="./apps/giphy.png" alt="App logo"  width="60" height = "60"/>
          <section style={{
            margin: 5
          }}>
          <Typography
            style={{

              fontFamily: "Lato",
              fontStyle: "normal",
              fontWeight: "bolder",
              fontSize: 14,
              color: "#242424"
            }}
            color="textSecondary"
            gutterBottom
          >
            <a href="">Giphy</a>
          </Typography>
          <Typography style={{
            fontFamily: "Lato",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: 12,
            color: "#767676",
          }}>
          Get access to the organization’s mail without leaving Zuri Chat
          </Typography>
          </section>
          
        </CardContent>
      </Card>
      <Card
        style={{
          width: 361,
height: 98,

borderColor: "#C4C4C4",
borderWidth: 1,
borderStyle: "dashed",
boxSizing: "border-box",
          position: "relative",
          borderRadius: 8,
          margin: 20,
          backgroundColor: "#999999"
        }}
      >
        <CardContent style={{
          display: "inline-flex",
        }}>
          
          <section style={{
            margin: 5
          }}>
          <Typography
            style={{

              fontFamily: "Lato",
              fontStyle: "normal",
              fontWeight: "bolder",
              fontSize: 16,
              color: "#3A3A3A",
              position: "relative",
              top: 15,
              right: 0,
              left: 100,
              display: "flex"
            }}
            color="textSecondary"
            gutterBottom
          >
            
            <a href="">+&emsp; Add Tools</a>
          </Typography>
          </section>
          
        </CardContent>
      </Card>
      </div>
      <div>
        {showHero && (
          <HeroSection showHeroSection={() => setShowHero(!showHero)} />
        )}
      </div>
      <InstalledTools />
    </div>
  );
};

export default ToolsView;
