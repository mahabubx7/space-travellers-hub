import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const rockets = useSelector((state) => state.rockets);
  const data = rockets.data.filter((rocket) => rocket.reserved === true);

  return (
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
        {data.length > 0 ? (
          <ul className="profile-list">
            {data.map((rocket) => <li key={rocket.id}>{rocket.name}</li>)}
          </ul>
        ) : (<p>Empty rocket reservation!</p>)}
      </div>
    </div>
  );
};

export default MyProfile;
