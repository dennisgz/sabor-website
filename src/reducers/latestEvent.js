import { SET_LATEST_EVENT, SET_EXISTING } from 'actions/constants'
import update from 'react-addons-update'

const initialState = {
  exists: false,
  title: '',
  imgsrc: '',
  date: '',
  start_time: '',
  end_time: '',
  place: '',
  link: '',
  description: ''
}

// TODO specify what an 'EVENT' looks like....
export default function events(state = initialState, action) {
  switch (action.type) {
  case SET_LATEST_EVENT:
    return action.payload.event
  case SET_EXISTING:
    return update(state, {exists: {$set: true}})
  default:
    return state
  }
}
