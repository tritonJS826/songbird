import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../components/Button';
import Header from '../../components/Header';
import BirdInformationBlock from '../../components/BirdInformationBlock';
import BirdAnswerBlock from '../../components/BirdAnswerBlock';
import CongratulationsBlock from '../../components/CongratulationsBlock';
import './style.css';

function SongBirdPage({
  increaseLevel,
  setIsReadyForNextLevel,
  isReadyForNextLevel,
  resetAdditionalScore,
  isCongratulationsShowed,
}) {
  const onNextLevelButton = () => {
    setIsReadyForNextLevel(false);
    resetAdditionalScore();
    increaseLevel();
  };
  if (isCongratulationsShowed) {
    return (
      <>
        <Header />
        <CongratulationsBlock />
      </>
    );
  }

  return (
    <div className="container">
      <Header />
      <BirdInformationBlock />
      <div className="gorizontalDiv">
        <BirdAnswerBlock />
        <BirdInformationBlock broad />
      </div>
      <Button
        className="nextLevelButton"
        text="Next Level"
        onClick={onNextLevelButton}
        pressed={!isReadyForNextLevel}
        isWorking={isReadyForNextLevel}
      />
    </div>
  );
}

SongBirdPage.propTypes = {
  increaseLevel: PropTypes.func.isRequired,
  setIsReadyForNextLevel: PropTypes.func.isRequired,
  isReadyForNextLevel: PropTypes.bool.isRequired,
  resetAdditionalScore: PropTypes.func.isRequired,
  isCongratulationsShowed: PropTypes.bool.isRequired,
};

export default SongBirdPage;
