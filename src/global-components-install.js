import Vue from 'vue'
import wtBox from 'cps/base/wt-box'
import wtRow from 'cps/base/wt-row'
import CreateAPI from 'vue-create-api'
console.log('CreateAPI', CreateAPI)
Vue.use(CreateAPI)
Vue.component('wt-box', wtBox)
Vue.component('wt-row', wtRow)
