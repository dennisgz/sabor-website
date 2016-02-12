import React from 'react'
import { Provider } from 'react-redux'
import { browserHistory as history } from 'react-router'
import configureStore from 'store/configureStore'
import Routes from './Routes'
import DevTools from 'containers/DevTools'

export default (
  <Provider store={ configureStore(history) }>
    <div>
      <Routes history={ history } />
      <DevTools />
    </div>
  </Provider>
)
