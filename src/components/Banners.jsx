import React from 'react';

const Banner = ({ image, title }) => (
  <div className="banner">
    <img src={image} alt={title} />
    <h2>{title}</h2>
  </div>
);

const BannerList = ({ banners }) => (
  <div className="banner-list">
    {banners.map(banner => (
      <Banner
        key={banner.id}
        image={banner.image}
        title={banner.banner_title}
      />
    ))}
  </div>
);

// Assuming bannersData is an array of banner objects like the one you provided
const bannersData = [
  {
    id: 95,
    banner_title: "t6",
    image: "https://ik.imagekit.io/praveenarbs/api-images/banner/95/17111813671367569.jpg"
  },
  {
    id: 94,
    banner_title: "t4",
    image: "https://ik.imagekit.io/praveenarbs/api-images/banner/94/1711181352192720.jpg"
  },
  {
    id: 93,
    banner_title: "t2",
    image: "https://ik.imagekit.io/praveenarbs/api-images/banner/93/17111813269171289.jpg"
  },
  {
    id: 92,
    banner_title: "com",
    image: "https://ik.imagekit.io/praveenarbs/api-images/banner/92/17111080057775628.jpg"
  },
  {
    id: 91,
    banner_title: "myntra",
    image: "https://ik.imagekit.io/praveenarbs/api-images/banner/91/17111079907670875.jpg"
  }
];

const App = () => (
  <div className="app">
    <h1>Banners</h1>
    <BannerList banners={bannersData} />
  </div>
);

export default App;
