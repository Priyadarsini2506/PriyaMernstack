import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import GetStartedButton from './GetStartedButton';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/Projects');
  };

  return (
    <div className="home" style={{ backgroundImage: `url('https://wallpaperaccess.com/full/2594920.jpg')` }}>
      <Navbar />
      <div className="logo-section">
        <img src="https://tse2.mm.bing.net/th?id=OIP.kq1U56gHIRHjWHdo8iepIAAAAA&pid=Api&P=0&h=180" alt="Logo" className="logo" />
      </div>
      <div className="content">
        <h2>Welcome to our Decor Blog</h2>
        <GetStartedButton onClick={() => window.location.href = '/services'} />
      </div>
      <div className="card-container">
        <div className="card" onClick={handleCardClick}>
          <img src="https://civilengdis.com/wp-content/uploads/2020/05/e9b6946a937c91bfd9a6c926ab864ad7-scaled-1.jpg" alt="Design 1" />
          <div className="card-content">
            <h3 className="card-title">Modern Living Room</h3>
            <p className="card-description">Explore our latest living room designs.</p>
          </div>
        </div>
        <div className="card" onClick={handleCardClick}>
          <img src="https://homebnc.com/homeimg/2016/02/10-the-espresso-elegance-modern-kitchen-homebnc.jpg" alt="Design 2" />
          <div className="card-content">
            <h3 className="card-title">Luxury Bedroom</h3>
            <p className="card-description">Discover luxurious bedroom ideas.</p>
          </div>
        </div>
        <div className="card" onClick={handleCardClick}>
          <img src="https://www.architectureartdesigns.com/wp-content/uploads/2018/05/16-Beautiful-Contemporary-Entry-Hall-Interiors-Designed-To-Give-You-A-Proper-Welcome-16.jpg" alt="Design 3" />
          <div className="card-content">
            <h3 className="card-title">Kitchen Makeover</h3>
            <p className="card-description">Transform your kitchen with our designs.</p>
          </div>
        </div>
      </div>
      <footer className="footer">
        <p>&copy; 2024 Home Decor Blog</p>
      </footer>
    </div>
  );
};

export default Home;
