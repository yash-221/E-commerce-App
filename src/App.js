import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer/Footer';
import Testimonial from './Components/Testimonial';
import Category from './Components/Category'; 
import Login from './Login/Login';
import SignUp from './Login/Signup';
import About from './Components/About';
import Contact from './Components/Contact';

const App = () => {
  const [categoryDetails, setCategoryDetails] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Laptops'); // Set the default selected category to 'Laptops'
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const businessIds = ["105"];
      const categoryDetails = await Promise.all(
        businessIds.map(async (businessId) => {
          return Category(businessId);
        })
      );
      setCategoryDetails(categoryDetails);
    };

    fetchData();
  }, []);

  const handleCategorySelect = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {!isAuthenticated && (
          <Route path="login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        )}
        {!isAuthenticated && (
          <Route path="signup" element={<SignUp setIsAuthenticated={setIsAuthenticated} />} />
        )}
        {isAuthenticated && <Route path="Login" element={<Navigate to="/" />} />}
        {isAuthenticated && <Route path="signup" element={<Navigate to="/" />} />}
      </Routes>

      <div style={{ textAlign: 'center' }}>
        <h1 style={{ margin: '20px 0' }}>Category Details</h1>
      </div>

      <div>
        <div style={{ textAlign: 'center' }}>
          <button style={selectedCategory === 'Laptops' ? { ...buttonStyle, backgroundColor: 'Black' } : buttonStyle} onClick={() => handleCategorySelect('Laptops')}>Laptop</button>
          <button style={buttonStyle} onClick={() => handleCategorySelect('Smartphones')}>Smartphones</button>
          <button style={buttonStyle} onClick={() => handleCategorySelect('bottle')}>Bottles</button>
          <button style={buttonStyle} onClick={() => handleCategorySelect('cars')}>Cars</button>
        </div>
        {categoryDetails.map((details, index) => (
          <div key={index}>
            {details && details.data && details.data.category && details.data.category.length > 0 && (
              <>
                {details.data.category.map((category, i) => (
                  selectedCategory === category.name && (
                    <div key={i} style={{ textAlign: 'center' }}>
                      <h1 style={{ margin: '18px 0' }}>{category.name}</h1>
                      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                        {category.product_details.map((product, productIndex) => (
                          <div key={productIndex} style={{ width: '350px', height: '250px', padding: '2px', display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '38px' }}>
                            {product.product_images.length > 0 && (
                              <img
                                src={product.product_images[0].image}
                                alt={product.img}
                                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                              />
                            )}
                            <h4 style={{ fontWeight: 'bold',margin: '10px 0' }}>{product.name}</h4>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                ))}
              </>
            )}
          </div>
        ))}
      </div>

      <Testimonial />
      <Footer />
    </>
  );
};

const buttonStyle = {
  margin: '0 5px', 
  backgroundColor: 'black',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  padding: '10px 20px',
  cursor: 'pointer',
  fontSize: '20px'
};

export default App;
