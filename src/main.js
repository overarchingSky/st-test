// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'less/common.less'
import './global-components-install'
import create from './utils/create'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { api } from './api'
import './utils/Clamp'
import 'assets/font-icons/fonts.css'
Vue.use(create)
Vue.config.productionTip = false
// 使用vue-axios代替axios
Vue.use(VueAxios, axios);
Vue.axios.defaults.baseURL = api
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
