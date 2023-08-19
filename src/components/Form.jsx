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
            className='container mt-8'
            onSubmit={handleFormSubmit}
        >
            <div className="relative flex justify-center gap-[0.2em] rounded">
                <input type="text"
                    id="text"
                    className="input w-3/4 lg:w-1/3 rounded outline focus:outline-2 outline-fuchsia-800"
                    value={task}
                    onInput={(e) => setTask(e.target.value)}
                    required
                    autoFocus
                    maxLength={40}
                    placeholder="Enter task"
                />
                <button
                    className="w-[30px]  bg-fuchsia-800 text-white rounded ml-3 shadow shadow-gray-400"
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