import React from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames';
import ProgressBar from '../ProgressBar';

// import Logo from '../../img/Logo.png';
import style from './Header.module.scss';

const Header = ({ score }) => (
  <div className={style.header}>
    <div className={style.topPanel}>
      {/* <img src={Logo} alt="Logo" className={style.logo} /> */}
      <span className={style.logo}>AnimalSound</span>
      <span className={style.score}>
        Score:
        {score}
      </span>
    </div>
    <ProgressBar />
  </div>
);

Header.propTypes = {
  score: PropTypes.number.isRequired,
};

export default Header;
