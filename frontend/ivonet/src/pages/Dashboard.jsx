import React from 'react';

const Dashboard = ({ appliedJobs = [], appliedOpportunities = [] }) => {
  const recentJobs = appliedJobs.slice(-5);
  const recentOpportunities = appliedOpportunities.slice(-5);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Number of Jobs Applied</h2>
          <p className="text-3xl font-bold">{appliedJobs.length}</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Number of Opportunities Applied</h2>
          <p className="text-3xl font-bold">{appliedOpportunities.length}</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4">Recent Jobs Applied</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {recentJobs.map(job => (
          <div key={job.id} className="bg-white shadow-md rounded-lg p-6">
            <img src={job.company.logo} alt="" className="w-16 h-16 mr-4 rounded-full" />
            <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
            <p className="text-gray-600">Company: {job.company.name}</p>
            <p className="text-gray-600">Location: {job.location}</p>
            <p className="text-gray-600">Experience Level: {job.experience_level}</p>
            <p className="text-gray-600">Remote: {job.has_remote ? 'Yes' : 'No'}</p>
            <p className="text-gray-600">Published: {new Date(job.published).toLocaleDateString()}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-4">Recent Opportunities Applied</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {recentOpportunities.map(opportunity => (
          <div key={opportunity.id} className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">{opportunity.title}</h3>
            <p className="text-gray-600">Category: {opportunity.category}</p>
            <p className="text-gray-600">Deadline: {new Date(opportunity.deadline).toLocaleDateString()}</p>
            <p className="text-gray-600 mb-4">{opportunity.description}</p>
            <a href={opportunity.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              View Opportunity
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
