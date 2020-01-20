/*
 * @Descripttion:
 * @Author: lvjing
 * @Date: 2020-01-19 14:38:20
 * @LastEditors  : lvjing
 * @LastEditTime : 2020-01-20 12:16:55
 */
import { common } from './common';
import { component } from './component';
import { result } from './result';

const lang = {
    ...common,
    component: {
        ...component
    },
    result: {
        ...result
    }
};

export {
    lang
};
