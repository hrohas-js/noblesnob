import { createRouter, createWebHistory } from 'vue-router'
const Home = () => import("@/pages/Home");

const routes = [
  {
    path:'/',
    name:'Home',
    component:Home
  },
  {
    path: 'kek'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
