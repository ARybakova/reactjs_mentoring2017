import {
  GET_MOVIE_SUCCESS,
  GET_MOVIE_ERROR,
  GET_MOVIES_WITH_CO_SUCCESS,
  GET_MOVIES_WITH_CO_ERROR
} from '../constants/ActionTypes.js';

const initialState = {
  movie: {},
  results: []
};

export function movie(state = initialState, action) {
  switch (action.type) {

    case GET_MOVIE_SUCCESS:
      return {
        ...state,
        movie: action.payload
      };

    case GET_MOVIE_ERROR:
      return {
        ...state,
        movie: initialState.movie
      };

    case GET_MOVIES_WITH_CO_SUCCESS:
      return {
        ...state,
        results: action.payload
      };

    case GET_MOVIES_WITH_CO_ERROR:
      return {
        ...state,
        results: initialState.results
      };

    default:
      return state;
  }
}