import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import VueRouter from 'vue-router'
import store from './vuex/store'
import Vuex from 'vuex'
import NProgress from 'nprogress'//页面顶部进度条
import Axios from 'axios'
import 'nprogress/nprogress.css'


import Login from './components/Login.vue'
import Register from './components/Register.vue'
import Home from './components/Home.vue'
import Main from './components/Main.vue'
import NewList from './components/menu/newList.vue'
import DayList from './components/menu/dayList.vue'
import SevenList from './components/menu/sevenList.vue'
import ThirtyList from './components/menu/ThirtyList.vue'
import VuexComp from './components/nav2/VuexComp.vue'
import Page5 from './components/nav2/Page5.vue'
import Page6 from './components/nav3/Page6.vue'
import echarts from './components/charts/echarts.vue'
import PublishEdit from './page/PublishEdit.vue'
import PublishAdd from './page/PublishAdd.vue'

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.prototype.axios = Axios

const routes = [
    {
        path: '/login',
        component: Login,
        hidden: true
    },{
        path: '/register',
        component: Register,
        hidden: true
    },
    {
        path: '/',
        component: Home,
        name: '导航--推荐榜单',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            { path: '/', component: Main, name: 'Home' ,hidden:true},
            { path: '/new-list.html', component: NewList, name: '新上榜' },
            { path: '/day-list.html', component: DayList, name: '日报' },
            { path: '/seven-list.html', component: SevenList, name: '7日热门' },
            { path: '/thirty-list.html', component: ThirtyList, name: '30日热门' },
            { path: '/publishEdit', component: PublishEdit, name: '编辑文章' },
            { path: '/publishAdd', component: PublishAdd, name: '发表文章' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '导航二',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/vuex.html', component: VuexComp, name: 'Vuex' },
            { path: '/page5.html', component: Page5, name: '测试页面' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '导航三',
        iconCls: 'fa fa-address-card',
        leaf: true,
        children: [
            { path: '/page6', component: Page6, name: '导航三' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: 'Charts',
        iconCls: 'fa fa-bar-chart',
        children: [
            { path: '/echarts.html', component: echarts, name: 'echarts' }
        ]
    },
    {
        path: '*',
        redirect: '/',
        hidden: true
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

router.beforeEach((to, from, next) => {
    NProgress.start();
    next()
})

router.afterEach(transition => {
    NProgress.done();
});

new Vue({
    el: '#app',
    template: '<App/>',
    router,
    store,
    components: { App }
}).$mount('#app')

//router.replace('/login')

