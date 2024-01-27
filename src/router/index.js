import { createRouter, createWebHistory } from 'vue-router'
import AppComponent from '../App.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AppComponent
    }
  ]
})

export default router
