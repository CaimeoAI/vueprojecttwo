import { createRouter, createWebHistory } from 'vue-router'
import Landing from '../views/Landing.vue'
import Stocks from '../views/Stocks.vue'
import Weather from '../views/Weather.vue'
import News from '../views/News.vue'

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/stocks',
    name: 'Stocks',
    component: Stocks
  },
  {
    path: '/news',
    name: 'News',
    component: News
  },
  {
    path: '/weather',
    name: 'Weather',
    component: Weather
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
