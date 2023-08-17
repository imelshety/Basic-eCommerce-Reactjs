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
            className="todo "
            onSubmit={handleFormSubmit}
        >
            <div className="wrapper relative flex gap-[0.2em] rounded">
                <input type="text"
                    id="text"
                    className="input w-3/4 rounded outline outline-fuchsia-800 focus:outline-2"
                    value={task}
                    onInput={(e) => setTask(e.target.value)}
                    required
                    autoFocus
                    maxLength={60}
                    placeholder="Enter task"
                />
                <button
                    className="btn w-[30px] rounded bg-fuchsia-800 text-white"
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