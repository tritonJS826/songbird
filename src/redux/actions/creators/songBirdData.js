import {
  RESET_INITIAL_SONG_BIRD_DATA,
  ADD_SCORE,
  RESET_SCORE,
  INCREASE_LEVEL,
  RESET_LEVEL,
} from '../types/action-types';

export const addScore = (scores) => ({
  type: ADD_SCORE,
  payload: scores,
});

export const resetScore = () => ({
  type: RESET_SCORE,
});

export const increaseLevel = () => ({
  type: INCREASE_LEVEL,
});

export const resetLevel = () => ({
  type: RESET_LEVEL,
});

export const resetInitialSongBirdData = () => ({
  type: RESET_INITIAL_SONG_BIRD_DATA,
});
