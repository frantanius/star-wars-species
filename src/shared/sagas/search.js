import axios from 'axios'
import { getBaseUrl } from 'shared/utils'
import { takeLatest, call, put, all } from 'redux-saga/effects'
import { searchSucces, searchFailure } from 'shared/actions/search'
import { search_types } from 'shared/constants'

function* searchSpecies({ query }) {
  try {
    const server = yield call(getBaseUrl)
    const url = query ? `${server}?search=${query}` : `${server}`
    const {
      data: { results },
    } = yield call(axios, { url, method: 'GET' })
    yield put(searchSucces(results))
  } catch (error) {
    yield put(searchFailure(error))
  }
}

function* getResultSpecies() {
  yield takeLatest(search_types.SEARCH_REQUEST, searchSpecies)
}

export default function* root() {
  yield all([call(getResultSpecies)])
}
