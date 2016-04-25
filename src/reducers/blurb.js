import { SET_BLURB } from 'actions/constants'
import update from 'react-addons-update'

const initialState = {
  text: ''
}

// TODO specify what an 'EVENT' looks like....
export default function events(state = initialState, action) {
  switch (action.type) {
  case SET_BLURB:
    return update(state, {text: {$set: action.payload.blurb}})
  default:
    return state
  }
}
