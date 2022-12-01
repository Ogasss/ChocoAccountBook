import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Money from '@/components/Money/Money.vue'
import Label from '@/components/Label/Label.vue'
// import Account from '@/views/Account.vue'
import Settings from '@/views/Settings.vue'
import Bargraph from '@/views/Bargraph.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path:'/',
    redirect:'/money'
  },
  {
    path:'/money',
    component: Money
  },
  {
    path:'/label',
    component: Label
  },
  // {
  //   path:'/account',
  //   component: Account
  // },
  {
    path:'/settings',
    component:Settings
  },
  {
    path:'/Bargraph',
    component:Bargraph
  }
]

const router = new VueRouter({
  routes
})

export default router
