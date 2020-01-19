/*
 * @Descripttion:
 * @version:
 * @Author: lvjing
 * @Date: 2020-01-17 22:16:04
 * @LastEditors  : lving
 * @LastEditTime : 2020-01-18 00:10:22
 */
import Vue from 'vue';
import Router from 'vue-router';

import routeList from './main';

Vue.use(Router);

const router = new Router({
    routes: routeList
});

router.beforeEach((to, from, next) => {
    next();
    // if (!to.meta.premission) {
    //     next();
    // } else {
    //     if (!sessionStorage.getItem("token")) {
    //         next({path: '/login'})
    //     } else {
    //         next();
    //     }
    // }
});

export default router;
