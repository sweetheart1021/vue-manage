/*
 * @Descripttion:
 * @Author: lvjing
 * @Date: 2020-01-19 09:54:39
 * @LastEditors  : lvjing
 * @LastEditTime : 2020-01-19 14:13:31
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
import i18n from './i18n';

import * as fundebug from 'fundebug-javascript';
import fundebugVue from 'fundebug-vue';
fundebug.init({
    apikey: '5d891ce6554898bab0678dabf831190bc287076b7f589e810a61677696b40084'
});
fundebugVue(fundebug, Vue);

Vue.use(ElementUI, {
    size: 'small',
    zIndex: 3000,
    i18n: (key, value) => i18n.t(key, value)
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    i18n,
    components: { App },
    template: '<App/>'
});
