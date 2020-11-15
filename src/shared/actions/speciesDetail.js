import { species_detail_types } from 'shared/constants'

const requestSpeciesDetail = (id) => ({
  type: species_detail_types.SPECIES_DETAIL_REQUEST,
  id,
})

const requestSpeciesDetailSucces = (payload) => ({
  type: species_detail_types.SPECIES_DETAIL_SUCCESS,
  payload,
})

const requestSpeciesDetailFailure = (error) => ({
  type: species_detail_types.SPECIES_DETAIL_FAILURE,
  error,
})

export {
  requestSpeciesDetail,
  requestSpeciesDetailSucces,
  requestSpeciesDetailFailure,
}
