import React from 'react';
import './JoinLifegroup.css';
import lg from './images/lg.png';

const JoinLifegroup = () => {
  return (
    <div className="join-lifegroup">
      <img src={lg} alt="PNG" className="png-image"/>
      <div className="join-lifegroup-container">
      <h2>Join a Lifegroup</h2>
      <form>
        <div className="join-group2">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" required />
        </div>
        <div className="join-group2">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required />
        </div>
        <div className="join-group2">
          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required />
        </div>
        <div className="join-group2">
          <label htmlFor="lifegroup">Lifegroup:</label>
          <select id="lifegroup" name="lifegroup" required>
            <option value="">Select a lifegroup</option>
            <option value="Catalyst">Catalyst</option>
            <option value="Wildfire">Wildfire</option>
            <option value="Couples">Couples</option>
            <option value="Kidzlife">Kidzlife</option>
            <option value="Mentors">Mentors</option>
            <option value="Leading Ladies">Leading Ladies</option>
          </select>
        </div>
        <button type="submit">Join</button>
      </form>
    </div>
    </div>
  );
};

export default JoinLifegroup;
