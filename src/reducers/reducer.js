import { combineReducers } from 'redux'
import { search } from './search.js'
import { movie } from './movie.js'

export const reducer = combineReducers({
  search,
  movie
});