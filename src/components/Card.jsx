import React from 'react'
import { CardContainer } from '../styles'

export class Card extends React.Component {
  render () {
    return (
      <CardContainer>
        <h3>{this.props.content}</h3>
      </CardContainer>
    )
  }
};
