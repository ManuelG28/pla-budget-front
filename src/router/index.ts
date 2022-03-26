import { createRouter, createWebHistory } from 'vue-router'
import BudgetView from '../views/BudgetView.vue'
import BudgetListView from '../views/BudgetListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/budget/create',
      name: 'budget',
      component: BudgetView
    },
    {
      path: '/budget/list',
      name: 'list',
      component: BudgetListView,
      props: true
    }
  ]
})

export default router
