import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

let counter = 4
function App() {
  const [todos, setTodos] = useState([{
    id: 1,
    title: "gym",
    description: "At 7am"
  },
  {
    id: 2,
    title: "Play",
    description: "Play Football"
  },
  {
    id: 3,
    title: "Study",
    description: "Study something"
  }])

  function addTodo() {
    
    setTodos([...todos, {
      id: counter++,
      title: Math.random(),
      description: Math.random()
    }])
  }

  return (
    <div>
    <button onClick={addTodo}>Add a Todo</button>
      {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
    </div>
  )
}

function Todo({title, description}) {
  return <div>
    <h2>
      {title}
    </h2>
    <h4>
      {description}
    </h4>
  </div>
}

export default App
