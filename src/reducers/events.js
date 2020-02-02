import _ from 'lodash'
import {
  READ_EVENTS, 
  CREATE_EVENT, 
  DELETE_EVENT,
  READ_EVENTS_DETAIL,
  UPDATE_EVENT
} from '../actions'

const initialState = {}

export default (events = initialState, action) => {
  switch (action.type) {
    case READ_EVENTS:
      return _.mapKeys(action.response.data, 'id')
    case DELETE_EVENT:
      delete events[action.id]
      return { ...events }
    case CREATE_EVENT:
    case UPDATE_EVENT:
    case READ_EVENTS_DETAIL:
      const data = action.response.data
      return { ...events, [data.id]: data }
    default:
      return events
  }
}
