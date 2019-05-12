import React from 'react'
import { connect } from 'react-redux'
import { CardContainer } from '../styles'
import { FillAttempt } from '../actions/actionCreators'

function mapStateToProps (state) {
  return { currentArray: state.CardsSequence.currentArray, attemptArray: state.CardsSequence.attemptArray }
}

function mapDispatchToProps (dispatch) {
  return {
    dispatch
  }
}
class Card extends React.Component {
  handleFillAttempt () {
    this.props.dispatch(FillAttempt(this.props.content))
  }

  render () {
    this.handleFillAttempt = this.handleFillAttempt.bind(this)
    return (
      <CardContainer onClick={this.handleFillAttempt}>
        <h3>{this.props.content}</h3>
      </CardContainer>
    )
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Card)
