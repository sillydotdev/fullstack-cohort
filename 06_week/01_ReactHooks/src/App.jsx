import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [title, setTitle] = useState("My name is Kamran")

  function updateTitle() {
    setTitle("My Name is:   "+ Math.floor(Math.random() * 100 + 1))
  }

  return (
    <div>
      <button onClick={updateTitle}>Click me to change the title...</button>
      <Header title={title} />
      {/* <HeaderWithButtons/> */}
      <Header title='My name is Danish' />
      <Header title='My name is Danish1' />
      <Header title='My name is Danish2' />
      <Header title='My name is Danish3' />
    </div>
  )
}

// here we pushed the state down to prevent the re-rendering of components which are nor being changes

// function HeaderWithButtons() {
//   const [title, setTitle] = useState("My name is Kamran")
//   function updateTitle() {
//     setTitle("My Name is:   "+ Math.floor(Math.random() * 100 + 1))
//   }
//   return(
//     <div>
//     <button onClick={updateTitle}>Click me to change the title...</button>
//     <Header title={title} />
//     </div>
    
//   )
// }

// function Header({title}) {
//   return <div>
//     {title}
//   </div>
// }

// React.memo is another way and a better one to prevent re-rendering of unnecessary components
const Header = React.memo(function Header({title}) {
  return <div>
    {title}
  </div>
})

export default App
