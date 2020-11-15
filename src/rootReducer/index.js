import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'
import searchReducer from 'shared/reducers/search'
import speciesReducer from 'shared/reducers/species'

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    species: speciesReducer,
    search: searchReducer,
  })

export default rootReducer
