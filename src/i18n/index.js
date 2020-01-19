/*
 * @Descripttion:
 * @Author: lvjing
 * @Date: 2020-01-16 14:01:25
 * @LastEditors  : lvjing
 * @LastEditTime : 2020-01-19 14:52:23
 */
import Vue from 'vue';
import VueI18n from 'vue-i18n';
import * as zh from './zh/index.js';
import * as ja from './ja/index.js';

import zhLocale from 'element-ui/lib/locale/lang/zh-CN';
import jaLocale from 'element-ui/lib/locale/lang/ja';

Vue.use(VueI18n);

const i18n = new VueI18n({
    locale: sessionStorage.getItem('locale') || 'ja',
    // this.$i18n.locale // 通过切换locale的值来实现语言切换
    messages: {
        zh: Object.assign(zh, zhLocale), // 中文语言包
        ja: Object.assign(ja, jaLocale) // 日语语言包
    }
});

export default i18n;
