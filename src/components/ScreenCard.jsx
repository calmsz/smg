import React from 'react'
import { connect } from 'react-redux'
import { ScreenCardContainer } from '../styles'

function mapStateToProps (state) {
  return { currentArray: state.CardsSequence.currentArray, attemptArray: state.CardsSequence.attemptArray }
}

class ScreenCard extends React.Component {
  componentDidUpdate (nextProps) {
    let content = ''
    for (let index = 0; index < this.props.currentArray.length; index++) {
      content += `${index}-${this.props.currentArray[index]}  `
    }
    this.refs.ScreenContent.innerHTML = content
  }

  render () {
    return (
      <ScreenCardContainer>
        <h3 ref='ScreenContent'>{this.props.content}</h3>
      </ScreenCardContainer>
    )
  }
}

export default connect(mapStateToProps, null)(ScreenCard)
