/*
 * @Descripttion:
 * @Author: lvjing
 * @Date: 2020-01-19 14:38:13
 * @LastEditors  : lvjing
 * @LastEditTime : 2020-01-20 15:17:48
 */
import { common } from './common';
import { component } from './component';
import { result } from './result';
import { list } from './list';

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
    }
};

export {
    lang
};
