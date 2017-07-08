export const SET_GAME_SUGGESTIONS = 'SET_GAME_SUGGESTIONS';
export const SET_GAME_IN_FOCUS = 'SET_GAME_IN_FOCUS';

export function setGameSuggestions(games) {
  return {
    type: SET_GAME_SUGGESTIONS,
    payload: games
  }
}
