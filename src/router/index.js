import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import ItemDetails from '@/views/ItemDetails.vue'
import OrderAheadPage from '@/views/OrderAheadPage.vue'
import WhatsOnEvent from '@/views/WhatsOnEvent.vue'
import FoodsDrinks from '@/views/FoodsDrinks.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/item-details', component: ItemDetails },
  { path: '/orderahead', component: OrderAheadPage },
  { path: '/whatsonevent', component: WhatsOnEvent },
  { path: '/FoodsDrinks', component: FoodsDrinks },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router