import { SET_DESCRIPTION } from './constants'
import fbapi from 'toolbox/fbapi'

export function setDescription(description) {
  return {
    type: SET_DESCRIPTION,
    payload: {
      description: description
    }
  }
}

export function pullDescription() {
  return (dispatch) => {
    fbapi({
      url: '/cusabor',
      fields: 'description',
      callback: function(response) {
        dispatch(setDescription(response.description));
      }
    })
  }
}
