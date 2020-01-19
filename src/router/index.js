/*
 * @Descripttion:
 * @version:
 * @Author: lvjing
 * @Date: 2020-01-17 22:16:04
 * @LastEditors  : lvjing
 * @LastEditTime : 2020-01-19 13:44:07
 */
import Vue from 'vue';
import Router from 'vue-router';

import detaultRoute from './default';
import { rootRoute } from './main';

Vue.use(Router);

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err);
};

const router = new Router({
    routes: [...detaultRoute, ...[rootRoute]]
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
