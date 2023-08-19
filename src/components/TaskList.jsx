import TaskItem from "./TaskItem"
const TaskList = ({ tasks, removeTask }) => {
    return (
        <ul className="py-8 my-10 flex flex-col items-center"
        >
            {tasks.sort((a, b) => b.id - a.id).map((task) => <TaskItem key={task.id} task={task} removeTask={removeTask} />)}
        </ul>

    )
}

export default TaskList