// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Sidebar = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-4 fixed top-0 left-0">
      <ul className="space-y-4">
        {isAuthenticated ? (
          <>
            <li><Link to="/dashboard" className="hover:text-gray-400">Dashboard</Link></li>
            <li><button onClick={logout} className="hover:text-gray-400">Logout</button></li>
          </>
        ) : (
          <>
            <li><Link to="/login" className="hover:text-gray-400">Login</Link></li>
            <li><Link to="/register" className="hover:text-gray-400">Register</Link></li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
