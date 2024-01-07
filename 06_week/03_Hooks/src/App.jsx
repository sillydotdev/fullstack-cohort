import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [id, setId] = useState(1)
  return <div>
    <button onClick={function() {
      setId(1)
    }}>1</button>
    <button onClick={function() {
      setId(2)
    }}>2</button>
    <button onClick={function() {
      setId(3)
    }}>3</button>
    <button onClick={function() {
      setId(4)
    }}>4</button>
    <Todo id={id}/>
  </div>

}

function Todo({id}) {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    fetch("https://sum-server.100xdevs.com/todo?id=" + id)
      .then(async function(res) {
        const json = await res.json();
        setTodo (json.todo);
      })
  }, [id])

  return <div>
    Id: {id}
    <h1>
      {todo.title}
    </h1>
    <h4>
      {todo.description}
    </h4>
  </div>
}

export default App
