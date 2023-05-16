import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../imgs/planet1.png';

export const Navbar = () => (
  <div className="nav">
    <div className="container nav-container">
      <div className="logo">
        <div><img src={logo} alt="logo" /></div>
        <h1>Space Traveler&apos;s Hub</h1>
      </div>
      <div className="links">
        <NavLink to="/Rocket">Rockets</NavLink>
        <NavLink to="/Dragons">Dragons</NavLink>
        <NavLink to="/Missions">Missions</NavLink>
        <div>
          <hr />
        </div>
        <NavLink to="/MyProfile">My Profile</NavLink>
      </div>
    </div>
  </div>
);

export default Navbar;
