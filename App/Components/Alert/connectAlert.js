import React, { Component } from 'react'
import PropTypes from 'prop-type'
import hoistNonReactStatic from 'hoist-non-react-statics'

/* eslint-disable */

const connectAlert = WrappedComponent => {
  class ConnectedAlert extends Component {
    render() {
      return (
        <WrappedComponent
          {...this.props}
          alertWithType={this.context.alertWithType}
          alert={this.context.alert}
        />
      )
    }
  }

  ConnectedAlert.contextTypes = {
    alertWithType: PropTypes.func,
    alert: PropTypes.func,
  }

  return hoistNonReactStatic(ConnectedAlert, WrappedComponent)
}

export default connectAlert
