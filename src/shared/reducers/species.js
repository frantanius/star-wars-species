import { species_types } from 'shared/constants'

const INITIAL_STATE = {
  isLoading: false,
  isError: false,
  payload: [],
}

const speciesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
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
        payload: state.payload.concat(action.payload),
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

export default speciesReducer
