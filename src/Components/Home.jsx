import React, { useEffect, useState } from 'react';


// Banner component
const Home = () => {
    const [banners, setBanners] = useState([]);
    const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

    const apiCall = async () => {
        try {
            const url = 'https://testapi.arbsindia.com/public/api/get-public-banner-list';
            const data = { business_id: 39 };

            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const responseData = await response.json();
            setBanners(responseData.data);
            console.log(responseData.data[0].image); // do something with the response data
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    };

    useEffect(() => {
        apiCall();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBannerIndex((prevIndex) => (prevIndex === banners.length - 1 ? 0 : prevIndex + 1));
        }, 3000); // Change the interval time as needed (in milliseconds)

        return () => clearInterval(interval);
    }, [banners]);

    return (
        <div>
            {/* Include the Navbar component */}
            {banners.map((banner, index) => (
                <img
                    key={banner.id}
                    src={banner.image}
                    style={{ width: '1352px', height: '350px', marginTop: '10px', display: index === currentBannerIndex ? 'block' : 'none' }}
                    alt={`Banner ${index}`}
                />
            ))}
        </div>
    );
};

export default Home;
