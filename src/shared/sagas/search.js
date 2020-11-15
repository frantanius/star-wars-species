import axios from 'axios'
import { getBaseUrl } from 'shared/utils'
import { takeLatest, call, put, all, select } from 'redux-saga/effects'
import { searchSucces, searchFailure } from 'shared/actions/search'
import { search_types } from 'shared/constants'

function* searchSpecies({ query }) {
  try {
    const {
      species: { payload },
    } = yield select()

    let searchPreviousState = payload.filter((species) =>
      species.name.toLowerCase().includes(query),
    )

    let isExist = searchPreviousState.length !== 0
    // first check previous state species if exsisting
    if (isExist) {
      console.log('state previous exists')
      yield put(searchSucces(searchPreviousState))
    } else {
      console.log('state previous does not exist')
      const server = yield call(getBaseUrl)
      const url = `${server}?search=${query}`
      const {
        data: { results },
      } = yield call(axios, { url, method: 'GET' })
      yield put(searchSucces(results))
    }
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
