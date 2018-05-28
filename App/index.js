import React from 'react'
import EStyleSheet from 'react-native-extended-stylesheet'
import CurrencyList from './Screens/CurrencyList'

// disable yellow warnings
console.disableYellowBox = true

EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
  $white: '#fff',
  $border: '#e2e2e2',
  $inputText: '#797979',
  $lightGray: '#f0f0f0',
  $darkText: '#343434',
})

export default () => <CurrencyList />
