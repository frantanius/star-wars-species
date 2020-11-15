import { search_types } from 'shared/constants'

const searchRequest = (query) => ({
  type: search_types.SEARCH_REQUEST,
  query,
})

const searchSucces = (payload) => ({
  type: search_types.SEARCH_SUCCESS,
  payload,
})

const searchFailure = (error) => ({
  type: search_types.SEARCH_FAILURE,
  error,
})

export { searchRequest, searchSucces, searchFailure }
