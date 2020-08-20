import React from 'react';
import PropTypes from 'prop-types';

import style from './style.module.scss';
import AudioPlayer from '../AudioPlayer';

const BirdInformationBlock = ({
  rightBird, currentBird, broad, isReadyForNextLevel,
}) => {
  if (broad) {
    return (
      <div className={style.informationBlock}>
        {currentBird.id && (
          <>
            <AudioPlayer
              audio={currentBird.audio}
              songName={currentBird.ruName}
              songArtist={currentBird.latName}
              img={currentBird.img}
              description={currentBird.description}
              isStarted
            />
          </>
        )}
        {!currentBird.id && (
          <>
            <span>Послушайте плеер.Выберите животное из списка</span>
          </>
        )}
      </div>
    );
  }

  return (
    <div className={style.container}>
      {!isReadyForNextLevel && (
        <>
          <AudioPlayer
            audio={rightBird.audio}
            songName="******"
            songArtist="******"
            img="******"
            isStarted
          />
        </>
      )}
      {isReadyForNextLevel && (
        <>
          <AudioPlayer
            audio={rightBird.audio}
            songName={rightBird.ruName}
            songArtist={rightBird.latName}
            img={rightBird.img}
            isStarted
          />
        </>
      )}
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
