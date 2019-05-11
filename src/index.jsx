import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import rootReducer from './reducers'

// components
import { CardsGrid } from './components/CardsGrid'

// mockup-data
import { MockedElements } from './data'

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

render(
  <Provider store={store}>
    <div><h1>Sequence memory game</h1></div>
    <CardsGrid elements={MockedElements} />
  </Provider>,
  document.getElementById('root')
)
