import Form from './components/Form';
import Theme from './components/Theme';
import NavBar from './components/NavBar';
import TaskList from './components/TaskList';
import { useState } from 'react';
function App({ drakMode }) {
  const [tasks, setTasks] = useState([])
  const addTask = (task) => {
    setTasks(prevState => [...prevState, task])
  }

  return (
    <>
      <NavBar />

      <div
        className={`w-full flex items-center justify-center flex-col ${drakMode && 'dark'
          }`}
      >
        <Theme drakMode={drakMode} />
        <Form addTask={addTask} />
        {tasks && <TaskList tasks={tasks} />}
      </div>
    </>

  )
}

export default App