import { createRouter, createMemoryHistory } from 'vue-router'
import Skills from '../components/Skills.vue'
import Contacts from '../components/Contacts.vue'
import Projects from '../components/Projects.vue'
import Resume from '../components/Resume.vue'

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
    path: '/projects',
    component: Projects
  },
  {
    path: '/resume',
    component: Resume
  },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

export default router