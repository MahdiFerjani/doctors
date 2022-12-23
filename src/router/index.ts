import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import HomePage2 from '../views/HomePage2.vue'
import SignUp from '../views/SignupPage.vue'
import DoctorList from '../views/DoctorList.vue'
import DoctorDetail from '../views/DoctorDetail.vue'
import signin from '../views/SinginPage.vue'
import profile from '../views/ProfilePage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/signup'
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp
  },
  {
    path: '/profile',
    name: 'profile',
    component: profile
  },
  {
    path: '/signin',
    name: 'signin',
    component: signin
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
