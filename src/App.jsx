import Form from './components/Form';
import Theme from './components/Theme';
import NavBar from './components/NavBar';
function App({ drakMode }) {

  const addTask = (task) => {
    console.log(task)
  }

  return (
    <>
      <NavBar />

      <div
        className={`w-full h-screen bg-sky-300  flex items-center justify-center flex-col ${drakMode && 'dark'
          }`}
      >
        <Theme drakMode={drakMode} />
        <Form addTask={addTask} />
      </div>
    </>

  )
}

export default App