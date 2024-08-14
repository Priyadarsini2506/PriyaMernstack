import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import './Services.css';
import Navbar from './Navbar';


const services = [
  { title: 'Living room', details: 'Details about interior work...', img: 'https://tse3.mm.bing.net/th?id=OIP.rGDvgMEMhi7xl-HSHTSJ6AHaFj&pid=Api&P=0&h=180', route: '/projects/living-room' },
  { title: 'Bedroom', details: 'Details about retail design...', img: 'https://evolveindia.co/wp-content/uploads/2021/07/3_Go-Bold-Or-Go-Home-Modern-Bedroom-Interior-Design.jpg', route: '/projects/bedroom' },
  { title: 'Exterior Work', details: 'Details about exterior work...', img: 'https://tse1.mm.bing.net/th?id=OIP.OJQnaY8DVC8FUAhAtOQkPQHaE8&pid=Api&P=0&h=180', route: '/projects/exterior-work' },
  { title: 'Bathroom design', details: 'Details about consultation...', img: 'https://tse2.mm.bing.net/th?id=OIP.LFP7VC6XxPPYXFjUhWXNWAAAAA&pid=Api&P=0&h=180', route: '/projects/bathroom-design' },

];

const Services = () => {
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="services">
      <Navbar/>
      <h2>Our Services</h2>
      <Slider {...settings}>
        {services.map((service, index) => (
          <Link to={service.route} key={index} className="service-card-link">
            <div className="service-card">
              <img src={service.img} alt={service.title} className="service-image" />
              <h3>{service.title}</h3>
              <p>{service.details}</p>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default Services;
