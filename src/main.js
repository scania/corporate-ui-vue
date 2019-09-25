import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import { defineCustomElements, addTheme } from 'corporate-ui-dev';
import { theme as scania } from 'scania-theme';

import { router } from './router'

defineCustomElements(['c-theme', 'c-header', 'c-footer', 'c-navigation', 'c-content']);

addTheme(scania);

Vue.config.productionTip = false

Vue.config.ignoredElements = [/c-\w*/];

Vue.use(VueRouter)

new Vue({
  router,
  el: '#app', // Vue have a default node where it renders the app
  render: h => h(App),
})
