import { useState, useEffect } from 'react'
import 'animate.css';

const App = () => {
  const [task, setTask] = useState('')
  const [allTasks, setAllTasks] = useState(() => {
    
    const savedTasks = localStorage.getItem('tasks')
    return savedTasks ? JSON.parse(savedTasks) : []
  })

  useEffect(() => {
    
    localStorage.setItem('tasks', JSON.stringify(allTasks))
  }, [allTasks])

  const formSubmit = (event) => {
    event.preventDefault()

    if (task) {
      setAllTasks((prevTasks) => [...prevTasks, task])
      setTask('')
    } else {
      alert('Please enter a task')
    }
  }

  const removeItem = (id) => {
    setAllTasks((prevTasks) => prevTasks.filter((_, index) => index !== id));
  }




  return (
    <article>
      <h1>TO DO APP</h1>
      <form onSubmit={formSubmit} className="task-form">
        <input 
          className='todo-input'
          type="text"
          name="task"
          placeholder="Add a new task"
          autoComplete='off'
          value={task}
          onChange={(event) => setTask(event.target.value)}
        />
        <input type="submit" className='submit-btn' value='Add Task' />
      </form>

      {allTasks.map((oneTask, index) => (
          <p className='task-item animate__animated animate__pulse' key={index}>{oneTask}<button className='delete-btn' onClick={() => removeItem(index)} ><i className="fas fa-trash-alt"></i></button></p>
          
      ))}
    </article>
  );
};

export default App;
