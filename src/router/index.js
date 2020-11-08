import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home/Home'

Vue.use(VueRouter)
const router = new VueRouter({
    routes: [{
            path: '/home',
            component: Home
        }

    ],
    mode: 'history'
})

export default router