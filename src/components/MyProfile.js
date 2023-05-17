import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const rockets = useSelector((state) => state.rockets);
  const data = rockets.data.filter((rocket) => rocket.reserved === true);
  const { value } = useSelector((state) => state.dragons);
  const reservedDragons = value.filter((item) => item.reserved);

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
        ) : (<p className="profile-list">Empty rocket reservation!</p>)}
      </div>
      <div className="dragons info-card">
        <h3>my dragons</h3>
        {reservedDragons.length > 0 ? (
          <ul className="profile-list">
            {reservedDragons.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        ) : (<p className="profile-list">Empty dragon reservation!</p>)}
      </div>
    </div>
  );
};

export default MyProfile;
