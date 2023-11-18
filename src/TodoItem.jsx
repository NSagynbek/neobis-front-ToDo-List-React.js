import React, { useState } from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField';

export default function TodoItem({ item, setTodos }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(item.text);

  const labelId = `checkbox-list-label-${item.id}`;

  const handleToggle = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  function deleteTodo(id) {
    setTodos((todos) => todos.filter((el) => el.id !== id));
  }

  function editTodo() {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === item.id ? { ...todo, text: editedText } : todo
      )
    );
    setIsEditing(false);
  }

  return (
    <ListItem key={item.id} disablePadding>
      {isEditing ? (
        <TextField
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          onBlur={editTodo}
          autoFocus
        />
      ) : (
        <>
          <ListItemButton role={undefined} onClick={() => handleToggle(item.id)} dense>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={item.completed}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemIcon>
            <ListItemText id={labelId} primary={item.text} />
          </ListItemButton>
          <div>
            <IconButton edge="end" aria-label="delete" onClick={() => deleteTodo(item.id)}>
              <DeleteIcon />
            </IconButton>
            <IconButton edge="end" aria-label="edit" onClick={() => setIsEditing(true)}>
              <EditIcon />
            </IconButton>
          </div>
        </>
      )}
    </ListItem>
  );
}

