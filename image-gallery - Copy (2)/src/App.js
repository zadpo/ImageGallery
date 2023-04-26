import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import ImageGalleryPage from './Pages/ImageGalleryPage';
import JoinLifegroupPage from './Pages/JoinLifegroupPage';
import PrayerRequestPage from './Pages/PrayerRequestPage';

import './App.css';
import SocialLinks from './Components/SocialLinks';


function App() {
  return (
    

    <><Router>
      <nav>
        <Link to="/" className="button">Image Gallery</Link>
        <Link to="/join-lifegroup" className="button">Join Life Group</Link>
        <Link to="/prayer-request" className="button">Prayer Request</Link>
      </nav>
      <Routes>
        <Route exact path="/" element={<ImageGalleryPage />} />
        <Route exact path="/join-lifegroup" element={<JoinLifegroupPage />} />
        <Route exact path="/prayer-request" element={<PrayerRequestPage />} />
      </Routes>

    </Router><SocialLinks className="social-links" /></>
  );
}

export default App;
