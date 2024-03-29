import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import MainApp from './MainApp.jsx'

import rootReducer from './reducers'

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

render(
  <Provider store={store}>
    <MainApp />
  </Provider>,
  document.getElementById('root')
)
