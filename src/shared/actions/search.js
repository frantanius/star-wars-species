import { species_types } from 'shared/constants'

const requestSearchSpecies = () => ({
  type: species_types.SEARCH_REQUEST,
})

const searchSpeciesSucces = (payload) => ({
  type: species_types.SEARCH_SUCCESS,
  payload,
})

const searchSpeciesFailure = (error) => ({
  type: species_types.SEARCH_FAILURE,
  error,
})

export { requestSearchSpecies, searchSpeciesSucces, searchSpeciesFailure }
