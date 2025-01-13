import { createRouter, createMemoryHistory } from 'vue-router'
import Skills from '../components/Skills.vue'
import Contacts from '../components/Contacts.vue'
import Portfolio from '../components/Portfolio.vue'
import Resume from '../components/Resume.vue'
import AboutMe from "../components/AboutMe.vue";

const routes = [
  {
    path: '/skills',
    component: Skills
  },
  {
    path: '/contacts',
    component: Contacts
  },
  {
    path: '/portfolio',
    component: Portfolio
  },
  {
    path: '/resume',
    component: Resume
  },
  {
    path: '/about-me',
    component: AboutMe
  }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

export default router