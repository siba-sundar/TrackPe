import React from 'react'
import { Route, Routes } from 'react-router-dom'


//importing pages
import Home from './pages/Home'
import UserSignup from './pages/UserSignup'
import UserLogin from './pages/UserLogin'
import DriverLogin from './pages/DriverLogin'
import DriverSignup from './pages/DriverSignup'

function App() {
  return (
    <div>
      <Routes>
        <Route  path='/'  element={<Home/>}/>
        <Route  path='/user-signup'  element={<UserSignup/>}/>
        <Route  path='/user-login'  element={<UserLogin/>}/>
        <Route  path='/driver-login'  element={<DriverLogin/>}/>
        <Route  path='/driver-signup'  element={<DriverSignup/>}/>
        
      </Routes>
    </div>
  )
}

export default App
