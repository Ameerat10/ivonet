// // src/pages/Login.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';

// function Login() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();
//   const { login } = useAuth();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://127.0.0.1:8000/api/auth/login/', {
//         username,
//         password,
//       });
//       if (response.status === 200) {
//         localStorage.setItem('access_token', response.data.access);
//         login(); // Set authentication state to true
//         navigate('/dashboard');
//       }
//     } catch (error) {
//       console.error('Login error', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
//       <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//       <button type="submit">Login</button>
//     </form>
//   );
// }

// export default Login;

// src/pages/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Login() {
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
        login(); // Set authentication state to true
        navigate('/dashboard');
      }
    } catch (error) {
      console.error('Login error', error);
      setError('Invalid username or password. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-form flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="mb-6">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
        {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
      </form>
    </div>
  );
}

export default Login;
