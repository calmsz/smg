import React from 'react'
import { connect } from 'react-redux'
import { CheckButton } from '../styles'
import { AddRound, ClearAttempt } from '../actions/actionCreators'

// helpers
import { getRandomElement } from '../helpers'

function mapStateToProps (state) {
  return { currentArray: state.CardsSequence.currentArray, attemptArray: state.CardsSequence.attemptArray }
}

function mapDispatchToProps (dispatch) {
  return {
    dispatch
  }
}
class CheckRound extends React.Component {
  handleAddRound () {
    if (JSON.stringify(this.props.currentArray) === JSON.stringify(this.props.attemptArray)) {
      this.props.dispatch(ClearAttempt())
      this.props.dispatch(AddRound(getRandomElement(this.props.elements)))
    } else {
      window.location.reload()
    }
  }

  render () {
    this.handleAddRound = this.handleAddRound.bind(this)
    return (
      <CheckButton onClick={this.handleAddRound} >
        <h3>Next Round</h3>
      </CheckButton>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckRound)
