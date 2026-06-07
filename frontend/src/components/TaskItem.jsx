function TaskItem({
    task,onDelete,onToggle
}) {
    return(
        <li>
            <span
                style={{textDecoration:task.completed?"line-through":"none"}}
                >{task.title}</span>

            <button
                onClick={()=>
                    onToggle(task._id || task.id)
                }
                >
                    Toggle
                </button>

                <button
                onClick={()=>
                    onDelete(task._id || task.id)
                }
                >Delete</button>
        </li>
    );
}

export default TaskItem;