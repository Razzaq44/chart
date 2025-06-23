import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BarChartView from '@/views/BarChartView.vue'
import DChartView from '@/views/DChartView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/barchart',
      name: 'barChart',
      component: BarChartView,
    },
    {
      path: '/dchart',
      name: 'dchart',
      component: DChartView,
    },
  ],
})

export default router
