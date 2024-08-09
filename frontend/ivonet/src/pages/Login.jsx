// // src/pages/Login.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate, Link } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';
// import ivonetlogo from '../assets/ivonetlogo.png';
// import ivonetimg from '../assets/ivonetimg.png';

// function Login() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();
//   const { login } = useAuth();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(''); // Clear any previous errors
//     try {
//       const response = await axios.post('http://127.0.0.1:8000/api/auth/login/', {
//         username,
//         password,
//       });

//       if (response.status === 200) {
//         localStorage.setItem('access_token', response.data.access);
//         localStorage.setItem('refresh_token', response.data.refresh);
//         login(); // Set authentication state to true
//         navigate('/dashboard');
//       }
//     } catch (error) {
//       console.error('Login error', error);
//       setError('Invalid username or password. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="login-form grid grid-cols-2 justify-center bg-gray-100 py-10 px-40">
//       <div className='bg-[url(./assets/bg-left.png)] p-10 text-white shadow-md'>
//       <div className='flex justify-center gap-2'>
//           <img src={ivonetlogo} alt="" className='h-12' />
//           <h1 className='flex items-center text-2xl font-semibold'>IvoNet</h1>
//         </div>
//         <div className='grid justify-center'>
//           <img src={ivonetimg} alt="" className='p-10' />
//         </div>
//         <div className='grid justify-center'>
//           <h2 className='flex justify-center font-bold text-2xl'>Explore the World of </h2>
//           <span className='flex justify-center font-bold text-2xl'>Opportunities</span>
//           <p className='flex justify-center px-10 ml-6 text-sm text-gray-200'>Discover the future of your career with IvoNet, the premier platform designed exclusively for Ivorian university students.</p>
//         </div>
//       </div>
//       <form onSubmit={handleSubmit} className="w-full bg-white p-20 shadow">
//         <h2 className="text-2xl font-bold mb-6 text-[#7B76F1CC] text-center">Welcome Back to the IvoNet Community</h2>
//         <div className="mb-4">
//           <label htmlFor="username">Username</label>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//             className="w-full border-b-2 focus:outline-none"
//           />
//         </div>
//         <div className="mb-6">
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             className="w-full border-b-2 focus:outline-none"
//           />
//         </div>
//         <div className='flex justify-center mb-2'>
//         <button
//           type="submit"
//           disabled={loading}
//           className="bg-[#7B76F1CC] text-white rounded-full shadow-lg px-10 py-2"
//         >
//           {loading ? 'Logging in...' : 'Login'}
//         </button>
//         </div>
//         {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
//         <p className='flex justify-center mt-10'>Already have an account? <Link to='/register' className="text-blue-500">Register</Link></p>
//       </form>
//     </div>
//   );
// }

// export default Login;


import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTranslation } from 'react-i18next';
import ivonetlogo from '../assets/ivonetlogo.png';
import ivonetimg from '../assets/ivonetimg.png';

function Login() {
  const { t } = useTranslation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(''); // Clear any previous errors
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/auth/login/', {
        username,
        password,
      });

      if (response.status === 200) {
        localStorage.setItem('access_token', response.data.access);
        localStorage.setItem('refresh_token', response.data.refresh);
        login(); // Set authentication state to true
        navigate('/dashboard');
      }
    } catch (error) {
      console.error('Login error', error);
      setError(t('Invalid username or password. Please try again.'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-form grid grid-cols-2 justify-center bg-gray-100 py-10 px-40">
      <div className='bg-[url(./assets/bg-left.png)] p-10 text-white shadow-md'>
        <div className='flex justify-center gap-2'>
          <img src={ivonetlogo} alt="" className='h-12' />
          <h1 className='flex items-center text-2xl font-semibold'>IvoNet</h1>
        </div>
        <div className='grid justify-center'>
          <img src={ivonetimg} alt="" className='p-10' />
        </div>
        <div className='grid justify-center'>
          <h2 className='flex justify-center font-bold text-2xl'>{t('Explore the World of')}</h2>
          <span className='flex justify-center font-bold text-2xl'>{t('Opportunities')}</span>
          <p className='flex justify-center px-10 ml-6 text-sm text-gray-200'>{t('Discover the future of your career with IvoNet, the premier platform designed exclusively for Ivorian university students.')}</p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="w-full bg-white p-20 shadow">
        <h2 className="text-2xl font-bold mb-6 text-[#7B76F1CC] text-center">{t('Welcome Back to the IvoNet Community')}</h2>
        <div className="mb-4">
          <label htmlFor="username">{t('Username')}</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full border-b-2 focus:outline-none"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password">{t('Password')}</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full border-b-2 focus:outline-none"
          />
        </div>
        <div className='flex justify-center mb-2'>
          <button
            type="submit"
            disabled={loading}
            className="bg-[#7B76F1CC] text-white rounded-full shadow-lg px-10 py-2"
          >
            {loading ? t('Loading...') : t('Login')}
          </button>
        </div>
        {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
        <p className='flex justify-center mt-10'>{t('Already have an account?')} <Link to='/register' className="text-blue-500">{t('Register')}</Link></p>
      </form>
    </div>
  );
}

export default Login;
