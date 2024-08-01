// src/components/Layout.js
import React, {useEffect} from 'react';
import Sidebar from './Sidebar';
import { Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import LanguageSwitcher from './LanguageSwitcher';

const Layout = () => {
  const { isAuthenticated } = useAuth();

  const location = useLocation();

  useEffect(() => {
    // Save the current path to localStorage
    localStorage.setItem('lastPath', location.pathname);
  }, [location]);

  console.log('Is Authenticated:', isAuthenticated);

  return (
    <div className="flex min-h-screen bg-gray-100 font-nunito">
      {isAuthenticated && <Sidebar />}
      <div className={`p-6  ${isAuthenticated ? 'ml-64' : 'ml-0'} flex-1`}>
      <LanguageSwitcher />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
