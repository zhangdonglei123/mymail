import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home/Home'
import Catagory from '@/views/catagory/Catagory'
import Cart from '@/views/cart/Cart'
import Profile from '@/views/profile/Profile'

Vue.use(VueRouter)
const router = new VueRouter({
    routes: [{
        path: '/home',
        component: Home
    }, {
        path: '/catagory',
        component: Catagory
    }, {
        path: '/cart',
        component: Cart
    }, {
        path: '/profile',
        component: Profile
    }],
    mode: 'history'
})

export default router