import Vue from 'vue'
import VueRouter from 'vue-router'
import Zhihu from '../views/zhihu/index.vue'
import Home from '../views/home.vue'
import Vip from '../views/vip/index.vue'
import Explore from '../views/explore/index.vue'
import Question from '../views/question.vue'
import Login from '../views/login/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Zhihu',
    component: Zhihu
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/vip-web',
    name: 'Vip',
    component: Vip
  },
  {
    path: '/explore',
    name: 'Explore',
    component: Explore
  },
  {
    path: '/question/waiting',
    name: 'Question',
    component: Question
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router
