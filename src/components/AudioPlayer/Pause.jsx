import React from 'react';
import PropTypes from 'prop-types';

import PauseIcon from './pause.png';
import style from './style.module.scss';

const Play = ({ handleClick }) => (
  <button type="button" className="player__button" onClick={() => handleClick()}>
    <img src={PauseIcon} alt="Logo" className={style.playIcon} />
  </button>
);

Play.defaultProps = {
  handleClick: () => {},
};

Play.propTypes = {
  handleClick: PropTypes.func,
};

export default Play;
