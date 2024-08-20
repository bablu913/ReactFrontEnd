import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import SponsorsDetails from './SponsorsDetails'
import AddPayment from './AddPayment'
import MatchEachYear from './MatchEachYear'

const RouterConfig = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/> }/>
    <Route path="/sponsors" element = {<SponsorsDetails/>} />
    <Route path="addPayment" element = {<AddPayment/>} />
    <Route path="matchEachYear" element = {<MatchEachYear/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default RouterConfig