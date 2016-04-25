import React from 'react'
import createHashHistory from 'history/lib/createHashHistory'
import useScroll from 'scroll-behavior/lib/useSimpleScroll'
import { Provider } from 'react-redux'
import configureStore from 'store/configureStore'
import configureRoutes from './configureRoutes'

const browserHistory = useScroll(createHashHistory)({ queryKey: false })

export default (
  <Provider store={ configureStore(browserHistory) }>
    { configureRoutes(browserHistory) }
  </Provider>
)
