import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import Song from './Song';
import Play from './Play';
import Pause from './Pause';
import Bar from './Bar';

import useAudioPlayer from './useAudioPlayer';

import './style.css';
import './style.scss';

const AudioPlayer = ({
  audio, songName, songArtist, description, img,
}) => {
  const audioRef = useRef(null);

  const {
    curTime, duration, playing, setPlaying, setClickedTime,
  } = useAudioPlayer(
    audioRef.current,
    audio,
  );

  return (
    <>
      <div className="player">
        <audio ref={audioRef}>
          <source src={audio} />
          <track src="captions_en.vtt" kind="captions" srcLang="en" label="english_captions" />
          Your browser does not support the
          <code>audio</code>
          element.
        </audio>
        <Song songName={songName} songArtist={songArtist} img={img} />

        <div className="controls">
          {playing ? (
            <Pause handleClick={() => setPlaying(false)} />
          ) : (
            <Play handleClick={() => setPlaying(true)} />
          )}
          <Bar
            curTime={curTime}
            duration={duration}
            onTimeUpdate={(time) => setClickedTime(time)}
          />
        </div>
        <div>{description}</div>
      </div>
    </>
  );
};

AudioPlayer.defaultProps = {
  audio:
    'https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3',
  songName: '',
  songArtist: '',
  description: '',
  img: '',
};

AudioPlayer.propTypes = {
  audio: PropTypes.string,
  songName: PropTypes.string,
  songArtist: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string,
};

export default AudioPlayer;
