import React from 'react';
import PropTypes from 'prop-types';

import birdsCategories from '../../constants/birdsCategories';
import './ProgressBar.css';

const ProgressBar = ({ level }) => {
  const arrCategory = birdsCategories.map(({ id, name, categoryNumber }) => (
    <li
      className={categoryNumber <= +level ? 'list marked' : `list ${id}`}
      key={id}
    >
      <div>{name}</div>
    </li>
  ));

  return (
    <ul className="progressBar">
      {arrCategory}
    </ul>
  );
};

ProgressBar.propTypes = {
  level: PropTypes.number.isRequired,
};

export default ProgressBar;
