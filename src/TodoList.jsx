import * as React from 'react';
import List from '@mui/material/List';
import { useState,useEffect } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import { v4 as uuid } from 'uuid';
import { Box,Typography } from '@mui/material';
import { ClassNames } from '@emotion/react';

const getInitialData = ()=>{
    const data = JSON.parse(localStorage.getItem("todos"));
    if(!data) return [];
    return data ;
}  

export default function TodoList() {
    const [todos, setTodos] = useState(getInitialData);
    useEffect(()=>{
        localStorage.setItem("todos",JSON.stringify(todos));

    },[todos])

    function addTodo(text){
        setTodos((todos)=>{
            return [...todos,{text:text,id:uuid(), completed:false}]
        })

    }
  
    return (
      <Box  sx={{
        display:'flex',
        justifyContent: "center",
        flexDirection: "column",
        alignItems:"center",
        m:3,
      }}
      >
        <Typography variant='h5' component="h1" sx={{flexGrow:1}}>
           Todos
        </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          {todos.map((item) => (
            <TodoItem key={item.id} item={item} setTodos={setTodos} todos={todos} />
          ))}
          <TodoForm addTodo={addTodo}/>
        </List>
     </Box>
    );
  }
