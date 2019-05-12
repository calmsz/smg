import React from 'react'
import { connect } from 'react-redux'
import { ScreenCardContainer } from '../styles'

function mapStateToProps (state) {
  return { currentArray: state.CardsSequence.currentArray, attemptArray: state.CardsSequence.attemptArray }
}

class ScreenCard extends React.Component {
  componentDidUpdate (prevProps) {
    if (JSON.stringify(prevProps.currentArray) !== JSON.stringify(this.props.currentArray)) {
      let content = ''
      let timeToWait = this.props.currentArray.length * 200
      for (let index = 0; index < this.props.currentArray.length; index++) {
        content += `${index}-${this.props.currentArray[index]}  `
      }
      this.refs.ScreenContent.innerHTML = content

      setTimeout(() => {
        this.refs.ScreenContent.innerHTML = ''
      }, timeToWait)
    } else {
      if (JSON.stringify(this.props.currentArray) === JSON.stringify(this.props.attemptArray)) {
        this.refs.ScreenContent.innerHTML = `GOOD MATCH, HIT NEXT ROUND!`
      } else if (this.props.currentArray.length === this.props.attemptArray.length) {
        this.refs.ScreenContent.innerHTML = `WRONG MATCH`
      }
    }
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
