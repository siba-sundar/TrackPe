import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { DriverDataContext } from '../context/DriverContext';

const DriverProtectedWrapper = ({ children }) => {
  const { driver, setDriver, } = useContext(DriverDataContext); // Access driver context
  const [isLoading, setIsLoading] = React.useState(true); // Loading state
  const token = localStorage.getItem('token'); // Retrieve token from local storage
  const navigate = useNavigate();

  useEffect(() => {
    const authenticateDriver = async () => {
      setIsLoading(true); // Set loading to true while authenticating
      try {
        if (!token) {
          navigate('/driver-login'); // Redirect if no token
          return;
        }

        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/driver/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 200) {
          setDriver(response.data); // Update driver context with fetched data
          setIsLoading(false); // Loading complete
        } else {
          navigate('/driver-login'); // Redirect on unexpected response
        }
      } catch (error) {
        console.error('Authentication failed:', error);
        localStorage.removeItem('token'); // Remove token from local storage
        navigate('/driver-login'); // Redirect on error
      } finally {
        setIsLoading(false); // Loading complete
      }
    };

    authenticateDriver();
  }, [token, navigate, setDriver, setIsLoading]);

  if (isLoading) {
    return <p>Loading...</p>; // Display loading message while authenticating
  }

  // Render children if authenticated
  return <>{token || driver ? children : null}</>;
};

export default DriverProtectedWrapper;
