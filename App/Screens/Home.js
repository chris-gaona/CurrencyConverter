import React from 'react'
import { StatusBar } from 'react-native'
import { Container } from '../Components/Container'
import { Logo } from '../Components/Logo'

export default () => (
  <Container>
    <StatusBar translucent={false} barStyle="light-content" />
    <Logo />
  </Container>
)
