import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Msite from "../pages/Msite/Msite.vue"
import Search from "../pages/Search/Search.vue"
import Order from "../pages/Order/Order.vue"
import Profile from "../pages/Profile/Profile.vue"
import Login from "../pages/Login/Login.vue"
Vue.use(VueRouter)

const routes = [
  {path:'/',redirect:'/Msite'},
  {path:'/Msite',component:Msite,meta:{showFooter:true}},
  
  {path:'/Search',component:Search,meta:{showFooter:true}},
  {path:'/Order',component:Order,meta:{showFooter:true}},
  {path:'/Profile',component:Profile,meta:{showFooter:true}},
  {path:'/Login',component:Login},
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
