import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MissionsList from './missionsList';
import { getMissions } from '../redux/apiSlice';

export const Missions = () => {
  const Mission = useSelector((store) => store.missions);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

  return (
    <table>
      <thead>
        <tr>
          <th>Mission</th>
          <th colSpan={5}>Description</th>
          <th>Status</th>
          <th>Join/Leave</th>
        </tr>
      </thead>
      <tbody>
        {Mission.map((mission) => (
          <MissionsList
            key={mission.id}
            mission={mission.name}
            description={mission.description}
            id={mission.id}
            reserve={mission.reserved}
          />
        ))}
      </tbody>
    </table>
  );
};
export default Missions;
