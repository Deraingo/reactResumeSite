import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='header'>
        <h1>Daniel Wakfield</h1>
      
        <div className='contents'>
          <a href='https://github.com/Deraingo'>Github</a>
          <a href='www.linkedin.com/in/daniel-wakefield-a4679023b'>LinkedIn</a>
          <a href=''>Instagram</a>
        </div>
      </div>
    </>
  )
}

export default App
