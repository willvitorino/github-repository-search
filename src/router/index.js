import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/Search.vue')
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('../views/List.vue'),
    beforeEnter: (to, from, next) => {
      if (to.params.query) {
        next()
      } else {
        next(from.path)
      }
    },
    children: [{
      path: ':query'
    }]
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import('../views/Detail.vue'),
    beforeEnter: (to, from, next) => {
      if (to.params.login) {
        next()
      } else {
        next(from.path)
      }
    },
    children: [{
      path: ':login'
    }]
  },
  {
    path: '*',
    redirect: '/search'
  }
]

const router = new VueRouter({
  routes
})

export default router
