import React from 'react';

const Offer = () => {
  const offerData = {
    id: 139,
    business_id: 39,
    business_name: 'Demo Restaurant',
    page_title: '10% Off',
    seq_no: 0,
    featured: 1,
    description: '<p>sfsdfgfgdfgf</p>',
    status: 1,
    image: 'https://ik.imagekit.io/praveenarbs/api-images/pages/139/16903561218527794.jpg',
    menu_id: 0,
    menu_name: null,
    project_id: 0,
    project_name: null,
    type: 0,
    type_name: 'Page',
    link: null,
    board: null,
  };

  return (
    <div key={offerData.id}>
      <h2>{offerData.page_title}</h2>
      <p dangerouslySetInnerHTML={{ __html: offerData.description }}></p>
      {offerData.image && <img src={offerData.image} alt={offerData.page_title} />}
    </div>
  );
};

export default Offer;
