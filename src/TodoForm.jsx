import { ListItem } from '@mui/material';
import TextField from '@mui/material/TextField';
import { InputAdornment, IconButton } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create'; // Assuming Create is an icon from MUI
import { useState } from 'react';

export default function TodoForm({addTodo}) {
  const [text, setText] = useState('');

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    addTodo(text);
    setText("")

  }

  return (
    <ListItem>
        <form onSubmit={handleSubmit}>
      <TextField
        id="outlined-basic"
        label="New Todo"
        variant="outlined"
        onChange={handleChange}
        value={text}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton aria-label="Create Todo" edge="end" type='submit'>
                <CreateIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      </form>
    </ListItem>
  );
}
