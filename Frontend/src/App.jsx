import React from 'react'
import { Route, Routes } from 'react-router-dom'


//importing pages
import Start from './pages/Start'
import UserSignup from './pages/UserSignup'
import UserLogin from './pages/UserLogin'
import DriverLogin from './pages/DriverLogin'
import DriverSignup from './pages/DriverSignup'
import Home from './pages/Home'
import UserProtectedWrapper from './pages/UserProtectedWrapper'
import DriverProtectedWrapper from './pages/DriverProtectWrapper'
import UserLogout from './pages/UserLogout'
import DriverHome from './pages/DriverHome'
import Riding from './pages/Riding'
import DriverRiding from './pages/DriverRiding'
import DriverLogout from "./pages/DriverLogout"
import 'remixicon/fonts/remixicon.css'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/user-signup' element={<UserSignup />} />
        <Route path='/user-login' element={<UserLogin />} />
        <Route path='/riding' element={<Riding />} />
        <Route path='/driver-riding' element={<DriverRiding />} />
        <Route path='/driver-login' element={<DriverLogin />} />
        <Route path='/driver-signup' element={<DriverSignup />} />
        <Route path='/home' element={
          <UserProtectedWrapper>
            <Home />
          </UserProtectedWrapper>
        } />

        <Route path='/user/logout' element={<UserProtectedWrapper>
          <UserLogout />
        </UserProtectedWrapper>}
        />

        <Route path='/driver-home' element={
          <DriverProtectedWrapper>
            <DriverHome />
          </DriverProtectedWrapper>
        } />
      </Routes>


      <Route path='/driver/logout' element={
        <DriverProtectedWrapper>
          <DriverLogout />
        </DriverProtectedWrapper>
      } />
    </div>
  )
}

export default App
