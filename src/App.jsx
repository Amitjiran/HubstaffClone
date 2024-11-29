import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // Import Navigate for redirection
import './App.css';
import Dashboard from './components/Dashboard/MainDashboard/AMainDashboard';
import AMainLogin from './components/LoginPage/Login/AMainLogin';

function App() {
  const token = localStorage.getItem('token'); // Get the token from localStorage

  return (
    <Router>
      <Routes>
        {/* Define route for the login page */}
        <Route path="/" element={<AMainLogin />} />
        
        {/* Define route for the dashboard */}
        <Route 
          path="/dashboard" 
          element={token ? <Dashboard /> : <Navigate to="/" replace />} // Redirect to login if no token
        />
      </Routes>
    </Router>
  );
}

export default App;
