import CssBaseline from "@mui/material/CssBaseline";
import './App.css'
import TodoList from "./TodoList";
import Navbar from "./Navbar";
function App() {
 

  return (
    <div className="App">
     <CssBaseline/>
     <Navbar/>
     <TodoList/>
     </div>
  )
}

export default App
