import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/iview.js'
import myPlugin from './plugins/my-plugin.js'

Vue.config.productionTip = false
Vue.use(myPlugin);
console.log(Vue.$data.firstName);
Vue.prototype.myPlugin = myPlugin
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
