import React from 'react'
import { connect } from 'react-redux'
import { MainAppContainer } from './styles'

// // components
import { CardsGrid } from './components/CardsGrid'
import CheckRound from './components/CheckRound'
import ScreenCard from './components/ScreenCard'

// mockup-data
import { MockedElements } from './data'

const mapStateToProps = function (state) {
  return {
    state
  }
}

function mapDispatchToProps (dispatch) {
  return {
    dispatch
  }
}

class MainApp extends React.Component {
  render () {
    return (
      <MainAppContainer>
        <div><h1>Sequence memory game</h1></div>
        <CheckRound elements={MockedElements} />
        <ScreenCard content='Hit Next Round' ref='screen' i='screen' key='screen' />
        <CardsGrid elements={MockedElements} />
      </MainAppContainer>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainApp)
