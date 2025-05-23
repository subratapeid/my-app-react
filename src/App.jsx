import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const handleCount = (e) => {
  const action = e.target.dataset.action;

  if (action === "increase") {
    setCount(count + 1);
  } else if (action === "decrease" && count > 0) {
    setCount(count - 1);
  }
};

  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Test React App</h1>
      <h2>Counter: {count}</h2>
      <button data-action="increase" onClick= {handleCount}>+Increase Counter</button>
      <button data-action="decrease" onClick ={handleCount}>-Decrease Counter</button>
    </>
  )
}

export default App
