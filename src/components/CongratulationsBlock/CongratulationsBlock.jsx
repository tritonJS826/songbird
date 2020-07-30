import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import './style.css';

const CongratulationsBlock = ({ resetInitialSongBirdData }) => {
  const onAnotherAttempt = () => {
    resetInitialSongBirdData();
  };
  return (
    <div className="container">
      our congratulations
      <Button
        text="попробовать еще раз"
        onClick={onAnotherAttempt}
      />
    </div>
  );
};

CongratulationsBlock.propTypes = {
  resetInitialSongBirdData: PropTypes.func.isRequired,
};

export default CongratulationsBlock;
