import React from "react";
import { Typography, Box, Grid, Button, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import { usePrevSponsors } from "../../../hooks/airtable/sponsors/previoussponsors";
import Slides from "./Carousel";
const useStyles = makeStyles({
  root: {
    padding: "25px"
  },
  container: {
    padding: "20px",
    borderRadius: "5px"
  },
  newsponsor:{
    background: "#CA484F",
    padding:'25px',
    textShadow: `0 0 20px #fff, 
    0 0 30px #CA484F,
    0 0 40px #CA484F,
    0 0 50px #CA484F,
    0 0 60px #CA484F,
    0 0 70px #CA484F,
    0 0 80px #CA484F`
  },
  btn: {
    background: "black",
    color: "white",
    borderRadius: "2px",
    "&:hover": {
      background: "#202136",
      opacity: "0.7"
    }
  }
});
const PreviousSponsors = (props) => {
  const data = usePrevSponsors();
  const [visible, setVisible] = React.useState(false);
  const classes = useStyles();
  const handleVisibility = (data) => {};

  return (
    <div id="sponsors">
    <div>
    <Container className={classes.root}>
        <Typography gutterBottom={true} variant="h3">
          <center>
            <b>Previous Sponsors</b>
          </center>
          <br />
        </Typography>
        <Box>
          <Slides data={data} />
        </Box>
    </Container>
    </div>
    <div className={classes.newsponsor}>
    
    <Container >
        <Typography gutterBottom={true} variant="h3">
          <center>
            <b>Sponsors</b>
          </center>
          <br />
        </Typography>
        <Box>
          {" "}
          <Typography gutterBottom={true} variant="h2">
            <center>
              <b>Coming Soon</b><br/>
            </center>
            <br />
          </Typography>
        </Box>
      </Container>

    </div>
      
      
    </div>
  );
};

export default PreviousSponsors;
