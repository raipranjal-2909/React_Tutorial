import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    username: "Pranjal",
    Age: 21
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1>
      <Card username="Reactcode"  btnText="click me"/>  
      <Card username="Pranjal"  btnText="Visit Site"/>  
    </>
  )
}

export default App
