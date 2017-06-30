// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuerouter from 'vue-router'
import axios from 'axios'

import '../static/css/reset.css'


import Cart from './pages/cart'
import Address from './pages/address'

Vue.use(Vuerouter);

let router = new Vuerouter({
	routes:[
	  {path: '/', component:Cart},
	  {path: '/address',component: Address}
	]
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
