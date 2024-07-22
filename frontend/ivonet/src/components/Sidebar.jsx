// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Sidebar = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <div className="w-64 h-screen bg-gray-200 p-4 fixed top-0 left-0">
      <ul className="space-y-4">
        {isAuthenticated ? (
          <>
           <div>
            <li><Link to="/feeds" className="hover:text-gray-400">Feeds</Link></li>
            <li><Link to="/dashboard" className="hover:text-gray-400">Dashboard</Link></li>
            <li><Link to="/applications" className="hover:text-gray-400">Applications</Link></li>
            <li><Link to="/opportunities" className="hover:text-gray-400">Opportunities</Link></li>
            <li><Link to="/joblistings" className="hover:text-gray-400">Job Listings</Link></li>
            </div>
            <li><button onClick={logout} className="hover:text-gray-400 absolute bottom-0 py-10">Logout</button></li>
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
