import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/*
import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Testimonial from './Components/Testimonial';
import CategoryDetails from './Components/CategoryDetails'; // Import your API function
import Category from './Components/Category';

const App = () => {
  const [categoryDetails, setCategoryDetails] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

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
  return (
    <>
      <Navbar />


      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <div>
        <h1>Category Details</h1>
        <ul>
          {categoryDetails.map((details, index) => (
            <li key={index}>{JSON.stringify(details)}</li> // Displaying details as JSON string, modify as needed
          ))}
        </ul>
      </div>


      <Testimonial />

      <Footer />
    </>
  );
}

export default App;
*/