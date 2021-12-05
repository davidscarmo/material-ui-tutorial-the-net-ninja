import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { IconButton, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { DeleteOutlined } from "@material-ui/icons";
type NoteProps = {
  title: string;
  details: string;
  category: string;
  id: number;
};

type NoteCardProps = {
  note: NoteProps;
  handleDeleteNote: (id: number) => void;
};
const useStyles = makeStyles({
  test: {
    border: (note: NoteProps) => {
      if (note.category == "work") return "1px solid red";
    },
  },
});

export const NoteCard = ({ note, handleDeleteNote }: NoteCardProps) => {
  const classes = useStyles(note);
  return (
    <Card elevation={1} className={classes.test}>
      <CardHeader
        action={
          <IconButton onClick={() => handleDeleteNote(note.id)}>
            <DeleteOutlined />
          </IconButton>
        }
        title={note.title}
        subheader={note.category}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary">
          {note.details}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NoteCard;
