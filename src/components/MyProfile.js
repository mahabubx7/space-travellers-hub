import React from 'react';

export const MyProfile = () => (
  <div className="profile-page">
    <div className="missions info-card">
      <h3>my missions</h3>
      <ul className="profile-list">
        <li>Telstar</li>
        <li>SES</li>
        <li>AsiaSat</li>
        <li>ABS</li>
      </ul>
    </div>
    <div className="rockets info-card">
      <h3>my rockets</h3>
      <ul className="profile-list">
        <li>Falcon 9</li>
        <li>Falcon Heavy</li>
        <li>Starship</li>
      </ul>
    </div>
  </div>
);

export default MyProfile;
