import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { IconButton, Typography } from "@material-ui/core";
import { DeleteOutlined } from "@material-ui/icons";
type NoteProps = {
  title: string;
  details: string;
  category: string;
  id: number;
  handleDeleteNote: (id: number) => void;
};

export const NoteCard = (note: NoteProps) => {
  return (
    <Card elevation={1}>
      <CardHeader
        action={
          <IconButton onClick={() => note.handleDeleteNote(note.id)}>
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
