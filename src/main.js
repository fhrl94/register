import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import {$post} from './plugins/axios'


Vue.config.productionTip = false
Vue.prototype.$post = $post

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
