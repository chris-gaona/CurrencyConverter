import { takeEvery } from 'redux-saga/effects'

// 1. swap currency
// 2. change base currency
// 3. initial app load

import { SWAP_CURRENCY, CHANGE_BASE_CURRENCY, GET_INITIAL_CONVERSION } from '../actions/currencies'

function* fetchLatestConversionRates(action) {
  console.log('todo', action)
  yield
}

export default function* rootSaga() {
  // yield tells generator to pause
  yield takeEvery(GET_INITIAL_CONVERSION, fetchLatestConversionRates)
}
