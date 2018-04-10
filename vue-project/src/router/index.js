import Vue from 'vue'
import Vant from 'vant'
import 'vant/lib/vant-css/index.css'
import Router from 'vue-router'
import Main from '@/views/main/main'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
Vue.use(Vant)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },{
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
