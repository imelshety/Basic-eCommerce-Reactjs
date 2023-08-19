import Form from './components/Form';
// import Theme from './components/Theme';
import NavBar from './components/NavBar';
import TaskList from './components/TaskList';
import { useState } from 'react';
function App() {
  const [tasks, setTasks] = useState([])
  const addTask = (task) => {
    setTasks(prevState => [...prevState, task])
  }
  const removeTask = (id) => {
    setTasks(prevState => prevState.filter(task => task.id !== id))
  }
  return (
    <>
      <NavBar />

      {/* <div
        className={`w-full flex items-center justify-center flex-col ${drakMode && 'dark'
          }`}
      > */}
      {/* <Theme drakMode={drakMode} /> */}
      <Form addTask={addTask} />
      {tasks && <TaskList tasks={tasks} removeTask={removeTask} />}
      {/* </div> */}
    </>

  )
}

export default App