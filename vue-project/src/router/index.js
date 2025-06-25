import { createRouter, createWebHistory } from 'vue-router'

import AboutMe from '@/components/AboutMe.vue'
import Projects from '@/components/Projects.vue'
import Publications from '@/components/Publications.vue'
import Experience from '@/components/Experience.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'AboutMe',
      component: AboutMe,
    },
    {
      path: "/projects",
      name: "Projects",
      component: Projects,
    },
    {
      path: "/publications",
      name: "Publications",
      component: Publications,
    },
    {
      path: "/experience",
      name: "Experience",
      component: Experience,
    },
  ],
})

export default router
