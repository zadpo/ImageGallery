import React from 'react';
import './SocialLinks.css';
import Facebook from './images/Facebook.png';
import Instagram from './images/Instagram.png';








const SocialLinks = () => {
  return (
    <div className="container1">
    <div className="social-links">
      <a href="https://www.facebook.com/hislifemetro">
        <img src={Facebook} alt="Facebook Icon" />
      </a>
      <div className="ig">
        <a href="https://www.instagram.com/hislifemetro">
        <img src={Instagram} alt="Instagram Icon" />
        </a>
      </div>
    </div>
    </div>
  );
};

export default SocialLinks;