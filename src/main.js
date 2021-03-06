// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'animate.css'

import 'element-ui/lib/theme-default/index.css'
import {Input,FormItem,Form,Row,Col,Button} from 'element-ui'
Vue.config.productionTip = false


Vue.use(FormItem)
Vue.use(Form)
Vue.use(Input)
Vue.use(Row)
Vue.use(Col)
Vue.use(Button)



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,

  template: '<App/>',
  components: { App }
  
})
