import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { IconButton, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { DeleteOutlined } from "@material-ui/icons";
import Avatar from "@material-ui/core/Avatar";
import { blue, green, pink, yellow } from "@material-ui/core/colors";

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
  avatar: {
    backgroundColor: (note: NoteProps) => {
      if (note.category == "work") return yellow[700];
      if (note.category == "money") return green[500];
      if (note.category == "todos") return pink[500];
      return blue[700];
    },
  },
});

export const NoteCard = ({ note, handleDeleteNote }: NoteCardProps) => {
  const classes = useStyles(note);
  return (
    <Card elevation={1}>
      <CardHeader
        avatar={
          <Avatar className={classes.avatar}>
            {note.category[0].toUpperCase()}
          </Avatar>
        }
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
