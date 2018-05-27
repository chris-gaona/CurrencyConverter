import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import { Container } from '../Components/Container'
import { Logo } from '../Components/Logo'
import { InputWithButton } from '../Components/TextInput'

const TEMP_BASE_CURRENCY = 'USD'
const TEMP_QUOTE_CURRENCTY = 'GBP'
const TEMP_BASE_PRICE = '100'
const TEMPT_QUOTE_PRICE = '79.74'

class Home extends Component {
  handlePressBaseCurrency = () => {
    console.log('press base')
  }

  handlePressQuoteCurrency = () => {
    console.log('press quote')
  }

  handleTextChange = (text) => {
    console.log('change text', text)
  }

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Logo />
        <InputWithButton
          buttonText={TEMP_BASE_CURRENCY}
          onPress={this.handlePressBaseCurrency}
          defaultValue={TEMP_BASE_PRICE}
          keyboardType="numeric"
          onChangeText={this.handleTextChange}
        />
        <InputWithButton
          buttonText={TEMP_QUOTE_CURRENCTY}
          onPress={this.handlePressQuoteCurrency}
          editable={false}
          value={TEMPT_QUOTE_PRICE}
        />
      </Container>
    )
  }
}

export default Home
