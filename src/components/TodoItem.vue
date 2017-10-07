<template>
    <md-card md-with-hover>
      <md-card-media>
        <img v-bind:src="activity.img" v-bind:alt="activity.title">
      </md-card-media>

      <md-card-header>
        <div class="md-title">{{ activity.titile }}</div>
        <div class="md-subhead">Elapsed: {{ getElapsedTime }}</div>
      </md-card-header>

      <md-card-actions>
        <md-button @click="start(activity.id)" v-bind:disabled="activity.started">Start</md-button>
        <md-button @click="stop(activity.id)" v-bind:disabled="!activity.started">Stop</md-button>
      </md-card-actions>
    </md-card>
</template>

<script>
import { mapActions } from 'vuex'
import * as moment from 'moment'
import {START_ACTIVITY, STOP_ACTIVITY} from '../store/mutationTypes'

export default {
  name: 'TodoItem',
  props: ['activity'],
  data () {
    return {
      interval: undefined,
      now: Date.now()
    }
  },
  created () {
    var self = this
    this.interval = setInterval(() => {
      console.log('updating now')
      self.$data.now = Date.now()
    }, 500)
  },
  destroyed () {
    clearInterval(this.interval)
  },
  computed: {
    getElapsedTime () {
      if (this.now) {
        let {baseTime, startTime, stopTime} = this.activity
        let msDiff
        if (!startTime) {
          msDiff = baseTime || 0
        } else {
          msDiff = (stopTime || new Date()) - startTime + baseTime
        }
        let elapsed = moment.duration(msDiff)
        return (elapsed.days() * 24 + elapsed.hours()) + ':' +
          elapsed.minutes() + ':' +
          elapsed.seconds() + ':' +
          elapsed.milliseconds()
      }
    }
  },
  methods: mapActions({
    start: START_ACTIVITY,
    stop: STOP_ACTIVITY
  })
}
</script>

<style scoped>

</style>
