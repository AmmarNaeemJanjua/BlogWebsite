// Composables
import { createRouter, createWebHistory } from 'vue-router'

import LoginForm from '../components/LoginForm.vue'
import SignupForm from '../components/SignupForm.vue'
import Home from '../views/Home.vue'
import AdminView from '../views/AdminView.vue' 
import UserData from '../components/UserData.vue'
import UserView from '../views/UserView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginForm,
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupForm,
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminView,
  },
  {
    path: '/userdata',
    name: 'userdata',
    component: UserData,
  },
  {
    path: '/userview',
    name: 'userview',
    component: UserView,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
