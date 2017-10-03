import Vue from 'vue'
import Vuex from 'vuex'
import uuidv4 from 'uuid'

import {START_ACTIVITY, STOP_ACTIVITY} from './mutationTypes'

Vue.use(Vuex)

const state = {
  activities: [{
    id: uuidv4(),
    title: 'Coding',
    img: 'http://www.litigationfutures.com/wp-content/uploads/coding.jpg',
    startTime: undefined,
    stopTime: undefined,
    baseTime: undefined
  }]
}

const getters = {
  getActivityById: (state) => (id) => state.activities.find(a => a.id === id)
}

const mutations = {
  [START_ACTIVITY] (state, payload) {
    if (payload && payload.id && payload.getters) {
      let activity = payload.getters.getActivityById(payload.id)
      if (activity) {
        Object.assign(activity, {
          started: true,
          startTime: new Date(),
          stopTime: undefined,
          baseTime: activity.baseTime ? activity.baseTime : 0
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

const actions = {
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

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  strict: process.env.NODE_ENV !== 'production'
})
