import { createRouter, createWebHistory } from 'vue-router'
const Home = () => import("@/pages/Home");
const Catalog = () => import("@/pages/Catalog");
const Registration = () =>  import("@/pages/Registration");
const About = () => import("@/pages/About");
const Product = () => import("@/pages/Product");
const Basket = () => import("@/pages/Basket");
const WishList = () => import("@/pages/WishList");
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
  },
  {
    path: '/about/:aboutVariant',
    name: 'About',
    component:About
  },
  {
    path: '/product/:id',
    name: 'Product',
    component:Product
  },
  {
    path: '/basket',
    name:'Basket',
    component:Basket
  },
  {
    path: '/wishlist',
    name:'Wishlist',
    component:WishList
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
