import { createSelector } from 'reselect'
import { species_detail_types } from 'shared/constants'

const INITIAL_STATE = {
  isLoading: false,
  isError: false,
  payload: [],
}

const speciesDetailReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case species_detail_types.SPECIES_DETAIL_REQUEST:
      return {
        ...state,
        isError: false,
        isLoading: true,
      }
    case species_detail_types.SPECIES_DETAIL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        payload,
      }
    case species_detail_types.SPECIES_DETAIL_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      }
    default:
      return state
  }
}

const selectSpecies = (state) => state.selectedSpecies
const speciesDetail = createSelector([selectSpecies], (species) => species)

export { speciesDetailReducer, speciesDetail }
