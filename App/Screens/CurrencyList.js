import React, { Component } from 'react'
import PropTypes from 'prop-type'
import { FlatList, View, StatusBar } from 'react-native'
import { connect } from 'react-redux'
import { ListItem, Separator } from '../Components/List'
import currenices from '../Data/currencies'
import { changeBaseCurrency, changeQuoteCurrency } from '../actions/currencies'

class CurrencyList extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
    baseCurrency: PropTypes.string,
    quoteCurrency: PropTypes.string,
  }

  handlePress = (currency) => {
    const { type } = this.props.navigation.state.params
    if (type === 'base') {
      // dispatch change base
      this.props.dispatch(changeBaseCurrency(currency))
    } else if (type === 'quote') {
      // dispatch change quote
      this.props.dispatch(changeQuoteCurrency(currency))
    }
    this.props.navigation.goBack(null)
  }

  render() {
    let comparisonCurrency = this.props.baseCurrency
    if (this.props.navigation.state.params.type === 'quote') {
      comparisonCurrency = this.props.quoteCurrency
    }

    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="default" translucent={false} />
        <FlatList
          data={currenices}
          renderItem={({ item }) => (
            <ListItem
              text={item}
              selected={item === comparisonCurrency}
              onPress={() => this.handlePress(item)}
            />
          )}
          keyExtractor={item => item}
          ItemSeparatorComponent={Separator}
        />
      </View>
    )
  }
}

const mapStateToProps = state => ({
  baseCurrency: state.currencies.baseCurrency,
  quoteCurrency: state.currencies.quoteCurrency,
})

export default connect(mapStateToProps)(CurrencyList)
