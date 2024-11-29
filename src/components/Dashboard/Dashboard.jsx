import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    
    if (!token) {
      // If token is not found, redirect to the login page
      navigate('/');
      return;
    }

    // Fetch user data from the dashboard API with the token
    fetch('http://localhost:5000/dashboard', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`, // Include token in Authorization header
      },
    })
      .then(response => response.json())
      .then(data => {
        if (data.message) {
          setError(data.message);
        } else {
          setUserData(data.user);
        }
      })
      .catch(err => {
        setError('Failed to fetch dashboard data.');
      });
  }, [navigate]);

  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      {error && <p className="error">{error}</p>}
      {userData && <div>Welcome {userData.name}!</div>}
    </div>
  );
};

export default Dashboard;
