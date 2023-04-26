import React from 'react';
import './PrayerRequest.css';


const PrayerRequest = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const requestData = Object.fromEntries(formData.entries());
    const emailBody = `Name: ${requestData.name}\nPrayer Request: ${requestData.prayer}`;
    window.open(`mailto:zadrachcaunca777@gmail.com?subject=New Prayer Request&body=${emailBody}`);
  }
 return (
  <>
  <div className="prayer-request">

  <h2>Prayer Request</h2>
  <form onSubmit={handleSubmit}>
    <div className="form-group1">
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" placeholder="Enter your name" required />
    </div>
    <div className="form-group1">
      <label htmlFor="prayer">Prayer Request:</label>
      <textarea id="prayer" name="prayer" rows="5" placeholder="Enter your prayer request" required></textarea>
    </div>
    <button type="submit">Submit</button>
  </form>
</div> </>
  );
};

export default PrayerRequest;
