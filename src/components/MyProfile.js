import React from 'react';
import { useSelector } from 'react-redux';
import styles from './MyProfile.module.css';

export const MyProfile = () => {
  const { value } = useSelector((state) => state.dragons);
  const reservedDragons = value.filter((item) => item.reserved);

  return (
    <div className="profile-page">
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
  // <div className="profile-page">
  //   <div className="missions info-card">
  //     <h3>my missions</h3>
  //     <ul className="profile-list">
  //       <li>Telstar</li>
  //       <li>SES</li>
  //       <li>AsiaSat</li>
  //       <li>ABS</li>
  //     </ul>
  //   </div>
  //   <div className="rockets info-card">
  //     <h3>my rockets</h3>
  //     <ul className="profile-list">
  //       <li>Falcon 9</li>
  //       <li>Falcon Heavy</li>
  //       <li>Starship</li>
  //     </ul>
  //   </div>
  // </div>
};

export default MyProfile;
