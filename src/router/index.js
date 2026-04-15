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
import EventDetails from '@/views/EventDetails.vue'
import OurChoices from '@/views/OurChoices.vue'
import OurStory from '@/views/OurStory.vue'

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
  { path: '/event-details', component: EventDetails },
  { path: '/our-choices', component: OurChoices },
  { path: '/our-story', component: OurStory },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router