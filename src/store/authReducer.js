import { SET_AUTH_STATE, CLEAR_AUTH_STATE } from './actions'

const authReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case SET_AUTH_STATE:
      return { ...payload }
    case CLEAR_AUTH_STATE:
      return {}
    default:
      return state
  }
}

export default authReducer