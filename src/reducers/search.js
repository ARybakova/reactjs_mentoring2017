import {
  GET_SEARCH_SUCCESS,
  GET_SEARCH_ERROR,
  SET_PARAMETER,
  SET_VALUE,
  SET_SORT_METHOD,
  SORT_RESULTS
} from '../constants/ActionTypes';

const initialState = {
  results: [],
  parameter: "title",
  value: "",
  sortMethod: "sortByRelease"
};

export function search(state = initialState, action) {
  switch (action.type) {

    case GET_SEARCH_SUCCESS:
      return {
        ...state,
        results: action.payload
      };

    case GET_SEARCH_ERROR:
      return {
        ...state,
        results: initialState.results
      };

    case SET_PARAMETER:
      return {
        ...state,
        parameter: action.payload ? action.payload : initialState.parameter
      };

    case SET_VALUE:
      return {
        ...state,
        value: action.payload ? action.payload : initialState.value
      };

    case SET_SORT_METHOD:
      return {
        ...state,
        sortMethod: action.payload
      };

    case SORT_RESULTS:
      return {
        ...state,
        results: (state.sortMethod === "sortByRelease") ?
            action.payload.slice().sort((a,b) => {
              let bDate = new Date(b.release_date);
              let aDate = new Date(a.release_date);
              return bDate - aDate;
        }) :
            action.payload.slice().sort((a,b) => b.vote_average - a.vote_average)
      };

    default:
      return state;
  }
}