import VueRouter from 'vue-router'
import Vue from 'vue'

import TeamsPage from '../components/TeamsPage'
import WorkShift from '../components/WorkShift'

Vue.use(VueRouter)
const routes = [
    { path: '/TeamsPage', component: TeamsPage },
    { path: '/WorkShift', component: WorkShift },
]

const router = new VueRouter({
    routes
})

export default router