<template>
  <div id="todo-list">
    <div md-with-hover 
      class="todo-card" 
      v-for="item in activities"
      v-bind:key="item.id">
      <todo-item v-bind:activity="item"></todo-item>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import TodoItem from './TodoItem'

export default {
  name: 'TodoList',
  computed: mapState([
    'activities'
  ]),
  components: {
    'todo-item': TodoItem
  }
}
</script>

<style scoped>
.todo-card {
  width: 200px;
}
</style>
