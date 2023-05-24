import Vue from 'vue'
import App from './App.vue'

import MeUI from '../src/index'

Vue.use(MeUI)

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount('#app')
