import { useState, useLayoutEffect } from 'react';

const useAudioPlayer = (audioElement, audio) => {
  const [duration, setDuration] = useState();
  const [curTime, setCurTime] = useState();
  const [playing, setPlaying] = useState(false);
  const [clickedTime, setClickedTime] = useState();

  useLayoutEffect(() => {
    if (audioElement === null) return undefined;
    audioElement.pause();
    audioElement.load();
    // eslint-disable-next-line no-param-reassign
    audioElement.currentTime = 0;
    audioElement.pause();
    return undefined;
  }, [audio]);

  useLayoutEffect(() => {
    if (audioElement === null) {
      setDuration(0);
      setCurTime(0);
      return undefined;
    }

    // state setters wrappers
    const setAudioData = () => {
      setDuration(audioElement.duration);
      setCurTime(audioElement.currentTime);
    };

    const setAudioTime = () => setCurTime(audioElement.currentTime);

    // DOM listeners: update React state on DOM events
    audioElement.addEventListener('loadeddata', setAudioData);

    audioElement.addEventListener('timeupdate', setAudioTime);

    // React state listeners: update DOM on React state changes
    if (playing) {
      audioElement.play();
    } else {
      audioElement.pause();
    }

    if (clickedTime && clickedTime !== curTime) {
      // eslint-disable-next-line no-param-reassign
      audioElement.currentTime = clickedTime;
      setClickedTime(null);
    }

    // effect cleanup
    return () => {
      audioElement.removeEventListener('loadeddata', setAudioData);
      audioElement.removeEventListener('timeupdate', setAudioTime);
      return null;
    };
  }, [playing, clickedTime, curTime, audio]);

  return {
    curTime,
    duration,
    playing,
    setPlaying,
    setClickedTime,
  };
};

export default useAudioPlayer;
