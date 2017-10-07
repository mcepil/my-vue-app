import Vue from 'vue'
import Vuex from 'vuex'
import uuidv4 from 'uuid'

import getters from './getters'
import mutations from './mutations'
import actions from './actions'

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

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  strict: process.env.NODE_ENV !== 'production'
})
