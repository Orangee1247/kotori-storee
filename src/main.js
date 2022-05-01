import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import device from "vue-device-detector"
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './css/styles.css'
import './js/scripts.js'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(device)

new Vue({
  render: h => h(App),
}).$mount('#app')
