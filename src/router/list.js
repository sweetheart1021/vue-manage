/*
 * @Descripttion:
 * @Author: lvjing
 * @Date: 2020-01-20 13:49:28
 * @LastEditors  : lvjing
 * @LastEditTime : 2020-01-20 16:02:23
 */
const List = () => import('@/views/list');

const Goods = () => import('@/views/list/goods');

const Notice = () => import('@/views/list/notice');

const Table = () => import('@/views/list/table');

const ListRoute = {
    path: '/list',
    component: List,
    redirect: '/list/goods',
    meta: {
        premission: true,
        show: true,
        icon: 'iconfont icon-chazhaobiaodanliebiao',
        name: 'lang.menu.list'
    },
    children: [
        {
            path: 'goods',
            component: Goods,
            meta: {
                premission: true,
                show: true,
                icon: 'iconfont icon-shangpin',
                name: 'lang.menu.goods'
            }
        },
        {
            path: 'notice',
            component: Notice,
            meta: {
                premission: true,
                show: true,
                icon: 'el-icon-bell',
                name: 'lang.menu.notice'
            }
        },
        {
            path: 'table',
            component: Table,
            meta: {
                premission: true,
                show: true,
                icon: 'el-icon-s-grid',
                name: 'lang.menu.table'
            }
        }
    ]
};

export default ListRoute;
