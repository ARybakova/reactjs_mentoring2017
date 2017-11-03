import { combineReducers } from 'redux'
import { search } from './search'
import { movie } from './movie'

export const reducer = combineReducers({
  search,
  movie
});