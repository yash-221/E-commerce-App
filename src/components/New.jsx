import React from 'react';

const pagesData = [
  {
    id: 203,
    business_id: 8,
    business_name: "Kirana Store",
    page_title: "yoru",
    seq_no: 1,
    featured: 1,
    description: "<p>yoru</p>",
    status: 0,
    image: "https://ik.imagekit.io/praveenarbs/api-images/pages/203/16946902545784966.webp",
    menu_id: 0,
    menu_name: null,
    project_id: 0,
    project_name: null,
    type: 0,
    type_name: "Page",
    link: null,
    board: null
  },
  {
    id: 93,
    business_id: 8,
    business_name: "Kirana Store",
    page_title: "sdfsf",
    seq_no: 0,
    featured: 1,
    description: "",
    status: 0,
    image: "https://ik.imagekit.io/praveenarbs/api-images/pages/93/16849913274868645.png",
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

const New = () => (
  <div>
    {pagesData.map((page) => (
      <PageItem key={page.id} page={page} />
    ))}
  </div>
);

export default New;
