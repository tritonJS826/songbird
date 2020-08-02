import React from 'react';
import PropTypes from 'prop-types';

import style from './style.module.scss';
import Player from '../Player';

const BirdInformationBlock = ({
  rightBird,
  currentBird,
  broad,
  isReadyForNextLevel,
}) => {
  if (broad) {
    return (
      <div className={style.informationBlock}>
        {currentBird.id && (
          <>
            <img src="" alt="bird" />
            {currentBird.ruName}
            {currentBird.latName}
            <Player
              audio={rightBird}
              isStarted
            />
            {currentBird.description}
          </>
        )}
        {!currentBird.id && (
          <>
            <span>
              Послушайте плеер.Выберите птицу из списка
            </span>
          </>
        )}
      </div>
    );
  }

  return (
    <div className={style.container}>
      {!isReadyForNextLevel && (
        <>
          <img src="" alt="templateBird" />
          <span>******</span>
        </>
      )}
      {isReadyForNextLevel && (
        <>
          <img src="" alt="curentBird" />
          <span>realNameBird</span>
        </>
      )}

      <Player
        audio={currentBird}
        isStarted
      />
    </div>
  );
};

BirdInformationBlock.defaultProps = {
  broad: false,
};

BirdInformationBlock.propTypes = {
  rightBird: PropTypes.objectOf(PropTypes.any).isRequired,
  currentBird: PropTypes.objectOf(PropTypes.any).isRequired,
  broad: PropTypes.bool,
  isReadyForNextLevel: PropTypes.bool.isRequired,
};

export default BirdInformationBlock;
