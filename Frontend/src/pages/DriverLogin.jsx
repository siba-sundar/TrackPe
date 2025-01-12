import React, { useState } from 'react'
import { Link } from "react-router-dom"

function DriverLogin() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [driverData, setDriverData] = useState({})

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(email, password)
    setDriverData({
      email: email,
      password: password
    })

    console.log(driverData)
    setEmail('')
    setPassword('')
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-600 text-gray-100 p-4">
      <div className="w-full max-w-md bg-gray-800 shadow-2xl rounded-xl p-8">
        <div className="flex flex-col items-center">
          <img
            src=""
            alt=""
            className="w-16 h-16 rounded-full border-4 border-teal-400 mb-6"
          />

          <form
            onSubmit={(e) => {
              submitHandler(e)
            }}
            className="w-full"
          >
            <h3 className="text-xl font-bold text-teal-300 mb-4">
              Driver Login
            </h3>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 mb-4 bg-gray-700 text-gray-100 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-2 mb-6 bg-gray-700 text-gray-100 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
            <button
              className="w-full bg-teal-500 text-gray-900 py-2 px-4 rounded-lg font-semibold hover:bg-teal-400 transition duration-200"
            >
              Login
            </button>

            <Link
              to="/driver-signup"
              className="block text-center text-teal-300 mt-4 hover:underline"
            >
              Register as a driver
            </Link>
          </form>
        </div>
      </div>

      <Link to="/user-login" className="mt-6">
        <button
          className="bg-purple-600 text-gray-100 py-2 px-6 rounded-lg font-semibold hover:bg-purple-500 transition duration-200"
        >
          Sign in as user
        </button>
      </Link>
    </div>
  )
}

export default DriverLogin
