import React from 'react';
import PropTypes from 'prop-types';

import PlayIcon from './play.webp';
import style from './style.module.scss';

const Play = ({ handleClick }) => (
  <button type="button" className="player__button" onClick={handleClick}>
    <img src={PlayIcon} alt="Logo" className={style.playIcon} />
  </button>
);

Play.defaultProps = {
  handleClick: () => {},
};

Play.propTypes = {
  handleClick: PropTypes.func,
};

export default Play;
