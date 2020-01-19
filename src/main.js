/*
 * @Descripttion:
 * @Author: lvjing
 * @Date: 2020-01-19 09:54:39
 * @LastEditors: lvjing
 * @LastEditTime: 2020-01-19 10:02:57
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './vuex';
import ElementUI from 'element-ui';
import './style/theme/index.css';
import './style/index.less';

Vue.use(ElementUI, { size: 'small', zIndex: 3000 });

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
});
