// // src/components/Sidebar.js
// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';
// import ivonetlogo from '../assets/ivonetlogo.png';

// const Sidebar = () => {
//   const { isAuthenticated, logout } = useAuth();

//   const activeClass = 'text-white bg-[#7B76F1CC] rounded-md py-2 pl-4 pr-14';

//   return (
//     <div className="w-56 h-screen bg-gray-200 p-4 fixed top-0 left-0">
//       <div className='flex gap-2 mb-6'>
//           <img src={ivonetlogo} alt="" className='h-12' />
//           <h1 className='flex items-center text-2xl font-semibold'>IvoNet</h1>
//         </div>
//       <ul className="space-y-4">
//         {isAuthenticated ? (
//           <>
//            <div className='grid gap-5 font-bold'>
//             <li><NavLink to="/feeds" className={({isActive}) => (isActive? activeClass : "py-2 pl-4 pr-14 hover:text-white rounded-md hover:bg-[#7B76F1CC]")}>Feeds</NavLink></li>
//             <li><NavLink to="/dashboard" className={({isActive}) => (isActive? activeClass : "py-2 pl-4 pr-14 hover:text-white rounded-md hover:bg-[#7B76F1CC]")}>Dashboard</NavLink></li>
//             <li><NavLink to="/applications" className={({isActive}) => (isActive? activeClass : "py-2 pl-4 pr-14 hover:text-white rounded-md hover:bg-[#7B76F1CC]")}>Applications</NavLink></li>
//             <li><NavLink to="/opportunities" className={({isActive}) => (isActive? activeClass : "py-2 pl-4 pr-14 hover:text-white rounded-md hover:bg-[#7B76F1CC]")}>Opportunities</NavLink></li>
//             <li><NavLink to="/joblistings" className={({isActive}) => (isActive? activeClass : "py-2 pl-4 pr-14 hover:text-white rounded-md hover:bg-[#7B76F1CC]")}>Job Listings</NavLink></li>
//             </div>
//             <li><button onClick={logout} className="font-bold hover:text-white hover:bg-[#7B76F1CC] absolute bottom-5 py-2 pl-4 pr-14 rounded-md">Logout</button></li>
//           </>
//         ) : (
//           <>
//             <li><NavLink to="/login" className="hover:text-gray-400">Login</NavLink></li>
//             <li><NavLink to="/register" className="hover:text-gray-400">Register</NavLink></li>
//           </>
//         )}
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;


// src/components/Sidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import ivonetlogo from '../assets/ivonetlogo.png';
import { useTranslation } from 'react-i18next';

const Sidebar = () => {
  const { isAuthenticated, logout } = useAuth();
  const { t } = useTranslation();

  const activeClass = 'text-white bg-[#7B76F1CC] rounded-md py-2 pl-4 pr-14';

  return (
    <div className="w-56 h-screen bg-gray-200 p-4 fixed top-0 left-0">
      <div className='flex gap-2 mb-6'>
        <img src={ivonetlogo} alt="" className='h-12' />
        <h1 className='flex items-center text-2xl font-semibold'>IvoNet</h1>
      </div>
      <ul className="space-y-4">
        {isAuthenticated ? (
          <>
            <div className='grid gap-5 font-bold'>
              <li><NavLink to="/profile" className={({ isActive }) => (isActive ? activeClass : "py-2 pl-4 pr-14 hover:text-white rounded-md hover:bg-[#7B76F1CC]")}>{t('Profile')}</NavLink></li>
              <li><NavLink to="/dashboard" className={({ isActive }) => (isActive ? activeClass : "py-2 pl-4 pr-14 hover:text-white rounded-md hover:bg-[#7B76F1CC]")}>{t('Dashboard')}</NavLink></li>
              <li><NavLink to="/applications" className={({ isActive }) => (isActive ? activeClass : "py-2 pl-4 pr-14 hover:text-white rounded-md hover:bg-[#7B76F1CC]")}>{t('Applications')}</NavLink></li>
              <li><NavLink to="/opportunities" className={({ isActive }) => (isActive ? activeClass : "py-2 pl-4 pr-14 hover:text-white rounded-md hover:bg-[#7B76F1CC]")}>{t('Opportunities')}</NavLink></li>
              <li><NavLink to="/joblistings" className={({ isActive }) => (isActive ? activeClass : "py-2 pl-4 pr-14 hover:text-white rounded-md hover:bg-[#7B76F1CC]")}>{t('Job Listings')}</NavLink></li>
            </div>
            <li><button onClick={logout} className="font-bold hover:text-white hover:bg-[#7B76F1CC] absolute bottom-5 py-2 pl-4 pr-14 rounded-md">{t('Logout')}</button></li>
          </>
        ) : (
          <>
            <li><NavLink to="/login" className="hover:text-gray-400">{t('Login')}</NavLink></li>
            <li><NavLink to="/register" className="hover:text-gray-400">{t('Register')}</NavLink></li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
