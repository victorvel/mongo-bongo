import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Display from '../views/Display.vue'
import Answer from '../views/Answer.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/Answer',
    name: 'Answer',
    component: Answer
  },
  {
    path: '/Display',
    name: 'Display',
    component: Display
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
