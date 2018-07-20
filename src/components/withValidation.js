// @flow

//
// STEP 9
// write a higher order component that does some validation on the search page before loading the data.
//

import * as React from 'react'

type State = {
  validationState: 'error' | 'warning' | 'success' | null
}

function withValidation<Props: { onChange: string => void }>(
  InputComponent: React.ComponentType<Props>
) {
  return class extends React.Component<Props, State> {
    state = {
      validationState: null
    }

    getValidationState(value: string) {
      const length = value.length
      if (length > 2) return 'success'
      else if (length > 1) return 'warning'
      else if (length > 0) return 'error'
      return null
    }

    handleChange(value: string) {
      const validationState = this.getValidationState(value)
      this.setState({
        validationState
      })
      if (validationState === 'success') {
        this.props.onChange(value)
      }
    }

    render() {
      const { onChange, ...otherProps } = this.props
      return (
        <InputComponent
          {...otherProps}
          validationState={this.state.validationState}
          onChange={value => this.handleChange(value)}
        />
      )
    }
  }
}

export default withValidation
