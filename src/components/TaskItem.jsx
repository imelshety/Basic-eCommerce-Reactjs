
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
const TaskItem = ({ task, removeTask }) => {
    const [isChecked, setIsChecked] = useState(task.checked)
    const handleCheckedBoxChanged = (e) => {
        setIsChecked(!isChecked);
    }
    return (
        <li className='w-11/12 lg:w-1/2 px-5 bg-fuchsia-900 text-white text-2xl rounded flex justify-center items-center relative mb-4'>
            <input
                type="checkbox"
                checked={isChecked}
                name={task.name}
                id={task.id}
                onChange={handleCheckedBoxChanged}
                className='w-4 h-4 shrink-0 rounded-full shadow-xl absolute left-4 cursor-pointer'
            />
            <label htmlFor={task.id} className=' text-sm leading-8 cursor-pointer' >
                {task.name}

            </label>
            <div className='w-2/12 absolute right-2 flex justify-around'>
                <button
                    className='bg-white text-blue-600  mx-0 hover:bg-blue-600 hover:text-white transition rounded'

                >
                    <PencilSquareIcon width={24} height={24} />
                </button>

                <button
                    className='bg-white text-red-600  mx-5 hover:bg-red-600 hover:text-white transition rounded'

                    onClick={() => removeTask(task.id)}
                >
                    <TrashIcon width={24} height={24} />
                </button>
            </div>
        </li>
    )
}

export default TaskItem