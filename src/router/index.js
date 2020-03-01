import Vue from 'vue'
import VueRouter from 'vue-router'

const home = () => import('../views/home/Home')
const kind = () => import('../views/kind/Kind')
const mine = () => import('../views/mine/Mine')
const shop = () => import('../views/shop/Shop')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: home
  },
  {
    path: '/kind',
    component: kind
  },
  {
    path: '/mine',
    component: mine
  },
  {
    path: '/shop',
    component: shop
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach()

//解决连续push两次相同path出错的问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router
