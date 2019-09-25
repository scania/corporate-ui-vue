import VueRouter from 'vue-router'

import Home from './views/Home.vue'
import Contact from './views/Contact.vue'
// import About from './views/About.vue'
import Project from './views/Project.vue'
import Team from './views/Team.vue'
import None from './views/None.vue'
import Empty from './views/Empty.vue'

export const routes = [
  { path: '/home', name: 'home', component: Home },
  { path: '/about', name: 'about', component: Empty, children: [
    { path: 'project', name: 'project', component: Project },
    { path: 'team', name: 'team', component: Team },

    { path: '', redirect: 'project' },
  ] },
  // { path: '/about', component: Empty, ...About },
  { path: '/contact', name: 'contact', component: Contact },

  { path: '/', redirect: '/home' },
  { path: '*', component: None },
]

export const router = new VueRouter({
  routes,
  linkActiveClass: 'active',
})
