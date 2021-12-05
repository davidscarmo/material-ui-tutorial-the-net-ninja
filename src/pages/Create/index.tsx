import React, { FormEvent, useState } from "react";
import { FormControlLabel, makeStyles } from "@material-ui/core";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

export const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
});

export default function Create() {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsErrors] = useState(false);
  const [category, setCategory] = useState("todos");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setTitleError(false);
    setDetailsErrors(false);

    if (title == "") {
      setTitleError(true);
    }
    if (details == "") {
      setDetailsErrors(true);
    }

    if (title && details) {
      console.log(title, details, category);
    }
  };
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
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <TextField
            onChange={(e) => setTitle(e.target.value)}
            className={classes.field}
            label="Note Title"
            variant="outlined"
            color="secondary"
            fullWidth
            required
            error={titleError}
          />
          <TextField
            onChange={(e) => setDetails(e.target.value)}
            className={classes.field}
            label="Details"
            variant="outlined"
            multiline
            rows={4}
            color="secondary"
            fullWidth
            required
            error={detailsError}
          />
          <FormControl className={classes.field}>
            <FormLabel>Note Category </FormLabel>
            <RadioGroup
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <FormControlLabel
                value="money"
                control={<Radio />}
                label="Money"
              />
              <FormControlLabel
                value="todos"
                control={<Radio />}
                label="Todos"
              />
              <FormControlLabel
                value="reminders"
                control={<Radio />}
                label="Reminders"
              />
              <FormControlLabel value="work" control={<Radio />} label="Work" />
            </RadioGroup>
          </FormControl>
          <Button
            type="submit"
            color="secondary"
            variant="contained"
            endIcon={<KeyboardArrowRightIcon />}
          >
            Submit
          </Button>
        </form>
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
