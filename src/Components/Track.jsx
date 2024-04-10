import React from 'react';

const Track = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        
            <div style={{ flex: 1, backgroundColor: '#f5ebf1', padding: '20px', borderRadius: '5px', marginRight: '10px'}}>
            <svg
    className="text-pink-600 w-12 h-12 mb-3 inline-block mx-auto" // Added mx-auto class for horizontal centering
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="#f131a1" 
    height="50px" 
    width="390px" // Set width to 50px
>
    <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
        style={{
            stroke: '#f131a1', // Change stroke color to #f131a1
            strokeWidth: 1.2,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
        }}
    />
</svg>

                <div style={{ textAlign: 'center' }}>
                    <h5>Premium Tshirts</h5>
                    <p>Our T-Shirts are 100% made of cotton.</p>
                </div>
            </div>

            {/* Middle */}
            <div style={{ flex: 1, backgroundColor: '#f5ebf1', padding: '10px', borderRadius: '5px', marginRight: '10px' }}>
                <svg
                    className="text-pink-600 w-12 h-12 mb-3 inline-block"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#f131a1" // Change stroke color to #f131a1
                    height="50px" // Set height to 50px
                    width="390px" // Set width to 50px
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                        style={{
                            stroke: '#f131a1', // Change stroke color to #f131a1
                            strokeWidth: 1.2,
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                        }}
                    />
                </svg>
                <div style={{ textAlign: 'center' }}>
                    <h5 className="title-font font-medium text-lg text-gray-900">Premium Tshirts</h5>
                    <p className="leading-relaxed">Our T-Shirts are 100% made of cotton.</p>
                </div>

            </div>

            {/* Right side */}
            <div style={{ flex: 1, backgroundColor: '#f5ebf1', padding: '10px', borderRadius: '20px' }}>
                <svg
                    className="text-black-600 w-12 h-12 mb-3 inline-block"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#f131a1" // Change stroke color to #f131a1
                    height="50px" // Set height to 50px
                    width="390px" // Set width to 50px
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                        style={{
                            stroke: '#f131a1', // Change stroke color to #f131a1
                            strokeWidth: 1.2,
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                        }}
                    />
                </svg>
                <div style={{ textAlign: 'center' }}>
                    <h5 className="title-font font-medium text-lg text-gray-900">Premium Tshirts</h5>
                    <p className="leading-relaxed">Our T-Shirts are 100% made of cotton.</p>
                </div>

            </div>
        </div>
    );
};

export default Track;
