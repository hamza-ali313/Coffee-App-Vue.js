import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Dish from '@/views/Dish.vue'

const routes = [
  { path: '/home' , component: Home },
  { path: '/' , component: Dish }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router