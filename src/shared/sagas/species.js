import axios from 'axios'
import { getBaseUrl } from 'shared/utils'
import { takeLatest, call, put, all } from 'redux-saga/effects'
import {
  requestSpeciesSucces,
  requestSpeciesFailure,
} from 'shared/actions/species'
import { species_types } from 'shared/constants'

function* fetchSpecies({ page }) {
  try {
    const server = yield call(getBaseUrl)
    const url = `${server}/?page=${page}`
    const {
      data: { results },
    } = yield call(axios, { url, method: 'GET' })

    yield put(requestSpeciesSucces(results))
  } catch (error) {
    yield put(requestSpeciesFailure(error))
  }
}

function* getSelectedSpecies() {
  yield takeLatest(species_types.SPECIES_REQUEST, fetchSpecies)
}

export default function* root() {
  yield all([call(getSelectedSpecies)])
}
