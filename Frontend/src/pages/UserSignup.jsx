import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserDataContext } from '../context/UserContext';


function UserSignup() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const { user, setUser } = useContext(UserDataContext); // Fixed context deconstruction

  const submitHandler = async (e) => {
    e.preventDefault();

    const newUser = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/user/register`,
        newUser
      );

      if (response.status === 201) {
        const data = response.data;
        setUser(data.user);
        localStorage.setItem('token', data.token);
        navigate('/home');
      } else {
        console.error('Registration failed:', response.data.message);
      }
    } catch (error) {
      console.error('Error during registration:', error.message);
    }

    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="w-full"
        >

          <div className='w-full flex justify-center mb-5 font-bold text-xl'> Signup as user</div>
          <div className="flex gap-4 mb-4">
            <input
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              placeholder="First Name"
              className="w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <input
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              placeholder="Last Name"
              className="w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Signup
          </button>
          <Link
            to="/user-login"
            className="block text-center text-blue-500 mt-4 hover:underline"
          >
            Already have an account? Login here
          </Link>
        </form>
      </div>
    </div>
  );
}

export default UserSignup;
