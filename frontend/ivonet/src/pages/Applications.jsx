import React from 'react';
import { useTranslation } from 'react-i18next';

const Applications = ({ appliedJobs, appliedOpportunities }) => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{t('Applied Opportunities')}</h1>
      {appliedOpportunities.length === 0 ? (
        <p>{t('No opportunities applied for yet.')}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {appliedOpportunities.map(opportunity => (
            <div key={opportunity.id} className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-2">{opportunity.title}</h2>
              <p className="text-gray-600">{t('Category')}: {opportunity.category}</p>
              <p className="text-gray-600">{t('Deadline')}: {new Date(opportunity.deadline).toLocaleDateString()}</p>
              <p className="text-gray-600 mb-4">{opportunity.description}</p>
              <a href={opportunity.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                {t('View Opportunity')}
              </a>
            </div>
          ))}
        </div>
      )}

      <h1 className="text-3xl font-bold mb-4 mt-8">{t('Applied Jobs')}</h1>
      {appliedJobs.length === 0 ? (
        <p>{t('No jobs applied for yet.')}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {appliedJobs.map(job => (
            <div key={job.id} className="bg-white shadow-md rounded-lg p-6">
              <img src={job.company.logo} alt={job.company.name} className="w-16 h-16 mr-4 rounded-full" />
              <h2 className="text-xl font-semibold mb-2">{job.title}</h2>
              <p className="text-gray-600">{t('Company')}: {job.company.name}</p>
              <p className="text-gray-600">{t('Location')}: {job.location}</p>
              <p className="text-gray-600">{t('Experience Level')}: {job.experience_level}</p>
              <p className="text-gray-600">{t('Remote')}: {job.has_remote ? t('Yes') : t('No')}</p>
              <p className="text-gray-600">{t('Published')}: {new Date(job.published).toLocaleDateString()}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Applications;
