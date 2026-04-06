import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import ItemDetails from '@/views/ItemDetails.vue'
import OrderAheadPage from '@/views/OrderAheadPage.vue'
import WhatsOnEvent from '@/views/WhatsOnEvent.vue'
import FoodsDrinks from '@/views/FoodsDrinks.vue'
import FAQPage from '@/views/FAQPage.vue'
import VisitusPage from '@/views/VisitusPage.vue'
import ContactPage from '@/views/ContactPage.vue'
import CheckoutPage from '@/views/CheckoutPage.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/item-details', component: ItemDetails },
  { path: '/orderahead', component: OrderAheadPage },
  { path: '/whatsonevent', component: WhatsOnEvent },
  { path: '/FoodsDrinks', component: FoodsDrinks },
  { path: '/faqs', component: FAQPage },
  { path: '/locations', component: VisitusPage },
  { path: '/contactus', component: ContactPage },
  { path: '/checkout', component: CheckoutPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router