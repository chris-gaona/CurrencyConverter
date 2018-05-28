import React from 'react'
import PropTypes from 'prop-type'
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native'
import styles from './styles'

const Container = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View style={styles.container}>{children}</View>
  </TouchableWithoutFeedback>
)

Container.propTypes = {
  children: PropTypes.any,
}

export default Container
