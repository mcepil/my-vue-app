import {START_ACTIVITY, STOP_ACTIVITY} from './mutationTypes'

export default {
  [START_ACTIVITY] ({commit, getters}, id) {
    commit({
      type: START_ACTIVITY,
      getters,
      id
    })
  },
  [STOP_ACTIVITY] ({commit, getters}, id) {
    commit({
      type: STOP_ACTIVITY,
      getters,
      id
    })
  }
}
