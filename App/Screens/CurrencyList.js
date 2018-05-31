import React, { Component } from 'react'
import PropTypes from 'prop-type'
import { FlatList, View, StatusBar } from 'react-native'
import { ListItem, Separator } from '../Components/List'
import currenices from '../Data/currencies'

const TEMP_CURRENT_CURRENCY = 'CAD'

class CurrencyList extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  }

  handlePress = () => {
    this.props.navigation.goBack(null)
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="default" translucent={false} />
        <FlatList
          data={currenices}
          renderItem={({ item }) => (
            <ListItem
              text={item}
              selected={item === TEMP_CURRENT_CURRENCY}
              onPress={this.handlePress}
            />
          )}
          keyExtractor={item => item}
          ItemSeparatorComponent={Separator}
        />
      </View>
    )
  }
}

export default CurrencyList
