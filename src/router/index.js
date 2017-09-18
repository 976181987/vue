import Vue from 'vue'

import Router from 'vue-router'
import Hello from '@/components/Hello'
import search from '@/components/sousuo'
import reg from '@/components/reg'
// import dome from '@/components/dome'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',

      redirect: '/reg',
    },
    {
      path: '/index',
      component: Hello
    },
    {
      path: '/search',
      component: search
    },
    {
      path: '/reg',
      component: reg
    }

  ]
})
