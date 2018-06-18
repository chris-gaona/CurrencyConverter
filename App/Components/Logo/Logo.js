import React, { Component } from 'react'
import PropTypes from 'prop-type'
import { View, Text, Keyboard, Animated, Platform, StyleSheet } from 'react-native'
import styles from './styles'

const ANIMATION_DURATION = 250

class Logo extends Component {
  static propTypes = {
    tintColor: PropTypes.string,
  }

  constructor(props) {
    super(props)

    this.state = {
      containerImageWidth: new Animated.Value(styles.$largeContainerSize),
      imageWidth: new Animated.Value(styles.$largeImageSize),
    }
  }
  componentDidMount() {
    // keyboardWillShow & keyboardWillHide listeners don't work on Android
    let showListener = 'keyboardWillShow'
    let hideListener = 'keyboardWillHide'

    if (Platform.os === 'android') {
      showListener = 'keyboardDidShow'
      hideListener = 'keyboardDidHide'
    }

    this.keyboardShowListener = Keyboard.addListener(showListener, this.keyboardShow)
    this.keyboardHideListener = Keyboard.addListener(hideListener, this.keyboardHide)
  }

  componentWillUnmount() {
    this.keyboardShowListener.remove()
    this.keyboardHideListener.remove()
  }

  keyboardShow = () => {
    Animated.parallel([
      Animated.timing(this.state.containerImageWidth, {
        toValue: styles.$smallContainerSize,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(this.imageWidth, {
        toValue: styles.$smallImageSize,
        duration: ANIMATION_DURATION,
      }),
    ]).start()
  }

  keyboardHide = () => {
    Animated.parallel([
      Animated.timing(this.state.containerImageWidth, {
        toValue: styles.$largeContainerSize,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(this.imageWidth, {
        toValue: styles.$largeImageSize,
        duration: ANIMATION_DURATION,
      }),
    ]).start()
  }

  render() {
    const containerImageStyle = [
      styles.containerImage,
      { width: this.state.containerImageWidth, height: this.state.containerImageWidth },
    ]

    const imageStyles = [
      styles.logo,
      { width: this.state.imageWidth },
      this.props.tintColor ? { tintColor: this.props.tintColor } : null,
    ]

    return (
      <View style={styles.container}>
        <Animated.View style={containerImageStyle}>
          <Animated.Image
            resizeMode="contain"
            style={[StyleSheet.absoluteFill, containerImageStyle]}
            source={require('./images/background.png')}
          />
          <Animated.Image
            resizeMode="contain"
            style={imageStyles}
            source={require('./images/logo.png')}
          />
        </Animated.View>
        <Text style={styles.text}>Currency Converter</Text>
      </View>
    )
  }
}

export default Logo
