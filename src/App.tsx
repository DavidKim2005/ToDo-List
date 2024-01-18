import { useState } from 'react';
import './App.css'
import TaskForm from './TaskForm/AddTaskForm';

function App() {

  const [tasks, setTasks] = useState([
    { text: 'Do homework' },
    { text: 'Clean your room' }
  ])

  const [taskText, setTaskText] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskText(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTask = {text: taskText}
    setTasks(prevState => [...prevState, newTask])
  }

  return (
    <div className="App">
      <TaskForm
        taskText={taskText}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
        />
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App
