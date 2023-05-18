import React from 'react';
import { useSelector } from 'react-redux';
import styles from './MyProfile.module.css';

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
        ) : (<p>Empty rocket reservation!</p>)}
      </div>
      <section>
        <h2>My Dragons</h2>
        <table className={styles.table}>
          {reservedDragons.map((item) => (
            <tr key={item.id}><td className={styles.list}>{item.name}</td></tr>
          ))}
        </table>
      </section>
    </div>
  );
};

export default MyProfile;
