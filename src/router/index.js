import { createRouter, createWebHistory ,createWebHashHistory} from 'vue-router';
const routes = [
    { path: '/', redirect: '/home' },
    {
        path: '/home',
        name: 'home',
        meta: {
            showTabbar: true,
            keepAlive: true,
        },
        component: () => import('@/view/home.vue')
    },
    {
        path: '/productDetail',
        name: 'productDetail',
        meta: {
        },
        component: () => import('@/view/home/productDetail.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/view/login.vue')
    },
    {
        path: '/me',
        name: 'me',
        meta: {
            showTabbar: true,
            keepAlive: true
        },
        component: () => import("@/view/me.vue")
    },
    {
        path: '/me1',
        name: 'me1',
        meta: {
            isLogin: true
        },
        component: () => import('@/view/me/me1.vue')
    },
    {
        path: '/myAddress',
        name: 'myAddress',
        meta: {
            isLogin: true
        },
        component: () => import('@/view/me/myAddress.vue')
    },
    {
        path: '/editAddress',
        name: 'editAddress',
        meta: {
            isLogin: true
        },
        component: () => import('@/view/me/editAddress.vue')
    },
    {
        path: '/shoppingCart',
        name: 'shoppingCart',
        meta: {
            isLogin: true
        },
        component: () => import('@/view/me/shoppingCart.vue')
    },
    {
        path: '/other',
        name: 'other',
        meta: {
            showTabbar: true,
            keepAlive: true
        },
        component: () => import("@/view/other.vue")
    },
    {
        path: '/other1',
        name: 'other1',
        meta: {
            isLogin: true
        },
        component: () => import("@/view/other/other1.vue")
    },
    {
        path: '/lucky',
        name: 'lucky',
        meta: {
            isLogin: true
        },
        component: () => import("@/view/other/lucky.vue")
    },
    {
        path: '/skeleton',
        name: 'skeleton',
        meta: {
            isLogin: true
        },
        component: () => import("@/view/other/skeleton.vue")
    }

]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
router.beforeEach((to, from, next) => {
    const user = localStorage.getItem('user')
    if (user != 'admin' && to.name != 'login' && to.meta.isLogin) {
        next('/login')
    } else {
        next()
    }
})



export default router;