import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Opportunities = () => {
  const [opportunities, setOpportunities] = useState([]);
  const [appliedOpportunities, setAppliedOpportunities] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOpportunities = async () => {
      const token = localStorage.getItem('access_token');

      if (!token) {
        setError('No access token found');
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get('http://127.0.0.1:8000/api/opportunities/', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setOpportunities(response.data);
      } catch (error) {
        setError('Error fetching opportunities: ' + error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOpportunities();
  }, []);

  const handleApply = (opportunity) => {
    if (!appliedOpportunities.includes(opportunity.id)) {
      setAppliedOpportunities([...appliedOpportunities, opportunity.id]);
      // Logic to save the application on the server can be added here
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
      <h1 className="text-3xl font-bold mb-4">Opportunities</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {opportunities.map(opportunity => (
          <div key={opportunity.id} className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">{opportunity.title}</h2>
            <p className="text-gray-600">Category: {opportunity.category}</p>
            <p className="text-gray-600">Deadline: {new Date(opportunity.deadline).toLocaleDateString()}</p>
            <p className="text-gray-600 mb-4">{opportunity.description}</p>
            <div className="flex gap-8">
              <a href={opportunity.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                View Opportunity
              </a>
              <button
                className={`bg-${appliedOpportunities.includes(opportunity.id) ? 'gray' : '[#7B76F1CC]'} text-white px-5 rounded-md shadow hover:bg-purple-500`}
                onClick={() => handleApply(opportunity)}
                disabled={appliedOpportunities.includes(opportunity.id)}
              >
                {appliedOpportunities.includes(opportunity.id) ? 'Applied' : 'Apply'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Opportunities;

// // src/components/Opportunities.js
// import React, { useState, useEffect } from 'react';
// import api from '../api'; // import the axios instance

// const Opportunities = () => {
//   const [opportunities, setOpportunities] = useState([]);
//   const [appliedOpportunities, setAppliedOpportunities] = useState([]);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchOpportunities = async () => {
//       try {
//         const response = await api.get('/opportunities/');
//         setOpportunities(response.data);
//       } catch (error) {
//         setError('Error fetching opportunities: ' + error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchOpportunities();
//   }, []);

//   const handleApply = (opportunity) => {
//     if (!appliedOpportunities.includes(opportunity.id)) {
//       setAppliedOpportunities([...appliedOpportunities, opportunity.id]);
//       // Logic to save the application on the server can be added here
//     }
//   };

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>{error}</p>;
//   }

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-4">Opportunities</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {opportunities.map(opportunity => (
//           <div key={opportunity.id} className="bg-white shadow-md rounded-lg p-6">
//             <h2 className="text-xl font-semibold mb-2">{opportunity.title}</h2>
//             <p className="text-gray-600">Category: {opportunity.category}</p>
//             <p className="text-gray-600">Deadline: {new Date(opportunity.deadline).toLocaleDateString()}</p>
//             <p className="text-gray-600 mb-4">{opportunity.description}</p>
//             <div className="flex gap-8">
//               <a href={opportunity.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
//                 View Opportunity
//               </a>
//               <button
//                 className={`bg-${appliedOpportunities.includes(opportunity.id) ? 'gray' : '[#7B76F1CC]'} text-white px-5 rounded-md shadow hover:bg-purple-500`}
//                 onClick={() => handleApply(opportunity)}
//                 disabled={appliedOpportunities.includes(opportunity.id)}
//               >
//                 {appliedOpportunities.includes(opportunity.id) ? 'Applied' : 'Apply'}
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Opportunities;
