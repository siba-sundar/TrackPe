import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserLogout = () => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      axios
        .get(`${import.meta.env.VITE_BASE_URL}/user/logout`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            localStorage.removeItem('token');
            navigate('/user-login');
          }
        })
        .catch((error) => {
          console.error('Error during logout:', error);
        });
    } else {
      navigate('/user-login'); // If no token, navigate to login directly
    }
  }, [token, navigate]); // Dependencies for useEffect

  return <div>UserLogout</div>;
};

export default UserLogout;
