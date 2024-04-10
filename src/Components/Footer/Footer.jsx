import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; 


const BusinessDetails = () => {
  const navigate = useNavigate(); 

  const [businessData, setBusinessData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ business_id: 8 }) 
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

  
  const handleAboutClick = () => {
    navigate('/about');   };

  const handleContactClick = () => {
    navigate('/contact');   }

  const handleHomeClick = () => {
    navigate('/Home');  
  };


  return (

    
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '160px', width: '100%', backgroundColor: '#f131a1', color: 'whitesmoke' }}>
      {businessData ? (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ float: 'left', marginRight: '300px',backgroundColor:'white' }}>
            <img src={businessData.data.business[0].image} alt="Business Logo" style={{ width: '70px', height: 'auto' }} />
          </div>
          <div style={{ float: 'right', marginRight: '300px' }}>
            <h2>Business Details</h2>
           
            <p style={{ marginBottom: '5px' }}><FaEnvelope style={{ marginRight: '5px' }} /> {businessData.data.business[0].email}</p>
            <p style={{ marginBottom: '5px' }}><FaPhone style={{ marginRight: '5px' }} /> {businessData.data.business[0].phone}</p>
            <p style={{ marginBottom: '5px' }}><FaMapMarkerAlt style={{ marginRight: '5px' }} /> {businessData.data.business[0].address}</p>
      
      
         </div>
         <div>
         <button onClick={handleHomeClick} style={{ marginRight: '300px', color: 'whitesmoke',fontSize:'20px', backgroundColor: 'transparent', border: 'none', cursor: 'pointer', display: 'block',textDecoration:'underline' }}>Home</button>
            <button onClick={handleAboutClick} style={{ color: 'whitesmoke', backgroundColor: 'transparent',fontSize:'20px', border: 'none', cursor: 'pointer', display: 'block' ,textDecoration:'underline' }}>About</button>
            <button onClick={handleContactClick} style={{ color: 'whitesmoke', backgroundColor: 'transparent',fontSize:'20px', border: 'none', cursor: 'pointer', display: 'block',textDecoration:'underline' }}>Contact</button>
     
         </div>
        </div>
        
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BusinessDetails;
