// import React from 'react';
import { useSelector } from 'react-redux';
import MissionsList from './missionsList';

export const Missions = () => {
  const Mission = useSelector((store) => store.missions);
  return (
    <table>
      <tr>
        <th>Mission</th>
        <th colSpan={10}>Description</th>
        <th>Status</th>
        <th>Join/Leave Mission</th>
      </tr>
      {Mission.map((mission) => (
        <MissionsList
          key={mission.mission_id}
          mission={mission.mission_name}
          description={mission.description}
          id={mission.mission_id}
        />
      ))}
    </table>
  );
};
export default Missions;
