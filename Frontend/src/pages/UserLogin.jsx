
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function UserLogin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const submitHandler = (e) => {
        e.preventDefault()
        console.log(email, password)

        setEmail('') 
        setPassword('')
    }



    return (
        <div>
            <div>
                <div>
                    <img src="" alt="" />

                    <form onSubmit={(e) => {
                        submitHandler(e)
                    }}>
                        <h3>Whats your email</h3>
                        <input
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email" placeholder="Email" />
                        <h3>Whats your password</h3>
                        <input
                            required
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password" />
                        <button>Login</button>

                        <Link to="/user-signup">Create an account</Link>
                    </form>
                </div>
            </div>

            <div>
                <button>Sign in as captain</button>
            </div>
        </div>
    )
}


export default UserLogin