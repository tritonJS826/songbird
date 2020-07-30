import {
  RESET_INITIAL_SONG_BIRD_DATA,
  ADD_SCORE,
  RESET_SCORE,
  INCREASE_LEVEL,
  RESET_LEVEL,
} from '../actions/types/action-types';

const initialSongBirdData = {
  score: 0,
  level: 0,
};

const currentMachineReducer = (state = initialSongBirdData, { type, payload }) => {
  switch (type) {
    case INCREASE_LEVEL:
      return {
        ...state,
        level: state.level + 1,
      };
    case RESET_LEVEL:
      return {
        ...state,
        level: 0,
      };
    case ADD_SCORE:
      return {
        ...state,
        score: state.score + payload,
      };
    case RESET_SCORE:
      return {
        ...state,
        score: 0,
      };
    case RESET_INITIAL_SONG_BIRD_DATA:
      return initialSongBirdData;
    default:
      return state;
  }
};

export default currentMachineReducer;
