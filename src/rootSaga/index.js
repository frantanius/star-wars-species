import { all, call } from 'redux-saga/effects'
import speciesSaga from 'shared/sagas/species'

export default function* rootSaga() {
  yield all([call(speciesSaga)])
}
