// src/pages/Profile.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    username: '',
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
  const { logout } = useAuth();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('access_token');
        if (!token) {
          throw new Error('No token found');
        }

        const response = await axios.get('http://127.0.0.1:8000/api/auth/profile/', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        setProfile(response.data);
        setFormData(response.data);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          // Token might be expired, log the user out
          logout();
          navigate('/login');
        } else {
          setError('Failed to fetch profile data');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [logout, navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = async () => {
    try {
      const token = localStorage.getItem('access_token');
      await axios.put('http://35.174.213.47:8000/api/auth/profile/', formData, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setProfile(formData);
      setIsEditing(false);
    } catch (error) {
      setError('Failed to update profile data');
    }
  };

  if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;

  if (error) return <div className="text-red-500 text-center">{error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Profile</h1>
      {isEditing ? (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Username:</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="mt-1 block w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Birth Date:</label>
              <input
                type="date"
                name="birth_date"
                value={formData.birth_date}
                onChange={handleChange}
                className="mt-1 block w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Gender:</label>
              <input
                type="text"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="mt-1 block w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Phone Number:</label>
              <input
                type="text"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
                className="mt-1 block w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">University:</label>
              <input
                type="text"
                name="university"
                value={formData.university}
                onChange={handleChange}
                className="mt-1 block w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">University Year:</label>
              <input
                type="text"
                name="university_year"
                value={formData.university_year}
                onChange={handleChange}
                className="mt-1 block w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Major:</label>
              <input
                type="text"
                name="major"
                value={formData.major}
                onChange={handleChange}
                className="mt-1 block w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Areas of Interest:</label>
              <textarea
                name="areas_of_interest"
                value={formData.areas_of_interest}
                onChange={handleChange}
                className="mt-1 block w-full"
              />
            </div>
          </form>
          <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
          <button onClick={() => setIsEditing(false)} className="bg-gray-500 text-white px-4 py-2 rounded ml-2">Cancel</button>
        </div>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p><strong>Name:</strong> {profile.name}</p>
          <p><strong>Username:</strong> {profile.username}</p>
          <p><strong>Email:</strong> {profile.email}</p>
          <p><strong>Birth Date:</strong> {profile.birth_date}</p>
          <p><strong>Gender:</strong> {profile.gender}</p>
          <p><strong>Phone Number:</strong> {profile.phone_number}</p>
          <p><strong>University:</strong> {profile.university}</p>
          <p><strong>University Year:</strong> {profile.university_year}</p>
          <p><strong>Major:</strong> {profile.major}</p>
          <p><strong>Areas of Interest:</strong> {profile.areas_of_interest}</p>
          <button onClick={() => setIsEditing(true)} className="bg-[#7B76F1CC] text-white px-4 py-2 rounded mt-4">Edit</button>
        </div>
      )}
    </div>
  );
};

export default Profile;
