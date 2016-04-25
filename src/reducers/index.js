import { combineReducers } from 'redux'
import { routeReducer as routing } from 'react-router-redux'
import latestEvent from './latestEvent'
import description from './description'
import blurb from './blurb'
import none from './none'

const rootReducer = combineReducers({
  routing,
  latestEvent,
  description,
  blurb,
  none
})

export default rootReducer
