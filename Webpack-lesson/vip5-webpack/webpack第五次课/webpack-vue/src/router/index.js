import Vue from 'vue';

import VueRouter from 'vue-router'
import Page1 from '@/pages/page1.vue'
import Page2 from '@/pages/page2.vue'


//使用插件

Vue.use(VueRouter); //执行install方法

export default new VueRouter({
    mode:'hash', //history
    routes:[{
        path:'/page1',
        name:'page1',
        component:Page1,
        beforeEnter(from,to,next){
            console.log(`beforeEnterhome from ${from} to ${to}`);
            setTimeout(()=>{
                next();
            },1000)
        }
    },{
        path:'/page2',
        name:'page2',
        component:Page2
    },
    {
        path: "/login",
        name: "logintest",
        component: ()=>import('@/pages/login.vue'),
      },]
})