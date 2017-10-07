import {START_ACTIVITY, STOP_ACTIVITY} from './mutationTypes'

export default {
  [START_ACTIVITY] (state, payload) {
    if (payload && payload.id && payload.getters) {
      let activity = payload.getters.getActivityById(payload.id)
      if (activity) {
        Object.assign(activity, {
          started: true,
          startTime: new Date(),
          stopTime: undefined,
          baseTime: activity.baseTime || 0
        })
      }
    }
  },
  [STOP_ACTIVITY] (state, payload) {
    if (payload && payload.id && payload.getters) {
      let activity = payload.getters.getActivityById(payload.id)
      if (activity) {
        let newStop = new Date()
        let newBase = activity.baseTime + (newStop - activity.startTime)
        Object.assign(activity, {
          started: false,
          startTime: newStop,
          stopTime: newStop,
          baseTime: newBase
        })
      }
    }
  }
}
