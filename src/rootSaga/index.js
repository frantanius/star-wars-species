import { all, call } from 'redux-saga/effects'
import speciesSaga from 'shared/sagas/species'
import speciesDetailSaga from 'shared/sagas/speciesDetail'

export default function* rootSaga() {
  yield all([call(speciesSaga), call(speciesDetailSaga)])
}
