import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Button = ({
  className,
  text,
  onClick,
  pressed,
  isWorking,
  dataId,
}) => (
  <button
    className={`${className} ${pressed ? 'pressed' : ''}`}
    type="button"
    onClick={isWorking ? onClick : () => {}}
    data-id={dataId}
  >
    {text}
  </button>
);

Button.defaultProps = {
  pressed: false,
  className: 'button',
  onClick: () => {},
  isWorking: true,
  dataId: '',
};

Button.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
  pressed: PropTypes.bool,
  onClick: PropTypes.func,
  isWorking: PropTypes.bool,
  dataId: PropTypes.string,
};

export default Button;
