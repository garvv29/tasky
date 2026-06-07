import TaskItem from "./TaskItem";

function TaskList({
    tasks,onDelete,onToggle
}) {
    return (
        <ul>
            {
                tasks.map((task)=>(
                    <TaskItem
                        key={task._id || task.id}
                        task={task}
                        onDelete={onDelete}
                        onToggle={onToggle}
                        />
                ))
            }
        </ul>
    );
}

export default TaskList;