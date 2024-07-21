// src/components/Layout.js
import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Layout = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="flex">
      {isAuthenticated && <Sidebar />}
      <div className={`p-6 ${isAuthenticated ? 'ml-64' : 'ml-0'} flex-1`}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
