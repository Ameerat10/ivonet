import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

const Opportunities = ({ onApply }) => {
  const { t } = useTranslation();
  const [opportunities, setOpportunities] = useState([]);
  const [appliedOpportunities, setAppliedOpportunities] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOpportunities = async () => {
      const token = localStorage.getItem('access_token');

      if (!token) {
        setError(t('No access token found'));
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get('http://127.0.0.1:8000/api/opportunities/',
          {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setOpportunities(response.data);
      } catch (error) {
        setError(t('Error fetching opportunities') + ': ' + error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOpportunities();
  }, [t]);

  const handleApply = (opportunity) => {
    if (!appliedOpportunities.includes(opportunity.id)) {
      setAppliedOpportunities([...appliedOpportunities, opportunity.id]);
      onApply(opportunity); // Pass the applied opportunity to the parent component
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
      <h1 className="text-3xl font-bold mb-4">{t('Opportunities')}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {opportunities.map(opportunity => (
          <div key={opportunity.id} className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">{opportunity.title}</h2>
            <p className="text-gray-600">{t('Category')}: {opportunity.category}</p>
            <p className="text-gray-600">{t('Deadline')}: {new Date(opportunity.deadline).toLocaleDateString()}</p>
            <p className="text-gray-600 mb-4">{opportunity.description}</p>
            <div className="flex gap-8">
              <a href={opportunity.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                {t('View Opportunity')}
              </a>
              <button
                className={`bg-${appliedOpportunities.includes(opportunity.id) ? 'gray-500' : '[#7B76F1CC]'} text-gray-700 px-5 rounded-md shadow hover:bg-purple-500`}
                onClick={() => handleApply(opportunity)}
                disabled={appliedOpportunities.includes(opportunity.id)}
              >
                {appliedOpportunities.includes(opportunity.id) ? t('Applied') : t('Apply')}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Opportunities;
