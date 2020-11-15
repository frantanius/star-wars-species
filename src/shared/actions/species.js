import { species_types } from 'shared/constants'

const requestSpecies = () => ({
  type: species_types.SPECIES_REQUEST,
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
