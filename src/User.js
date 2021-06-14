import React from 'react';
import PropTypes from 'prop-types';

const User = (props) => {

  return (
  	<li className = "User" >
    <p>Username: {props.user.username}</p>
	<p>Number of Games Played: {props.showGamesPlayed ? props.showGamesPlayed:'*'}</p>
	</li>
  );
};

User.propTypes = {
	showGamesPlayed: PropTypes.bool.isRequired,
  	user: PropTypes.bool.isRequired,
};

export default User;