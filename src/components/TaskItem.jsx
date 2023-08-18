
import { CheckIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
const TaskItem = ({ task }) => {
    const [isChecked, setIsChecked] = useState(task.checked)
    const handleCheckedBoxChanged = (e) => {
        setIsChecked(!isChecked);
    }
    return (
        <li className='w-3/4 px-5 bg-fuchsia-900 text-white text-2xl rounded flex justify-center items-center relative mb-4'>
            <input
                type="checkbox"
                checked={isChecked}
                name={task.name}
                id={task.id}
                onChange={handleCheckedBoxChanged}
                className='w-4 h-4 shrink-0 rounded-full shadow-xl absolute left-4 cursor-pointer'
            />
            <span className='absolute top-2 left-4'>
                <CheckIcon className='w-4 h-4 text-fuchsia-950 leading-3 font-extrabold hidden' />
            </span>
            <label htmlFor={task.id} className=' text-left leading-8' >
                {task.name}

            </label>
            <div className='absolute right-2 flex justify-around'>
                <button
                    className='bg-white text-blue-600  mx-5 hover:bg-blue-600 hover:text-white transition rounded'
                // onClick={}
                >
                    <PencilSquareIcon width={24} height={24} />
                </button>

                <button
                    className='bg-white text-red-600  mx-5 hover:bg-red-600 hover:text-white transition rounded'

                // onClick={}
                >
                    <TrashIcon width={24} height={24} />
                </button>
            </div>
        </li>
    )
}

export default TaskItem