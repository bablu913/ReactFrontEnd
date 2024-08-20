import React from 'react'
import Navbar from './NavBar'
import DummyHome from './DummyHome'

const Home = () => {
  return (
    <div>
      <Navbar/>
      
      <div className="container">
        <img src='https://picsum.photos/200/300' style={{ width: '40%', height: '40%' }} alt="store" />
        <div className="centered">
          <h3 className="text-center text-blue display-2 p-2">Sponorship Management</h3>
        </div>
      </div>
      {/* <ProductAdd/> */}
      

    </div>
  )
}

export default Home