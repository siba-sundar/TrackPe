import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function UserLogin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userData, setUserData] = useState({})

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(email, password)
        setUserData({
            email: email,
            password: password
        })
        setEmail('')
        setPassword('')
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
                <div className="flex flex-col items-center">
                    <img
                        src=""
                        alt=""
                        className="w-20 h-20 rounded-full border-2 border-blue-500 mb-4"
                    />

                    <form
                        onSubmit={(e) => {
                            submitHandler(e)
                        }}
                        className="w-full"
                    >
                        <h3 className="text-lg font-semibold text-gray-700 mb-2">
                            What's your email?
                        </h3>
                        <input
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="Email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4"
                        />
                        <h3 className="text-lg font-semibold text-gray-700 mb-2">
                            What's your password?
                        </h3>
                        <input
                            required
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4"
                        />
                        <button
                            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
                        >
                            Login
                        </button>

                        <Link
                            to="/user-signup"
                            className="block text-center text-blue-500 mt-4 hover:underline"
                        >
                            Create an account
                        </Link>
                    </form>
                </div>
            </div>

            <Link to="/driver-login" className="mt-6">
                <button
                    className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition duration-200"
                >
                    Sign in as captain
                </button>
            </Link>
        </div>
    )
}

export default UserLogin
