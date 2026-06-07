import { useState,useEffect } from 'react'
import {getTasks,createTask,deleteTask,toggleTask} from './services/api' 
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {

const [tasks, setTasks] = useState([]);
const [title, setTitle] = useState("");

  useEffect(()=>{
    loadTasks();
  },[]);

//   const getTasks = async () =>{
//   const res = await fetch("http://localhost:5000/tasks");
//   const data = await res.json();

//   setTasks(data);
// };

// const addTasks = async () =>{

//   if(!title.trim()) return;

//   await fetch("http://localhost:5000/tasks",{
//     method:"POST",
//     headers:{
//       "Content-Type":"application/json"
//     },

//     body:JSON.stringify({title})
//   });

//   setTitle("");
//   getTasks();
// };

// const deleteTask = async (id) => {

//   await fetch(
//     `http://localhost:5000/tasks/${id}`,
//     {
//       method:"DELETE"
//     }
//   );

//   getTasks();
// };

// const toggleTask = async (id) => {

//   await fetch(
//     `http://localhost:5000/tasks/${id}`,
//     {
//       method:"PUT"
//     }
//   );

//   getTasks();

// };

async function loadTasks() {
  const data = await getTasks();
  setTasks(data);
}

async function addTasks(taskTitle) {
  await createTask(taskTitle);
  loadTasks();
}

async function removeTasks(id) {
  await deleteTask(id);
  loadTasks();
}

async function handleToggleTask(id) {
  await toggleTask(id);
  loadTasks();
}



return(
  <div>
    <h1>Task Manager</h1>
    <TaskForm onAdd={addTasks}/>
    <TaskList tasks={tasks} onDelete={removeTasks} onToggle={handleToggleTask} />
  </div>
);
}

export default App
