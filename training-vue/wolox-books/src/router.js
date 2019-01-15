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
      component: () => import('./views/About.vue'),
      meta: { requiredAuth: false }
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: () => import('./views/Register.vue'),
      meta: { requiredAuth: false }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue'),
      meta: { requiredAuth: false }
    },
    {
      path: '/',
      name: 'dashboard',
      component: () => import('./views/Dashboard.vue'),
      meta: { requiredAuth: true }
    },
    {
      path: '/books/:id',
      name: 'book-detail',
      component: () => import('./views/BookDetail.vue'),
      props: true,
      meta: { requiredAuth: true }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiredAuth && !localStorageService.getToken()) {
    next({ name: 'login' })
  }
  next()
})

export default router
