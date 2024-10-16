import { useState } from 'react'
import './App.css'
import BalancingCircleList from './components/BalancingCircleList/BalancingCircleList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Axpo Group</h1>
      <BalancingCircleList />
    </>
  )
}

export default App
