import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/index'
import Farming from '../pages/farming'
import About from '../pages/about'
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'index',
        component: Home
    },
    {
        path: '/farming',
        name: 'farming',
        component: Farming
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router