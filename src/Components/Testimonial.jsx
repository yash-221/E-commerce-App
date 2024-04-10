import React from 'react';

const Testimonial = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '45px' }}>
      <h2 style={{ color: 'black', fontWeight: 'bold' }}>Testimonials</h2>
      <h4 style={{ color: '#bdbabc', fontWeight: 'bold' }}>
        What our <span style={{ color: '#f131a1' }}>Customers</span> are saying
      </h4>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <div style={{ flex: '25%', textAlign: 'center', margin: '40px' }}>
          <img src="https://firebasestorage.googleapis.com/v0/b/devknus-official-database.appspot.com/o/images%2FScreenshot%202023-07-07%20at%202.20.32%20PM-modified.png?alt=media&token=324ddd80-2b40-422c-9f1c-1c1fa34943fa" style={{ width: '20%' }} />
          <h5 style={{ marginTop: '22px' }}>KAMAL NAYAN UPADHYAY</h5>
          <p>Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>

        </div>
        <div style={{ flex: '25%', textAlign: 'center', margin: '40px' }}>
          <img src="https://www.devknus.com/img/gawri.png" style={{ width: '20%' }} />
          <h5 style={{ marginTop: '22px' }}>S MISHRA</h5>

          <p>Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>

        </div>
        <div style={{ flex: '25%', textAlign: 'center', margin: '40px' }}>
          <img src="https://ecommerce-sk.vercel.app/img/kamal.png" style={{ width: '20%' }} />
          <h5 style={{ marginTop: '22px' }}>XYZ</h5>

          <p>Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>

        </div>
        {/* Add more divs like above for additional images */}
      </div>
    </div>
  );
}

export default Testimonial;
