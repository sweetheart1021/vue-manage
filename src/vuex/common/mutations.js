/*
 * @Descripttion: 公共的mutation
 * @Author: lvjing
 * @Date: 2019-09-06 17:16:14
 * @LastEditors  : lvjing
 * @LastEditTime : 2020-01-19 13:40:18
 */

const mutations = {
    SET_COLLAPSE(state, data) {
        state.isCollapse = data;
    },
    SET_BREAD(state, data) {
        state.bread = data;
    }
};

export default mutations;
