import React from 'react'
import EStyleSheet from 'react-native-extended-stylesheet'
import { Provider } from 'react-redux'
// import Home from './Screens/Home'
// import CurrencyList from './Screens/CurrencyList'
// import Options from './Screens/Options'
// import Themes from './Screens/Themes'
import Navigator from './Config/routes'
import { AlertProvider } from './Components/Alert'
import store from './Config/store'

// disable yellow warnings
console.disableYellowBox = true

EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
  $primaryOrange: '#D57866',
  $primaryGreen: '#00BD9D',
  $primaryPurple: '#9E768F',

  $white: '#fff',
  $border: '#e2e2e2',
  $inputText: '#797979',
  $lightGray: '#f0f0f0',
  $darkText: '#343434',
})

export default () => (
  <Provider store={store}>
    <AlertProvider>
      <Navigator onNavigationStateChange={null} />
    </AlertProvider>
  </Provider>
)
