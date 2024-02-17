
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const [todo,setToDo]=useState([])
  const [task,setTask]=useState('')
  function addTask(){
    if(task.trim()!==''){
      setToDo([...todo,task])
    }
    setTask('')
  }
  function deleteTask(index){
    const updateTask=todo.filter((task,i)=>i!==index)
    setToDo(updateTask)
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <h3>To-Do List</h3>
        <input type="text" value={task}
        onChange={(e)=>setTask(e.target.value)}
        />
        <button onClick={addTask}>Add Todo</button>
        <ul>
        {
          todo.map((task,index)=>(
            <li key={index}>
              <p>{task}</p>
              <button onClick={()=>deleteTask(index)}>Delete</button>
            </li>
          ))
        }
       </ul>
    </div>
  )
}

export default App
