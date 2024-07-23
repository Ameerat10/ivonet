// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const JobListings = () => {
//   const [jobs, setJobs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchJobs = async () => {
//         try {
//           const response = await axios.get('https://thingproxy.freeboard.io/fetch/https://jobdataapi.com/api/jobs/');
//           console.log('API response:', response.data);
//           setJobs(response.data.results || []);  // Ensure results is an array
//           setLoading(false);
//         } catch (error) {
//           console.error('Error fetching job listings:', error);
//           setError('Error fetching job listings: ' + error.message);
//           setLoading(false);
//         }
//       };

//     fetchJobs();
//   }, []);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>{error}</p>;
//   }

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-4">Job Listings</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {jobs.map(job => (
//           <div key={job.id} className="bg-white shadow-md rounded-lg p-6">
//             <img src={job.company.logo} alt={job.company.name} className="w-16 h-16 mr-4 rounded-full" />
//             <h2 className="text-xl font-semibold mb-2">{job.title}</h2>
//             <p className="text-gray-600">Company: {job.company.name}</p>
//             <p className="text-gray-600">Location: {job.location}</p>
//             <p className="text-gray-600">Experience Level: {job.experience_level}</p>
//             <p className="text-gray-600">Remote: {job.has_remote ? 'Yes' : 'No'}</p>
//             <p className="text-gray-600">Published: {new Date(job.published).toLocaleDateString()}</p>
//             <div className='flex gap-8'>
//             <a href={job.application_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
//               View Job
//             </a>
//             <button className='bg-[#7B76F1CC] text-white px-5 rounded-md shadow hover:bg-purple-500'>Apply</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default JobListings;


import React, { useEffect, useState } from 'react';
import axios from 'axios';

const JobListings = ({ onApply }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [appliedJobs, setAppliedJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('https://thingproxy.freeboard.io/fetch/https://jobdataapi.com/api/jobs/');
        console.log('API response:', response.data);
        setJobs(response.data.results || []);  // Ensure results is an array
        setLoading(false);
      } catch (error) {
        console.error('Error fetching job listings:', error);
        setError('Error fetching job listings: ' + error.message);
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const handleApply = (job) => {
    if (!appliedJobs.includes(job.id)) {
      setAppliedJobs([...appliedJobs, job.id]);
      onApply(job);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Job Listings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {jobs.map(job => (
          <div key={job.id} className="bg-white shadow-md rounded-lg p-6">
            <img src={job.company.logo} alt={job.company.name} className="w-16 h-16 mr-4 rounded-full" />
            <h2 className="text-xl font-semibold mb-2">{job.title}</h2>
            <p className="text-gray-600">Company: {job.company.name}</p>
            <p className="text-gray-600">Location: {job.location}</p>
            <p className="text-gray-600">Experience Level: {job.experience_level}</p>
            <p className="text-gray-600">Remote: {job.has_remote ? 'Yes' : 'No'}</p>
            <p className="text-gray-600">Published: {new Date(job.published).toLocaleDateString()}</p>
            <div className='flex gap-8'>
              <a href={job.application_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                View Job
              </a>
              <button 
                className={`px-5 rounded-md shadow ${appliedJobs.includes(job.id) ? 'bg-gray-400' : 'bg-[#7B76F1CC] text-white hover:bg-purple-500'}`}
                onClick={() => handleApply(job)}
                disabled={appliedJobs.includes(job.id)}
              >
                {appliedJobs.includes(job.id) ? 'Applied' : 'Apply'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobListings;
