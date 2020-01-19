/*
 * @Descripttion: 公共的mutation
 * @Author: lvjing
 * @Date: 2019-09-06 17:16:14
 * @LastEditors  : lvjing
 * @LastEditTime : 2020-01-15 10:33:28
 */

const mutations = {
    SET_COLLAPSE(state, data) {
        state.isCollapse = data;
    },
    SET_LOADING(state, data) {
        state.loading = data ? false : !state.loading;
    }
};

export default mutations;
