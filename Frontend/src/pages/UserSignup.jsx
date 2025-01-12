import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function UserSignup() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(firstName, lastName, email, password);
    setUserData({
      fullName:{
        firstName:firstName,
        lastName:lastName
      },
      email:email,
      password:password
    });
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');

    console.log(userData);
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
