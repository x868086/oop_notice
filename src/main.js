import Vue from 'vue'
import App from './App.vue'
import Notice from './components/notice/index'

Vue.config.productionTip = false
Vue.use(Notice)

new Vue({
  render: h => h(App)
}).$mount('#app')
