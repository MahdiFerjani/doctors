import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import HomePage2 from '../views/HomePage2.vue'
import SignUp from '../views/Signup.vue'
import DoctorList from '../views/DoctorList.vue'
import DoctorDetail from '../views/DoctorDetail.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/home2',
    name: 'Home2',
    component: HomePage2
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/list',
    name: 'DoctorList',
    component: DoctorList
  },
  {
    path :'/doctor/:id',
    name:'DoctorDetail',
    component:DoctorDetail
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
