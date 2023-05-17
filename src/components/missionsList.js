import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

function MissionsList({
  mission, description, id,
}) {
  // const statusCheck = () => {
  //   if (status) {
  //     return 'Active Member';
  //   }
  //   return 'Not a Member';
  // };
  // const missionCheck = () => {
  //   if (status) {
  //     return 'Leave Mission';
  //   }
  //   return 'Join Mission';
  // };
  return (
    <tr>
      <td>{mission}</td>
      <td colSpan={10}>{description}</td>
      <td>Active Member</td>
      <td>
        <button type="button" id={id}>
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
