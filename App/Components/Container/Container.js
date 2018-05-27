import React from 'react'
import PropTypes from 'prop-type'
import { View } from 'react-native'
import styles from './styles'

const Container = ({ children }) => <View style={styles.container}>{children}</View>

Container.propTypes = {
  children: PropTypes.any,
}

export default Container
