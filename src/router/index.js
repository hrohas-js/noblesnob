import { createRouter, createWebHistory } from 'vue-router'
const Home = () => import("@/pages/Home");
const Catalog = () => import("@/pages/Catalog");
const Registration = () =>  import("@/pages/Registration")
const routes = [
  {
    path:'/',
    name:'Home',
    component:Home
  },
  {
    path: '/catalog',
    name:'Catalog',
    component:Catalog
  },
  {
    path: '/registration',
    name: 'Registration',
    component:Registration
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
