import React from 'react'
import { View, StatusBar } from 'react-native'
import { Container } from '../Components/Container'

export default () => (
  <Container>
    <StatusBar translucent={false} barStyle="light-content" />
    <View />
  </Container>
)
