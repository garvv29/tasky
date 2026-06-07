import { useState } from "react";

function TaskForm({ onAdd }){
    const[title,setTitle]=useState("");

    const handleSubmit = () => {
        if(!title.trim())return;

        onAdd(title);

        setTitle("");
    };
    return(
        <div>
            <input
                value={title}
                onChange={(e)=>setTitle(e.target.value)}placeholder="EnterTask"/>

        <button onClick={handleSubmit}>
            Add Task
        </button>
        </div>

    )
}

export default TaskForm;