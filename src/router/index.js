import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const staticRoutes = [
  {
    path: '/login',
    name: 'login',
    meta: {
      index: 0,
      needlogin: false
    }, 
    component: resolve => require(['@/pages/login/Login.vue'], resolve)
  },
  {
    path: '/404',
    name: '404',
    meta: {
      index: 0,
      needlogin: false
    },
    component: resolve => require(['@/pages/404/404.vue'], resolve)
  },
  {
    path: '/401',
    name: '401',
    meta: {
      index: 0,
      needlogin: false
    }, 
    component: resolve => require(['@/pages/401/401.vue'], resolve)
  },
]

export const constantRoutes = [
  ...staticRoutes,
  {
    path: '/',
    name: 'index',
    meta: { 
      index: 0,
      needlogin: false 
    }, 
    component: resolve => require(['@/pages/index/Index.vue'],resolve)
  },
  {
    path: '/detail',
    name: 'detail',
    meta: { 
      index: 1,
      needlogin: false 
    }, 
    component: resolve => require(['@/pages/detail/Detail.vue'],resolve)
  },
  {
    path: '/car',
    name: 'car',
    meta: { 
      index: 1,
      needlogin: false 
    }, 
    component: resolve => require(['@/pages/car/Car.vue'],resolve)
  },
  {
    path: '/network',
    name: 'network',
    meta: { 
      index: 1,
      needlogin: false 
    }, 
    component: resolve => require(['@/pages/network/NetWork.vue'],resolve)
  },
  {
    path: '/city',
    name: 'city',
    meta: { 
      index: 1,
      needlogin: false 
    }, 
    component: resolve => require(['@/pages/city/City.vue'],resolve)
  }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ x: 0,y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router