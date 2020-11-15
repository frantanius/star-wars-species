import axios from 'axios'
import { takeLatest, call, put, all } from 'redux-saga/effects'
import {
  requestSpeciesSucces,
  requestSpeciesFailure,
} from 'shared/actions/species'
import { species_types } from 'shared/constants'

function* fetchSpecies(page = 1) {
  try {
    const {
      data: { results },
    } = yield call(axios.get(`${process.env.REACT_APP_API_URL}?page=${page}`))

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
