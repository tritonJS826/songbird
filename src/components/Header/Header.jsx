import React from 'react';
import PropTypes from 'prop-types';
import ProgressBar from '../ProgressBar';

import './header.scss';

const Header = ({ score }) => (
  <div className="header">
    <div className="top-panel">
      <div className="logo">
        Logo
      </div>
      <h5>
        Score:
        <span className="score">{score}</span>
      </h5>
    </div>
    <ProgressBar />
  </div>
);

Header.propTypes = {
  score: PropTypes.number.isRequired,
};

export default Header;
