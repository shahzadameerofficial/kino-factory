import Vue from 'vue'
import VueRouter from 'vue-router';
import DashboardComponent from '../pages/dashboard/dashboard.vue';
// import PageNotFound from '../pages/pagenotfound/PageNotFound.vue'

import { orchardRoutes } from './routes/orchard-routes';
import { generalContractRoutes } from './routes/general-contract-routes';
import { inventoryRoutes } from './routes/inventoryRoutes'
import { salesRoutes } from './routes/salesRoutes';
import { productionsRoutes } from './routes/productionsRoutes';
import { transactionsRoutes } from './routes/transactionsRoutes';
import { managementRoutes } from './routes/managementRoutes';

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/orchards/management/orchard-panel'
    },
    // {
    //     path: '/:pathMatch(.*)*',
    //     component: PageNotFound
    // },

    {
        path: '/dashboard',
        name: 'DashboardComponent',
        component: DashboardComponent,
    },
    ...orchardRoutes,
    ...generalContractRoutes,
    ...productionsRoutes,
    ...salesRoutes,
    ...inventoryRoutes,
    ...transactionsRoutes,
    ...managementRoutes,

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
