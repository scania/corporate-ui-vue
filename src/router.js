import VueRouter from 'vue-router'

import Home from './views/Home.vue'
import List from './views/List.vue'
import Table from './views/Table.vue'
import None from './views/None.vue'
import Empty from './views/Empty.vue'

export const routes = [
  { path: '/home', name: 'home', component: Home },
  { path: '/info', name: 'list', component: Empty, children: [
    { path: 'list', name: 'list', component: List },
    { path: 'table', name: 'table', component: Table },
    { path: 'form', name: 'form', component: None },

    { path: '', redirect: 'list' },
  ] },

  { path: '/', redirect: '/home' },
  { path: '*', component: None },
]

export const router = new VueRouter({
  routes,
  linkActiveClass: 'active',
})
