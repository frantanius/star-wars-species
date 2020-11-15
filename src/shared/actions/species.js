import { species_types } from 'shared/constants'

const requestSpecies = (page) => ({
  type: species_types.SPECIES_REQUEST,
  page,
})

const requestSpeciesSucces = (payload) => ({
  type: species_types.SPECIES_SUCCESS,
  payload,
})

const requestSpeciesFailure = (error) => ({
  type: species_types.SPECIES_FAILURE,
  error,
})

export { requestSpecies, requestSpeciesSucces, requestSpeciesFailure }
