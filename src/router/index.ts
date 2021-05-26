import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/order',
    name: 'Order',
    component: () => import('../views/order/FormOrder.vue')
  },
  {
    path: '/order/:order_id',
    name: 'OrderDetail',
    component: () => import('../views/order/DetailOrder.vue')
  },
  {
    path: '/packing',
    name: 'Packing',
    component: () => import('../views/packing/FormPacking.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
