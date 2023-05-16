import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../imgs/planet1.png';

export const Navbar = () => (
  <div className="nav">
    <div className="container nav-container">
      <div className="logo">
        <div><img src={logo} alt="logo" /></div>
        <h1>Space Traveler&apos;s Hub</h1>
      </div>
      <div className="links">
        <Link to="/">Rockets</Link>
        <Link to="/Missions">Missions</Link>
        <div>
          <hr />
        </div>
        <Link to="/MyProfile">My Profile</Link>
      </div>
    </div>
  </div>
);

export default Navbar;
