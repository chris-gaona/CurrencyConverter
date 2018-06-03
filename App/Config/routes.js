import { StatusBar } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import Home from '../Screens/Home'
import CurrencyList from '../Screens/CurrencyList'
import Options from '../Screens/Options'
import Themes from '../Screens/Themes'

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: () => null,
      },
    },
    Options: {
      screen: Options,
      navigationOptions: {
        headerTitle: 'Options',
      },
    },
    Themes: {
      screen: Themes,
      navigationOptions: {
        headerTitle: 'Themes',
      },
    },
  },
  {
    headerMode: 'screen',
  },
)

const CurrencyListStack = createStackNavigator({
  CurrencyList: {
    screen: CurrencyList,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.state.params.title,
    }),
  },
})

export default createStackNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        header: () => null,
      },
    },
    CurrencyList: {
      screen: CurrencyListStack,
    },
  },
  {
    mode: 'modal',
    cardStyle: { paddingTop: StatusBar.currentHeight },
    headerMode: 'none',
  },
)
