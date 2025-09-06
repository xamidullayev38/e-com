import { createMemoryHistory, createRouter } from 'vue-router'

import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Contact from '../pages/Contact.vue'
import ProductList from '../pages/ProductList.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/productlist', component: ProductList },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})
export default router