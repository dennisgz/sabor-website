import React from 'react'
import createBrowserHistory from 'history/lib/createBrowserHistory' // have no idea which api version this will work in. fuck rackt.
import useScroll from 'scroll-behavior/lib/useSimpleScroll'
import { Provider } from 'react-redux'
import configureStore from 'store/configureStore'
import configureRoutes from './configureRoutes'
import DevTools from 'containers/DevTools'

const browserHistory = useScroll(createBrowserHistory)()

export default (
  <Provider store={ configureStore(browserHistory) }>
    <div>
      { configureRoutes(browserHistory) }
      <DevTools />
    </div>
  </Provider>
)
