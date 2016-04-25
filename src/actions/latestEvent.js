import { SET_LATEST_EVENT, SET_EXISTING } from './constants'
import fbapi from 'toolbox/fbapi'
import moment from 'moment'

export function setLatestEvent(event) {
  return {
    type: SET_LATEST_EVENT,
    payload: {
      event: event
    }
  }
}

export function setExisting() {
  return {
    type: SET_EXISTING
  }
}

export function pullLatestEvent() {
  return (dispatch) => {
    fbapi({
      url: '/cusabor/events',
      fields: 'name,description,start_time,end_time,place,cover',
      additional: { since: Date.now() / 1000 | 0 },
      callback: function(response) {
        const event = response.data[0];
        if (event) {
          const { id, name, start_time, end_time, place, cover, description } = event;
          const payload = {
            exists: true,
            title: name,
            imgsrc: cover.source,
            date: moment(start_time).format("dddd, MMM Do"),
            start_time: moment(start_time).format("h:mma"),
            end_time: moment(end_time).format("h:mma"),
            place: place.name,
            link: "https://www.facebook.com/" + id,
            description: description
          };
          dispatch(setLatestEvent(payload));
          dispatch(setExisting());
        }
      }
    })
  }
}
