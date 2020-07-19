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
    children: [{
      path: ':query'
    }]
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import('../views/Detail.vue'),
    children: [{
      path: ':id'
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
