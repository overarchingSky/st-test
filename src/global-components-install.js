import Vue from 'vue'
import WtBox from 'cps/base/wt-box'
import WtRow from 'cps/base/wt-row'
import WtInput from 'cps/base/wt-input'
import WtCol from 'cps/base/wt-col'
import WtButton from 'cps/base/wt-button'
import WtChip from 'cps/base/wt-chip'
import WtTabSelector from 'cps/base/wt-tab-selector'
import WtTextarea from 'cps/base/wt-textarea'
import CreateAPI from 'vue-create-api'
console.log('CreateAPI', CreateAPI)
Vue.use(CreateAPI)
Vue.component('wt-box', WtBox)
Vue.component('wt-row', WtRow)
Vue.component('wt-input', WtInput)
Vue.component('wt-col', WtCol)
Vue.component('wt-button', WtButton)
Vue.component('wt-chip', WtChip)
Vue.component('wt-tab-selector', WtTabSelector)
Vue.component('wt-textarea', WtTextarea)