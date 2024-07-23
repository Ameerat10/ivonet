import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ivonetlogo from '../assets/ivonetlogo.png';
import ivonetimg from '../assets/ivonetimg.png';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    name: '',
    email: '',
    birth_date: null, // Changed to null for DatePicker
    gender: '',
    phone_number: '',
    university: '',
    university_year: '',
    major: '',
    areas_of_interest: '',
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      birth_date: date,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/auth/register/', formData);
      console.log(response.data);
      if (response.status === 201) {
        navigate('/login');
      }
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <div className='grid grid-cols-5 py-10 px-40'>
      <div className='bg-[url(./assets/bg-left.png)] grid col-span-2 p-10 text-white shadow-md'>
        <div className='flex justify-center gap-2'>
          <img src={ivonetlogo} alt="" className='h-12' />
          <h1 className='flex items-center text-2xl font-semibold'>IvoNet</h1>
        </div>
        <div className='grid justify-center'>
          <img src={ivonetimg} alt="" className='p-14' />
        </div>
        <div className='grid justify-center'>
          <h2 className='flex justify-center font-bold text-2xl'>Explore the World of </h2>
          <span className='flex justify-center font-bold text-2xl'>Opportunities</span>
          <p className='flex justify-center px-10 ml-6 text-sm text-gray-200'>Discover the future of your career with IvoNet, the premier platform designed exclusively for Ivorian university students.</p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4f p-10 col-span-3 bg-white">
        <h1 className='flex justify-center text-3xl text-[#7B76F1CC] font-bold'>Welcome to IvoNet</h1>
        <p className='flex justify-center text-2x font-bold'>Join Your Gateway to Endless Opportunities Today!</p>
        <div className='grid grid-cols-2 gap-10 mt-10 mb-5'>
          <div className='space-y-4'>
            <div>
              <label className='text-gray-500'>Name</label><br />
              <input type="text" name="name" value={formData.name} onChange={handleChange} className="border-b-2 w-full focus:outline-none" />
            </div>
            <div>
              <label className='text-gray-500'>Email</label><br />
              <input type="email" name="email" value={formData.email} onChange={handleChange} className="border-b-2 w-full focus:outline-none" />
            </div>
            <div>
              <label className='text-gray-500'>Gender</label><br />
              <div>
                <label>
                  <input type="radio" name="gender" value="male" checked={formData.gender === 'male'} onChange={handleChange} />
                  Male
                </label>
                <label className="ml-4">
                  <input type="radio" name="gender" value="female" checked={formData.gender === 'female'} onChange={handleChange} />
                  Female
                </label>
              </div>
            </div>
            <div>
              <label className='text-gray-500'>University</label><br />
              <input type="text" name="university" value={formData.university} onChange={handleChange} className="border-b-2 w-full focus:outline-none" />
            </div>
            <div>
              <label className='text-gray-500'>Major</label><br />
              <input type="text" name="major" value={formData.major} onChange={handleChange} className="border-b-2 w-full focus:outline-none" />
            </div>
            <div>
              <label className='text-gray-500'>Password</label><br />
              <input type="password" name="password" value={formData.password} onChange={handleChange} className="border-b-2 w-full focus:outline-none" />
            </div>
          </div>
          <div className='space-y-4'>
            <div>
              <label className='text-gray-500'>Username</label><br />
              <input type="text" name="username" value={formData.username} onChange={handleChange} className="border-b-2 w-full focus:outline-none" />
            </div>
            <div>
              <label className='text-gray-500'>Birth Date</label><br />
              <DatePicker
                selected={formData.birth_date}
                onChange={handleDateChange}
                dateFormat="yyyy-MM-dd"
                className="border-b-2 w-full focus:outline-none"
              />
            </div>
                <div>
                <label className='text-gray-500'>Birth Date</label><br />
                <input type="date" name="birth_date" value={formData.birth_date} onChange={handleChange} className="border-b-2 w-full focus:outline-none" />
                </div>
             <div>
               <label className='text-gray-500'>Phone Number</label><br />
               <input type="tel" name="phone_number" value={formData.phone_number} onChange={handleChange} className="border-b-2 w-full focus:outline-none" />
             </div>
             <div>
               <label className='text-gray-500'>University Year</label><br />
               <input type="text" name="university_year" value={formData.university_year} onChange={handleChange} className="border-b-2 w-full focus:outline-none" />
             </div>
             <div>
               <label className='text-gray-500'>Areas of Interest</label><br />
               <input type="text" name="areas_of_interest" value={formData.areas_of_interest} onChange={handleChange} className="border-b-2 w-full focus:outline-none" />
             </div>
             <div>
               <label className='text-gray-500'>Confirm Password</label><br />
               <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="border-b-2 w-full focus:outline-none" />
             </div>
           </div>
         </div>
         {error && <p className="text-red-500">{error}</p>}
         <div className='flex justify-center mb-2'>
         <button type="submit" className="bg-[#7B76F1CC] text-white rounded-full shadow-lg px-10 py-2">Register</button>
         </div>
         <p className='flex justify-center mt-2'>Already have an account? <Link to='/login' className="text-blue-500">Login</Link></p>
       </form>
     </div>
   );
 };

 export default Register;


// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate, Link } from 'react-router-dom';
// import ivonetlogo from '../assets/ivonetlogo.png';
// import ivonetimg from '../assets/ivonetimg.png';

// const Register = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     password: '',
//     confirmPassword: '',
//     name: '',
//     email: '',
//     birth_date: '',
//     gender: '',
//     phone_number: '',
//     university: '',
//     university_year: '',
//     major: '',
//     areas_of_interest: '',
//   });

//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (formData.password !== formData.confirmPassword) {
//       setError('Passwords do not match');
//       return;
//     }
//     try {
//       const response = await axios.post('http://127.0.0.1:8000/api/auth/register/', formData);
//       console.log(response.data);
//       if (response.status === 201) {
//         navigate('/login');
//       }
//     } catch (error) {
//       console.error(error.response.data);
//     }
//   };

//   return (
//     <div className='grid grid-cols-5 py-10 px-40'>
//       <div className='grid col-span-2 bg-purple-500 p-10 text-white shadow-md'>
//         <div className='flex justify-center gap-2'>
//           <img src={ivonetlogo} alt="" className='h-12' />
//           <h1 className='flex items-center text-2xl font-semibold'>IvoNet</h1>
//         </div>
//         <div className='grid justify-center'>
//           <img src={ivonetimg} alt="" className='p-14' />
//         </div>
//         <div className='grid justify-center'>
//           <h2 className='flex justify-center font-bold text-2xl'>Explore the World of </h2>
//           <span className='flex justify-center font-bold text-2xl'>Opportunities</span>
//           <p className='flex justify-center px-10 ml-6 text-sm text-gray-200'>Discover the future of your career with IvoNet, the premier platform designed exclusively for Ivorian university students.</p>
//         </div>
//       </div>
//       <form onSubmit={handleSubmit} className="space-y-4 p-10 col-span-3 bg-white">
//         <div className='grid grid-cols-2 gap-10'>
//           <div className='space-y-4'>
//             <div>
//               <label className='text-gray-500'>Name</label><br />
//               <input type="text" name="name" value={formData.name} onChange={handleChange} className="border-b-2 w-full focus:outline-none" />
//             </div>
//             <div>
//               <label className='text-gray-500'>Email</label><br />
//               <input type="email" name="email" value={formData.email} onChange={handleChange} className="border-b-2 w-full focus:outline-none" />
//             </div>
//             <div>
//               <label className='text-gray-500'>Gender</label><br />
//               <div>
//                 <label>
//                   <input type="radio" name="gender" value="male" checked={formData.gender === 'male'} onChange={handleChange} />
//                   Male
//                 </label>
//                 <label className="ml-4">
//                   <input type="radio" name="gender" value="female" checked={formData.gender === 'female'} onChange={handleChange} />
//                   Female
//                 </label>
//               </div>
//             </div>
//             <div>
//               <label className='text-gray-500'>University</label><br />
//               <input type="text" name="university" value={formData.university} onChange={handleChange} className="border-b-2 w-full focus:outline-none" />
//             </div>
//             <div>
//               <label className='text-gray-500'>Major</label><br />
//               <input type="text" name="major" value={formData.major} onChange={handleChange} className="border-b-2 w-full focus:outline-none" />
//             </div>
//             <div>
//               <label className='text-gray-500'>Password</label><br />
//               <input type="password" name="password" value={formData.password} onChange={handleChange} className="border-b-2 w-full focus:outline-none" />
//             </div>
//           </div>
//           <div className='space-y-4'>
//             <div>
//               <label className='text-gray-500'>Username</label><br />
//               <input type="text" name="username" value={formData.username} onChange={handleChange} className="border-b-2 w-full focus:outline-none" />
//             </div>
//             <div>
//               <label className='text-gray-500'>Birth Date</label><br />
//               <input type="date" name="birth_date" value={formData.birth_date} onChange={handleChange} className="border-b-2 w-full focus:outline-none" />
//             </div>
//             <div>
//               <label className='text-gray-500'>Phone Number</label><br />
//               <input type="tel" name="phone_number" value={formData.phone_number} onChange={handleChange} className="border-b-2 w-full focus:outline-none" />
//             </div>
//             <div>
//               <label className='text-gray-500'>University Year</label><br />
//               <input type="text" name="university_year" value={formData.university_year} onChange={handleChange} className="border-b-2 w-full focus:outline-none" />
//             </div>
//             <div>
//               <label className='text-gray-500'>Areas of Interest</label><br />
//               <input type="text" name="areas_of_interest" value={formData.areas_of_interest} onChange={handleChange} className="border-b-2 w-full focus:outline-none" />
//             </div>
//             <div>
//               <label className='text-gray-500'>Confirm Password</label><br />
//               <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="border-b-2 w-full focus:outline-none" />
//             </div>
//           </div>
//         </div>
//         {error && <p className="text-red-500">{error}</p>}
//         <button type="submit" className="flex justify-center bg-purple-500 text-white rounded px-4 py-2">Register</button>
//         <p>Already have an account? <Link to='/login' className="text-blue-500">Login</Link></p>
//       </form>
//     </div>
//   );
// };

// export default Register;
