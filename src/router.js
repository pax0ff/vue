import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    meta: {
      layout: 'AppLayoutHome'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue'),
    meta: {
      layout: 'AppLayoutAbout'
    }
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: () => import('@/views/Contacts.vue'),
    meta: {
      layout: 'AppLayoutContacts'
    }
  },
  {
    path: '/form',
    name: 'Form',
    component: () => import('@/views/Form.vue'),
    meta: {
      layout: 'AppLayoutForm'
    }
  },
  {
    path: '/upload',
    name: 'Upload',
    component: () => import('@/views/UploadFiles'),
    meta: {
      layout: 'AppLayoutUploadFiles'
    }
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('@/views/Cart.vue'),
    meta: {
      layout: 'AppLayoutCart'
    }
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
