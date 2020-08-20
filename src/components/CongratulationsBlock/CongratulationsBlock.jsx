import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import './style.css';
import playAudio from '../../helpers/playAudio';

const CongratulationsBlock = ({ resetInitialSongBirdData, score }) => {
  const onAnotherAttempt = () => {
    resetInitialSongBirdData();
  };

  useEffect(() => {
    if (score === 30) {
      playAudio('weAreTheChampions');
    }
  }, []);

  if (score === 30) {
    return (
      <div className="container">
        {console.log('играет музыка...')}
        <h1>!!!Поздравляем c абсолютной победой!!!</h1>
        <h3>
          ВЫ НАБРАЛИ МАКСИМАЛЬНОЕ КОЛИЧЕСТВО ОЧКОВ!!!!!
          30 из 30!!!
          ЭТО НЕВЕРОЯТНО!!!
        </h3>

        <Button text="попробовать еще раз" onClick={onAnotherAttempt} />
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Поздравляем!</h1>
      <h3>
        Вы прошли викторину и набрали
        {score}
        {' '}
        из 30 возможных баллов
      </h3>

      <Button text="попробовать еще раз" onClick={onAnotherAttempt} />
    </div>
  );
};

CongratulationsBlock.propTypes = {
  resetInitialSongBirdData: PropTypes.func.isRequired,
  score: PropTypes.number.isRequired,
};

export default CongratulationsBlock;
