import { useState } from 'react';
import { PlusIcon } from '@heroicons/react/24/solid'
const Form = ({ addTask }) => {

    const [task, setTask] = useState('');
    const handleFormSubmit = (e) => {
        e.preventDefault();
        addTask({
            name: task,
            checked: false,
            id: Date.now()
        })
        setTask("")
    }
    return (
        <form
            className=" bg-sky-500"
            onSubmit={handleFormSubmit}
        >
            <div className="wrapper">
                <input type="text"
                    id="text"
                    className="input"
                    value={task}
                    onInput={(e) => setTask(e.target.value)}
                    required
                    autoFocus
                    maxLength={60}
                    placeholder="Enter task"
                />
                <label htmlFor="task" className="label">Enter Task</label>
                <button
                    className="btn"
                    aria-label="Add Task"
                    type="submit"
                >
                    <PlusIcon />
                </button>
            </div>
        </form>
    )
}

export default Form