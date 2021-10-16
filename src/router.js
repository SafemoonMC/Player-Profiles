import { createRouter, createWebHistory } from 'vue-router'
import Index from './views/Index.vue'
import Profile from './views/Profile.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Index,
    },
    {
      path: '/profile/:name?',
      component: Profile,
    },
  ]
})