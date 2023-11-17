// TodoItem.js
import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function TodoItem({ item, setTodos, todos }) {
  const labelId = `checkbox-list-label-${item.id}`;

  const handleToggle = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  function deleteTodo(id){
    setTodos((todos)=>{
        return todos.filter((el)=>{
            return el.id!==id
        })
    })
  }

  function editTodo(id){

  }

  return (
    <ListItem
      key={item.id}
      secondaryAction={
        <div>
          <IconButton edge="end" aria-label="delete" onClick={()=>deleteTodo(item.id)}>
            <DeleteIcon />
          </IconButton>
          <IconButton edge="end" aria-label="edit" onClick={()=>editTodo(item.id)} >
            <EditIcon />
          </IconButton>
        </div>
      }
      disablePadding
    >
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
    </ListItem>
  );
}
