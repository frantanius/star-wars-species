import axios from 'axios'
import nprogress from 'nprogress'
import { getBaseUrl } from 'shared/utils'
import { takeLatest, call, put, all } from 'redux-saga/effects'
import {
  requestSpeciesDetailSucces,
  requestSpeciesDetailFailure,
} from 'shared/actions/speciesDetail'
import { species_detail_types } from 'shared/constants'
import { push } from 'connected-react-router'

function* fetchSpeciesDetail({ id }) {
  nprogress.start()
  try {
    const server = yield call(getBaseUrl)
    const url = `${server}${id}`

    const { data } = yield call(axios, { url, method: 'GET' })
    yield put(requestSpeciesDetailSucces(data))
    yield put(push(data.name.toLowerCase()))
    nprogress.done()
  } catch (error) {
    yield put(requestSpeciesDetailFailure(error))
    nprogress.done()
  }
}

function* getSelectedSpeciesDetail() {
  yield takeLatest(
    species_detail_types.SPECIES_DETAIL_REQUEST,
    fetchSpeciesDetail,
  )
}

export default function* root() {
  yield all([call(getSelectedSpeciesDetail)])
}
