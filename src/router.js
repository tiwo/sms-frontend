import { createRouter, createWebHashHistory } from 'vue-router'
import Dashboard from './views/Dashboard.vue'
import TechnicalInfo from './views/TechnicalInfo.vue'
import About from './views/About.vue'

const routes = [
    {
         path: '/',
         name: 'Dashboard',
         component: Dashboard,
    },
    {
        path: '/debug',
        name: 'TechnicalInfo',
        component: TechnicalInfo,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    }
]

const router = createRouter({
    routes,
    history: createWebHashHistory(),
})



export { router }