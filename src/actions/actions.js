import * as types from '../constants/ActionTypes';

const API_KEY = '911c79866c8fe4ac9a6b4ea4dcfa9b4a';

export function doSearch(parameter, value) {

  return async (dispatch) => {
    if (value) {
      let response;

      if (parameter === "title") {
        response = await fetch('https://api.themoviedb.org/3/search/movie?api_key=' + API_KEY + '&query=' + value);
      } else if (parameter === "director") {
        response = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=' + API_KEY + '&with_crew=' + value); //value must be TMDb ID. Tarantino = 138
      } else {
        dispatch({
          type: types.GET_SEARCH_ERROR
        })
      }
      const searchData = await response.json();
      if (searchData.results && searchData.results.length > 0) {
        dispatch({
          type: types.GET_SEARCH_SUCCESS,
          payload: searchData.results
        })
      } else {
        dispatch({
          type: types.GET_SEARCH_ERROR
        })
      }
    }
  }
}

export function setParameter(parameter) {
  return {
    type: types.SET_PARAMETER,
    payload: parameter
  };
}

export function setValue(value) {
  return {
    type: types.SET_VALUE,
    payload: value
  };
}

export function setSortMethod(sortMethod) {
  return {
    type: types.SET_SORT_METHOD,
    payload: sortMethod
  };
}

export function sortResults(results) {
  return {
    type: types.SORT_RESULTS,
    payload: results
  };
}

export function getMovie(title) {

  return async (dispatch) => {

    let response = await fetch('https://api.themoviedb.org/3/search/movie?api_key=' + API_KEY + '&query=' + title);
    const movieDataShort = await response.json();

    if (movieDataShort.results && movieDataShort.results.length > 0) {
      let id = movieDataShort.results[0].id;
      response = await fetch('https://api.themoviedb.org/3/movie/' + id + '?api_key=' + API_KEY);
      const movieDataFull = await response.json();

      if (movieDataFull && movieDataFull.id) {
        dispatch({
          type: types.GET_MOVIE_SUCCESS,
          payload: movieDataFull
        });
        let company = movieDataFull.production_companies[0].id;
        response = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=' + API_KEY + '&with_companies=' + company);
        const moviesWithCo = await response.json();

        if (moviesWithCo.results && moviesWithCo.results.length > 0) {
          dispatch({
            type: types.GET_MOVIES_WITH_CO_SUCCESS,
            payload: moviesWithCo.results
          })
        } else {
          dispatch({
            type: types.GET_MOVIES_WITH_CO_ERROR
          })
        }
      } else {
        dispatch({
          type: types.GET_MOVIE_ERROR
        })
      }
    } else {
      dispatch({
        type: types.GET_MOVIE_ERROR
      })
    }
  }
}