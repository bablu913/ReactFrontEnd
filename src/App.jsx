import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './components/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import SponsorsDetails from './components/SponsorsDetails'
import AddPayment from './components/AddPayment'
import RouterConfig from './components/RouterConfig'
import DummyHome from './components/DummyHome'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <RouterConfig/>
    </>
  )
}

export default App
