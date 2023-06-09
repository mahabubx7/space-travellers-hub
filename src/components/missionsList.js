import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { join, leave } from '../redux/slices/missions/MissionsSlice';

function MissionsList({
  mission, description, id, reserve,
}) {
  const dispatch = useDispatch();
  const handleJoin = () => { dispatch(join(id)); };
  const handleLeave = () => { dispatch(leave(id)); };
  return (
    <tr>
      <td>{mission}</td>
      <td colSpan={4} className="description">
        {description}
        {' '}
      </td>
      <td colSpan={4} className="member">
        { reserve ? <div className="active_member">Active Member</div> : <div className="non_member">Not a Member</div> }
      </td>
      <td colSpan={6}>
        {reserve && (
          <button
            type="button"
            className="member btn_leave"
            onClick={() => handleLeave()}
          >
            Leave Mission
          </button>
        )}
        {!reserve && (
          <button
            type="button"
            className="member btn_join"
            onClick={() => handleJoin()}
          >
            Join Mission
          </button>
        )}
      </td>
    </tr>
  );
}

MissionsList.propTypes = {
  mission: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  reserve: PropTypes.bool.isRequired,
};

export default MissionsList;
