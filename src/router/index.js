import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import( '../views/HomePage.vue'),
    meta: {
      title: "Главная страница"
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) =>{
  document.title = `${to.meta.title}`;
  next()
})
export default router
