import { useState } from 'react'


const App = () => {
  const [task, setTask] = useState('')
  const [allTasks, setAllTasks] = useState([])
  

  const formSubmit = (event) => {
    event.preventDefault()

    if(task){
      setAllTasks( (allTasks) => {
        return [...allTasks, task]
      } )
    }else{
      console.log('Napíš niečo ty vajíčko');
    }

    setTask("")
  }

  return (
    <article>
      <h1>To do app</h1>
      <form onSubmit={formSubmit} className="task-form">
        <input 
          type="text" 
          name="task" 
          placeholder="Add a new task"
          value={task}
          onChange={ (event) => setTask(event.target.value) }
        />

        <input type="submit" />
      </form>

      {allTasks.map( (oneTask, index) => {
      return <p key={index}>{oneTask}</p>
    } )}

    </article>
  )
}

export default App