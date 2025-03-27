import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const currDate = new Date()

  return (
    <>
    <div>
      <h1>Hello, World</h1>
      <h1>Count: {count}</h1>
      <h2>The time now is {currDate.toLocaleTimeString()}.</h2>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
    </>
  )
}

export default App
