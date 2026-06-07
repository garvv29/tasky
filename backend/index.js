const express = require('express');
const cors = require('cors');

const app  = express();

app.use(cors());
app.use(express.json());

app.listen(5000,()=>{
    console.log("server running...");
});

let tasks = [
];

app.get("/tasks",(req,res)=>{
    res.json(tasks);
});

app.post("/tasks",(req,res)=>{
    const newTask = {
        id: tasks.length > 0
            ? tasks[tasks.length - 1].id + 1
            : 1,
        title: req.body.title,
        completed: false
    };

    tasks.push(newTask);

    res.status(201).json(newTask);
});

app.delete("/tasks/:id",(req,res)=>{
    const id = Number(req.params.id);
    tasks = tasks.filter(
        task => task.id !== id
    );

    res.json({
        message : `deleted ${id}`
    })
})

app.put("/tasks/:id",(req,res)=>{
    const id = Number(req.params.id);
    tasks = tasks.map(task=>{
        if(task.id==id)
        {
            return{
                ...task,
                completed: !task.completed
            };
        }
        return task;
    })
    res.json({
        message : "Updated"
    });
});