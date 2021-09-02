import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
const ToolsView = () => {
  return (
    <div stlye={{}}>
      <h4 style={{
        margin: 20
      }}>Installed Tools</h4>
      <div style={{
        display:"flex"
      }} >
      <Card
        style={{
          width: 362,
          height: 96.23,
          radius: 8,
          margin: 20,
          marginTop: 0
          //backgroundColor: "yellow",
        }}
      >
        <CardContent style={{
          display: "inline-flex",
        }}>
          <img src="src/logo.svg" alt="App logo" />
          <section>
          <Typography
            style={{ 
              fontSize: 14,
              fontWeight: "bolder",
              padding: 0
            }}
            color="textSecondary"
            gutterBottom
          >
            App Name
          </Typography>
          <CardActions>
          <Button size="small">App description button</Button>
        </CardActions>
          </section>
          
        </CardContent>
      </Card>
      <Card
        style={{
          width: 362,
          height: 96.23,
          radius: 8,
          margin: 20,
          marginTop: 0
          //backgroundColor: "yellow",
        }}
      >
        <CardContent style={{
          display: "inline-flex",
        }}>
          <img src="src/logo.svg" alt="App logo" />
          <section>
          <Typography
            style={{ 
              fontSize: 14,
              fontWeight: "bolder",
              padding: 0
            }}
            color="textSecondary"
            gutterBottom
          >
            App Name
          </Typography>
          <CardActions>
          <Button size="small">App description button</Button>
        </CardActions>
          </section>
          
        </CardContent>
      </Card>
      <Card
        style={{
          width: 362,
          height: 96.23,
          radius: 8,
          margin: 20,
          marginTop: 0
          //backgroundColor: "yellow",
        }}
      >
        <CardContent style={{
          display: "inline-flex",
        }}>
          <img src="src/logo.svg" alt="App logo" />
          <section>
          <Typography
            style={{ 
              fontSize: 14,
              fontWeight: "bolder",
              padding: 0
            }}
            color="textSecondary"
            gutterBottom
          >
            App Name
          </Typography>
          <CardActions>
          <Button size="small">App description button</Button>
        </CardActions>
          </section>
          
        </CardContent>
      </Card>
      </div>
      <div style={{
        display:"flex"
      }} >
      <Card
        style={{
          width: 362,
          height: 96.23,
          radius: 8,
          margin: 20,
          marginTop: 0
          //backgroundColor: "yellow",
        }}
      >
        <CardContent style={{
          display: "inline-flex",
        }}>
          <img src="src/logo.svg" alt="App logo" />
          <section>
          <Typography
            style={{ 
              fontSize: 14,
              fontWeight: "bolder",
              padding: 0
            }}
            color="textSecondary"
            gutterBottom
          >
            App Name
          </Typography>
          <CardActions>
          <Button size="small">App description button</Button>
        </CardActions>
          </section>
          
        </CardContent>
      </Card>
      <Card
        style={{
          width: 362,
          height: 96.23,
          radius: 8,
          margin: 20,
          marginTop: 0
          //backgroundColor: "yellow",
        }}
      >
        <CardContent style={{
          display: "inline-flex",
        }}>
          <img src="src/logo.svg" alt="App logo" />
          <section>
          <Typography
            style={{ 
              fontSize: 14,
              fontWeight: "bolder",
              padding: 0
            }}
            color="textSecondary"
            gutterBottom
          >
            App Name
          </Typography>
          <CardActions>
          <Button size="small">App description button</Button>
        </CardActions>
          </section>
          
        </CardContent>
      </Card>
      <Card
        style={{
          width: 362,
          height: 96.23,
          radius: 8,
          margin: 20,
          marginTop: 0
          //backgroundColor: "yellow",
        }}
      >
        <CardContent style={{
          display: "inline-flex",
        }}>
          <img src="src/logo.svg" alt="App logo" />
          <section>
          <Typography
            style={{ 
              fontSize: 14,
              fontWeight: "bolder",
              padding: 0
            }}
            color="textSecondary"
            gutterBottom
          >
            ADD NEW TOOL
          </Typography>
          </section>
          
        </CardContent>
      </Card>
      </div>
    </div>
    //Main Div commented out
    /*
    <div>
      { insert your component for those working on the company tools view page 
        
      }
    </div>*/
  );
};

export default ToolsView;
