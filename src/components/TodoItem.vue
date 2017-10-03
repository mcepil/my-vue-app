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
      <md-button @click="start(activity.id)">Start</md-button>
      <md-button @click="stop(activity.id)">Stop</md-button>
    </md-card-actions>

    <!-- <md-card-content>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
    </md-card-content> -->
  </md-card>
</template>

<script>
import { mapActions } from 'vuex'
import * as moment from 'moment'
import {START_ACTIVITY, STOP_ACTIVITY} from '../store/mutationTypes'

export default {
  name: 'TodoItem',
  props: ['activity'],
  computed: {
    getElapsedTime () {
      let {baseTime, startTime, stopTime} = this.activity
      let msDiff
      if (!startTime) {
        msDiff = baseTime
      } else {
        msDiff = stopTime - startTime + baseTime
      }
      let elapsed = moment.duration(msDiff)
      return (elapsed.days() * 24 + elapsed.hours()) + ':' +
        elapsed.minutes() + ':' +
        elapsed.seconds() + ':' +
        elapsed.milliseconds()
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
