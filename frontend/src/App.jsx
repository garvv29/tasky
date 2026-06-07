import { useState,useEffect } from 'react'

function App() {
  const [tasks,setTasks] = useState([]);
  const [title,setTitle] = useState("");

  // useEffect(()=>{
  //   getTasks();
  // },[]);

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

return(
  <div>

    <h1>Task Manager</h1>

    <input
      value={title}
      onChange={(e)=>
        setTitle(e.target.value)
      }
    />

    <button onClick={addTasks}>
      Add
    </button>

    <ul>

      {tasks.map(task => (

        <li key={task.id}>

          <span
            style={{
              textDecoration:
                task.completed
                ? "line-through"
                : "none"
            }}
          >
            {task.title}
          </span>

          <button
            onClick={() =>
              toggleTask(task.id)
            }
          >
            Toggle
          </button>

          <button
            onClick={() =>
              deleteTask(task.id)
            }
          >
            Delete
          </button>

        </li>

      ))}

    </ul>

  </div>
);
}

export default App
