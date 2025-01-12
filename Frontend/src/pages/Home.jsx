import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        <div className='h-screen pt-8 flex justify-between w-full flex-col bg-red-400'>
            <img src="" alt="" />
            <div className='bg-white'>
                <h2>Get Started with TrackPe</h2>
                <Link to="/user-login">Continue</Link>
            </div>
        </div>
    </div>
  )
}

export default Home