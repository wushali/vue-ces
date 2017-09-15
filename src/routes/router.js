import Vue from 'vue'
import Router from 'vue-router'
/*引入页面*/
import Login from '@/components/login.vue'
import User from '@/components/user.vue'
import Home from '@/components/home.vue'

Vue.use(Router)

/*配置路由*/
export default new Router({
    routes: [
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/user',
            name: 'User',
            component: User
        },
        {
            path: '/home',
            name: 'Home',
            component: Home
        }
    ]
})