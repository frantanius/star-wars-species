import { species_types } from 'shared/constants'

const INIT_STATE_SPECIES = {
  isLoading: false,
  isError: false,
  payload: [],
}

const speciesReducer = (state, { type, payload }) => {
  switch (type) {
    case species_types.SPECIES_REQUEST:
      return {
        ...state,
        isError: false,
        isLoading: true,
      }
    case species_types.SPECIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        payload: state.payload.concat(payload),
      }
    case species_types.SPECIES_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      }
    default:
      return state
  }
}

export { INIT_STATE_SPECIES, speciesReducer }
