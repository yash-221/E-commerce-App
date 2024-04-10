import React from 'react';

const pagesData = [
  {
    id: 69,
    business_id: 8,
    business_name: "Kirana Store",
    page_title: "Contact Us",
    seq_no: 2,
    featured: 1,
    description: "", // Add your contact us page description here
    status: 0,
    image: "https://ik.imagekit.io/praveenarbs/api-images/pages/69/16833748619771297.png",
    menu_id: 0,
    menu_name: null,
    project_id: 0,
    project_name: null,
    type: 0,
    type_name: "Page",
    link: null,
    board: null
  }
];

const PageItem = ({ page }) => (
  <div>
    <h2>{page.page_title}</h2>
    <img src={page.image} alt={page.page_title} />
    <p dangerouslySetInnerHTML={{ __html: page.description }} />
  </div>
);

const About = () => (
  <div>
    {pagesData.map((page) => (
      <PageItem key={page.id} page={page} />
    ))}
  </div>
);

export default About;
