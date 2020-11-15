import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'
import { speciesReducer as species } from 'shared/reducers/species'
import { speciesDetailReducer as selectedSpecies } from 'shared/reducers/speciesDetail'

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    species,
    selectedSpecies,
  })

export default rootReducer
