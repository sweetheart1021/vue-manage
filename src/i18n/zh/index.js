/*
 * @Descripttion:
 * @Author: lvjing
 * @Date: 2020-01-19 14:38:13
 * @LastEditors: lvjing
 * @LastEditTime: 2020-02-20 09:53:30
 */
import { common } from './common';
import { component } from './component';
import { result } from './result';
import { list } from './list';
import { login } from './login';

const lang = {
    ...common,
    component: {
        ...component
    },
    result: {
        ...result
    },
    list: {
        ...list
    },
    login: {
        ...login
    }
};

export {
    lang
};
