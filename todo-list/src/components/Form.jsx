import { Button, Paper, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

export default function Form({ addTodo }) {
  const [text, setText] = useState(null);
  const [cont, setCont] = useState(0);

  const addTodoHandler = () => {
    addTodo({ text: text, checked: false, id: cont });
    setCont(cont + 1);
    document.getElementById("textfield").value = "";
  };

  return (
    <Paper style={{ padding: "1em" }}>
      <Box style={{ display: "flex" }}>
        <TextField
          id="textfield"
          label="Escrever nota"
          variant="outlined"
          onChange={(e) => setText(e.target.value)}
          style={{ marginRight: "1em" }}
          fullWidth
        />
        <Button onClick={addTodoHandler}>Add</Button>
      </Box>
    </Paper>
  );
}
