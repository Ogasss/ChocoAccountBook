import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Icon from './components/Icon.vue'
import LabelIcon from './components/LabelIcon.vue'

Vue.config.productionTip = false

Vue.component('Icon',Icon)
Vue.component('LabelIcon',LabelIcon)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
