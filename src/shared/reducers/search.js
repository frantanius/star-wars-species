import { search_types } from 'shared/constants'

const INIT_STATE_SEARCH = {
  isLoadingSearch: false,
  isErrorSearch: false,
  searchResults: [],
}

const searchReducer = (state, { type, searchResults }) => {
  switch (type) {
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
        searchResults,
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

export { INIT_STATE_SEARCH, searchReducer }
