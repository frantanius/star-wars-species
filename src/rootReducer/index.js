import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'
import { searchReducer as search } from 'shared/reducers/search'
import { speciesReducer as species } from 'shared/reducers/species'

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    species,
    search,
  })

export default rootReducer
