import * as types from '../constants/ActionTypes.js';

const API_KEY = '911c79866c8fe4ac9a6b4ea4dcfa9b4a';

export function doSearch(parameter, value) {

  return (dispatch) => {
    if (value) {
      if (parameter === "title") {
        fetch('https://api.themoviedb.org/3/search/movie?api_key=' + API_KEY + '&query=' + value)
          .then((response) => {
            response.json()
              .then((data) => {
                if (data.results && data.results.length > 0) {
                  dispatch({
                    type: types.GET_SEARCH_SUCCESS,
                    payload: data.results
                  })
                } else {
                  dispatch({
                    type: types.GET_SEARCH_ERROR
                  })
                }
              });
          });
      } else if (parameter === "director") {
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=' + API_KEY + '&with_crew=' + value) //value must be TMDb ID. Tarantino = 138
          .then((response) => {
            response.json()
              .then((data) => {
                if (data.results && data.results.length > 0) {
                  dispatch({
                    type: types.GET_SEARCH_SUCCESS,
                    payload: data.results
                  })
                } else {
                  dispatch({
                    type: types.GET_SEARCH_ERROR
                  })
                }
              });
          });
      }
    }
    else {
      dispatch({
        type: types.GET_SEARCH_ERROR
      })
    }
  };
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

  return (dispatch) => {
    fetch('https://api.themoviedb.org/3/search/movie?api_key=' + API_KEY + '&query=' + title)
      .then((response) => {
        response.json()
          .then((data) => {
            if (data.results && data.results.length > 0) {
              let id = data.results[0].id;
              fetch('https://api.themoviedb.org/3/movie/' + id + '?api_key=' + API_KEY)
                .then((response) => {
                  response.json()
                    .then((data) => {
                      if (data && data.id) {
                        dispatch({
                          type: types.GET_MOVIE_SUCCESS,
                          payload: data
                        });
                        let company = data.production_companies[0].id;
                        fetch('https://api.themoviedb.org/3/discover/movie?api_key=' + API_KEY + '&with_companies=' + company)
                          .then((response) => {
                            response.json()
                              .then((data) => {
                                if (data.results && data.results.length > 0) {
                                  dispatch({
                                    type: types.GET_MOVIES_WITH_CO_SUCCESS,
                                    payload: data.results
                                  })
                                } else {
                                  dispatch({
                                    type: types.GET_MOVIES_WITH_CO_ERROR
                                  })
                                }
                              });
                          });
                      } else {
                        dispatch({
                          type: types.GET_MOVIE_ERROR
                        })
                      }
                    });
                });
            } else {
              dispatch({
                type: types.GET_MOVIE_ERROR
              })
            }
          });
      });
  }
}