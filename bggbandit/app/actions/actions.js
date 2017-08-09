export const SET_GAME_SUGGESTIONS = 'SET_GAME_SUGGESTIONS';
export const SET_GAME_IN_FOCUS = 'SET_GAME_IN_FOCUS';

export function setGameSuggestions(games) {
  return {
    type: SET_GAME_SUGGESTIONS,
    payload: games
  }
}

export function fetchGameSuggestions(username) {
    return (dispatch) => {
        fetch(`http://198.199.117.90:9090/topSuggestions?userName=${username}`)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then((response) => response.json())
            .then((response) => dispatch(setGameSuggestions(
              response
            )))
    };
}
