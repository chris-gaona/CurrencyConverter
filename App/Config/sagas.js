import { takeEvery, select, call, put } from 'redux-saga/effects'

import {
  SWAP_CURRENCY,
  CHANGE_BASE_CURRENCY,
  GET_INITIAL_CONVERSION,
  CONVERSION_RESULT,
  CONVERSION_ERROR,
} from '../actions/currencies'

const getLatestRate = currency => fetch(`https://fixer.handlebarlabs.com/latest?base=${currency}`)

function* fetchLatestConversionRates(action) {
  let { currency } = action
  if (currency === undefined) {
    // yield says to wait for response before moving on
    // select gives us access to current state
    currency = yield select(state => state.currencies.baseCurrency)
  }

  try {
    // call() allows our app to be more easily tested...it's not needed
    const response = yield call(getLatestRate, currency)
    const result = yield response.json()

    if (result.error) {
      // put() allows our app to be more easily tested...it's not needed
      // emit an action
      yield put({ type: CONVERSION_ERROR, error: result.error })
    } else {
      yield put({ type: CONVERSION_RESULT, result })
    }
  } catch (e) {
    yield put({ type: CONVERSION_ERROR, error: e.message })
  }

  // getLatestRate(currency)
  //   .then(res => res.json())
  //   .then(res => console.log('res', res))
  //   .catch(err => console.error(err))
}

export default function* rootSaga() {
  // yield tells generator to pause
  yield takeEvery(GET_INITIAL_CONVERSION, fetchLatestConversionRates)
  yield takeEvery(SWAP_CURRENCY, fetchLatestConversionRates)
  yield takeEvery(CHANGE_BASE_CURRENCY, fetchLatestConversionRates)
}
