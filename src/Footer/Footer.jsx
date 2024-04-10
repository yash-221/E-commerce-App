import React, { useState, useEffect } from 'react';

const BusinessDetails = () => {
  const [businessData, setBusinessData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ business_id: 39 }) 
        };
      
        const response = await fetch('https://testapi.arbsindia.com/public/api/get-public-business-details-list', requestOptions);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setBusinessData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {businessData ? (
        businessData.map(page => (
          <div key={page.id}>
            <h2>{page.page_title}</h2>
            <p>Description: {page.description}</p>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BusinessDetails;
