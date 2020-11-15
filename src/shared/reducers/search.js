import { search_types } from 'shared/constants'

const INITIAL_STATE = {
  isLoadingSearch: false,
  isErrorSearch: false,
  searchResults: [],
}

const searchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case search_types.SEARCH_REQUEST:
      return {
        ...state,
        isErrorSearch: false,
        isLoadingSearch: true,
      }
    case search_types.SEARCH_SUCCESS:
      return {
        ...state,
        isLoadingSearch: false,
        isErrorSearch: false,
        searchResults: action.searchResults,
      }
    case search_types.SEARCH_FAILURE:
      return {
        ...state,
        isLoadingSearch: false,
        isErrorSearch: true,
      }
    default:
      return state
  }
}

export default searchReducer
