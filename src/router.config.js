import home from './components/home.vue';
import follow from './components/follow.vue';
import column from './components/column.vue';

import login from './components/login.vue';
import reg from './components/reg.vue';
import detail from './components/detail.vue';
import error from './components/error.vue';
const routes=[
    {path:'/home',component:home},
    {path:'/follow',component:follow},
    {path:'/column',component:column},

    {path:'/login',component:login},
    {path:'/reg',component:reg},
    {path:'/detail/:id',component:detail},
    {path:'*',component:error},
    {path:'/',redirect:'/home'},

]
export default routes
