import Vue from 'vue'
import App from './App'
import Header, {VHeader} from './package/index'
if (!VHeader) {
  throw new Error(' VHeader ')
}

Vue.use(Header)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
