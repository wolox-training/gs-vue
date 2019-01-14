import Vue from 'vue'
import Router from 'vue-router'

import { localStorageService } from './services/localStorage'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: () => import('./views/Register.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/',
      name: 'dashboard',
      component: () => import('./views/Dashboard.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.name === 'dashboard' && !localStorageService.getToken()) {
    next({ name: 'login' })
  }
  next()
})

export default router
