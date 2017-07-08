
import {SET_GAME_SUGGESTIONS} from '../actions/actions'

const initialState = {
  games: [],
  gameInFocus: -1
};

export default function gameSuggestions(state = initialState, action) {
  switch (action.type) {
    case SET_GAME_SUGGESTIONS:
      return {
        ...state,
        games: action.payload
      };
    default:
      return state;
  }
}
