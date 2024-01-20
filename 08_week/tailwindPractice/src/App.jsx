import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      {/* <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{backgroundColor: "red"}}>Red</div>
        <div style={{backgroundColor: "green"}}>Green</div>
        <div style={{backgroundColor: "blue"}}>Blue</div>
      </div>

      <div className='flex justify-between'>
        <div className='bg-red-500'>Red</div>
        <div className='bg-green-500'>Green</div>
        <div className='bg-blue-500'>Blue</div>
      </div> */}

      {/* <div className='flex'>
        <div className='bg-red-500 w-[50%]'>My name is Kamran</div>
        <div className='bg-yellow-500 w-[30%]'>My name is Danish</div>
        <div className='bg-green-500 w-[20%]'>My name is Saqib</div>
      </div> */}

      {/* <div className='grid grid-cols-10'>
        <div className='bg-red-500 col-span-5'>My name is Kamran</div>
        <div className='bg-yellow-500 col-span-3'>My name is Danish</div>
        <div className='bg-green-500 col-span-2'>My name is Saqib</div>
      </div> */}

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
        <div className='bg-red-500'>My name is Kamran</div>
        <div className='bg-yellow-500'>My name is Danish</div>
        <div className='bg-green-500'>My name is Saqib</div>
      </div>

      <div className='bg-red-500 md:bg-blue-500'>
        Hi there
      </div>
    </>
  )
}

export default App
