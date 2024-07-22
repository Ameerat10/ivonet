// src/components/Layout.js
import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Layout = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="flex min-h-screen bg-gray-100 font-nunito">
      {isAuthenticated && <Sidebar />}
      <div className={`p-6  ${isAuthenticated ? 'ml-64 bg-whitej' : 'ml-0'} flex-1`}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
