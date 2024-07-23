import React from 'react';

const Applications = ({ appliedJobs }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Applied Jobs</h1>
      {appliedJobs.length === 0 ? (
        <p>No jobs applied for yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {appliedJobs.map(job => (
            <div key={job.id} className="bg-white shadow-md rounded-lg p-6">
              <img src={job.company.logo} alt={job.company.name} className="w-16 h-16 mr-4 rounded-full" />
              <h2 className="text-xl font-semibold mb-2">{job.title}</h2>
              <p className="text-gray-600">Company: {job.company.name}</p>
              <p className="text-gray-600">Location: {job.location}</p>
              <p className="text-gray-600">Experience Level: {job.experience_level}</p>
              <p className="text-gray-600">Remote: {job.has_remote ? 'Yes' : 'No'}</p>
              <p className="text-gray-600">Published: {new Date(job.published).toLocaleDateString()}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Applications;
