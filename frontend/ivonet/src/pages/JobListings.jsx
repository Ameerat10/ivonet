import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

const JobListings = ({ onApply }) => {
  const { t } = useTranslation();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [appliedJobs, setAppliedJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('https://thingproxy.freeboard.io/fetch/https://jobdataapi.com/api/jobs/');
        setJobs(response.data.results || []);  // Ensure results is an array
        setLoading(false);
      } catch (error) {
        setError(t('Error fetching job listings') + ': ' + error.message);
        setLoading(false);
      }
    };

    fetchJobs();
  }, [t]);

  const handleApply = (job) => {
    if (!appliedJobs.includes(job.id)) {
      setAppliedJobs([...appliedJobs, job.id]);
      onApply(job);
    }
  };

  if (loading) {
    return <p>{t('Loading...')}</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{t('Job Listings')}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {jobs.map(job => (
          <div key={job.id} className="bg-white shadow-md rounded-lg p-6">
            <img src={job.company.logo} alt={job.company.name} className="w-16 h-16 mr-4 rounded-full" />
            <h2 className="text-xl font-semibold mb-2">{job.title}</h2>
            <p className="text-gray-600">{t('Company')}: {job.company.name}</p>
            <p className="text-gray-600">{t('Location')}: {job.location}</p>
            <p className="text-gray-600">{t('Experience Level')}: {job.experience_level}</p>
            <p className="text-gray-600">{t('Remote')}: {job.has_remote ? t('Yes') : t('No')}</p>
            <p className="text-gray-600">{t('Published')}: {new Date(job.published).toLocaleDateString()}</p>
            <div className='flex gap-8'>
              <a href={job.application_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                {t('View Job')}
              </a>
              <button 
                className={`px-5 rounded-md shadow ${appliedJobs.includes(job.id) ? 'bg-gray-400' : 'bg-[#7B76F1CC] text-white hover:bg-purple-500'}`}
                onClick={() => handleApply(job)}
                disabled={appliedJobs.includes(job.id)}
              >
                {appliedJobs.includes(job.id) ? t('Applied') : t('Apply')}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobListings;
