import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import CommentIcon from "@mui/icons-material/Comment";
import DeleteIcon from "@mui/icons-material/Delete";
import EditTodoDialog from "./EditDialog";

export default function CheckboxList({ todo, deleteTodo, editTodo, editTodoCheck }) {
  const [openDialog, setOpenDialog] = React.useState(false);
  const [deleteColor, setDeleteColor] = React.useState("gray");

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleOpenDialog = (todo) => {
    setOpenDialog(true);
  };

  const editTodoHandler = (newText) => {
    editTodo(newText, todo.id);
    handleCloseDialog();
  };
  return (
    <>
      <EditTodoDialog pickedTodo={todo} open={openDialog} handleClose={handleCloseDialog} editTodoHandler={editTodoHandler} />

      <List sx={{ bgcolor: "background.paper", marginTop: "1em" }}>
        <ListItem
          secondaryAction={
            <IconButton
              edge="end"
              aria-label="comments"
              onClick={() => deleteTodo(todo.id)}
              onMouseEnter={() => {
                setDeleteColor("#1976d2");
              }}
              onMouseLeave={() => {
                setDeleteColor("gray");
              }}
            >
              <DeleteIcon style={{ color: deleteColor }} />
            </IconButton>
          }
          disablePadding
        >
          <ListItemButton role={undefined} /*onClick={handleToggle(value)}*/ dense>
            <ListItemIcon>
              <Checkbox edge="start" checked={todo.checked} onClick={() => editTodoCheck(true, todo.id)} />
            </ListItemIcon>
            <ListItemText primary={todo.text} style={{ color: todo.checked ? "gray" : "black" }} onClick={handleOpenDialog} />
          </ListItemButton>
        </ListItem>
      </List>
    </>
  );
}
