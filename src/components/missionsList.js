import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { join } from '../redux/slices/missions/MissionsSlice';

function MissionsList({ mission, description, id }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(join(id));
  };
  return (
    <tr>
      <td>{mission}</td>
      <td colSpan={4}>{description}</td>
      <td colSpan={4} className="member">
        Active Member
      </td>
      <td colSpan={6}>
        <button type="button" onClick={() => handleClick()}>
          Join Mission
        </button>
      </td>
    </tr>
  );
}

MissionsList.propTypes = {
  mission: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default MissionsList;
