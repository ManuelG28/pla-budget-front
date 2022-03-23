import { createRouter, createWebHistory } from 'vue-router'
import BudgetView from '../views/BudgetView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/budget',
      name: 'Budget',
      component: BudgetView
    }
  ]
})

export default router
