import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    name: '',
    email: '',
    birth_date: '',
    gender: '',
    phone_number: '',
    university: '',
    university_year: '',
    major: '',
    areas_of_interest: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/auth/register/', formData);
      console.log(response.data);
      if (response.status === 201) {
        navigate('/login'); // Redirect to login page after successful registration
      }
    }
     catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label>Username</label>
        <input type="text" name="username" value={formData.username} onChange={handleChange} className="border rounded" />
      </div>
      <div>
        <label>Password</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} className="border rounded" />
      </div>
      <div>
        <label>Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} className="border rounded" />
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} className="border rounded" />
      </div>
      <div>
        <label>Birth Date</label>
        <input type="date" name="birth_date" value={formData.birth_date} onChange={handleChange} className="border rounded" />
      </div>
      <div>
        <label>Gender</label>
        <input type="text" name="gender" value={formData.gender} onChange={handleChange} className="border rounded" />
      </div>
      <div>
        <label>Phone Number</label>
        <input type="text" name="phone_number" value={formData.phone_number} onChange={handleChange} className="border rounded" />
      </div>
      <div>
        <label>University</label>
        <input type="text" name="university" value={formData.university} onChange={handleChange} className="border rounded" />
      </div>
      <div>
        <label>University Year</label>
        <input type="text" name="university_year" value={formData.university_year} onChange={handleChange} className="border rounded" />
      </div>
      <div>
        <label>Major</label>
        <input type="text" name="major" value={formData.major} onChange={handleChange} className="border rounded" />
      </div>
      <div>
        <label>Areas of Interest</label>
        <input type="text" name="areas_of_interest" value={formData.areas_of_interest} onChange={handleChange} className="border rounded" />
      </div>
      <button type="submit" className="bg-blue-500 text-white rounded px-4 py-2">Register</button>
    </form>
  );
};

export default Register;
