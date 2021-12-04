import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({});

export default function Create() {
  // const classes = useStyles();
  return (
    <>
      {" "}
      <Container>
        <Typography
          variant="h6"
          component="h2"
          color="textSecondary"
          gutterBottom
        >
          Create a new note
        </Typography>

        <Button
          type="submit"
          color="secondary"
          variant="contained"
          onClick={() => console.log("You clicked me")}
          endIcon={<KeyboardArrowRightIcon />}
        >
          Submit
        </Button>
        {/* Icons
        <br />
        <AcUnitOutlinedIcon />
        <AcUnitOutlinedIcon color="secondary" fontSize="large"/>
        <AcUnitOutlinedIcon color="secondary" fontSize="small"/>
        <AcUnitOutlinedIcon color="action" fontSize="small"/>
        <AcUnitOutlinedIcon color="error" fontSize="small"/>
        <AcUnitOutlinedIcon color="disabled" fontSize="small"/> */}
      </Container>
    </>
  );
}
