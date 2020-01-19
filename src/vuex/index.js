/*
 * @Descripttion:
 * @Author: lvjing
 * @Date: 2019-09-06 17:24:59
 * @LastEditors: lvjing
 * @LastEditTime: 2019-09-06 17:36:23
 */
import Vue from 'vue';
import Vuex from 'vuex';

import Common from './common';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        Common
    }
});

export default store;
