import { StatusBar } from 'react-native'
import { StackNavigator } from 'react-navigation'
import Home from '../Screens/Home'
import CurrencyList from '../Screens/CurrencyList'

export default StackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: () => null,
      },
    },
    CurrencyList: {
      screen: CurrencyList,
      navigationOptions: ({ navigation }) => ({
        headerTitle: navigation.state.params.title,
      }),
    },
  },
  {
    mode: 'modal',
    cardStyle: { paddingTop: StatusBar.currentHeight },
  },
)
