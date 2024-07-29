// src/App.js
import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import JobListings from './pages/JobListings';
import Applications from './pages/Applications';
import Opportunities from './pages/Opportunities';


function App() {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [appliedOpportunities, setAppliedOpportunities] = useState([]);

  const handleApply = (job) => {
    setAppliedJobs([...appliedJobs, job]);
  };

  const handleApplyOpportunity = (opportunity) => {
    setAppliedOpportunities([...appliedOpportunities, opportunity]);
  };

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard appliedJobs={appliedJobs} appliedOpportunities={appliedOpportunities}  />} />} />
            <Route path="/joblistings" element={<ProtectedRoute element={<JobListings onApply={handleApply} />} />} />
            <Route path="/applications" element={<ProtectedRoute element={<Applications appliedJobs={appliedJobs} appliedOpportunities={appliedOpportunities} />} />} />
            <Route path="/opportunities" element={<ProtectedRoute element={<Opportunities onApply={handleApplyOpportunity} />} />} />
          </Route>
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
