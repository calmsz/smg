import React from 'react'
import { CardsGridContainer } from '../styles'
import Card from './card'

export class CardsGrid extends React.Component {
  render () {
    const thereAreElements = !!this.props.elements
    return (
      <div>
        <h2>Grid of cards</h2>
        <CardsGridContainer>
          {thereAreElements
            ? this.props.elements.map((element, i) => <Card isOn={false} content={element} ref={`card${i}`} i={i} key={i} />)
            : <h2>Nothing to see. Please contact limonggi@gmail.com</h2>}
        </CardsGridContainer>
      </div>
    )
  }
}
