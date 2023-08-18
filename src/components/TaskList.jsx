import TaskItem from "./TaskItem"
const TaskList = ({ tasks }) => {
    return (
        <ul className=" py-8 my-10  w-1/2 flex flex-col items-center justify-between"
        >
            {tasks.sort((a, b) => b.id - a.id).map((task) => <TaskItem key={task.id} task={task} />)}
        </ul>

    )
}

export default TaskList