import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Todo from '@/components/TodoList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Hello
    },
    {
      path: '/todo',
      name: 'Todo',
      component: Todo
    }
  ]
})
