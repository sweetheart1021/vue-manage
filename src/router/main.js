/*
 * @Descripttion:
 * @version:
 * @Author: lvjing
 * @Date: 2020-01-17 23:19:18
 * @LastEditors  : lvjing
 * @LastEditTime : 2020-01-19 11:23:52
 */
const Layout = () => import('@/views/layout');
const Home = () => import('@/views/home');
const Console = () => import('@/views/home/children/console');

const Component = () => import('@/views/component');
const Guide = () => import('@/views/guide');

// 总体根路由
const rootRoute = {
    path: '/',
    redirect: '/home',
    component: Layout,
    children: []
};

const routeList = [
    {
        path: '/home',
        component: Home,
        redirect: '/home/console',
        meta: {
            premission: true,
            show: true,
            icon: 'el-icon-s-home',
            name: '主页'
        },
        children: [
            {
                path: 'console',
                component: Console,
                meta: {
                    premission: true,
                    show: true,
                    icon: 'el-icon-s-grid',
                    name: '控制台'
                }
            }
        ]
    },
    {
        path: '/component',
        component: Component,
        meta: {
            premission: true,
            show: true,
            icon: 'iconfont icon-zujian',
            name: '组件'
        }
    },
    {
        path: '/guide',
        component: Guide,
        meta: {
            premission: true,
            show: true,
            icon: 'iconfont icon-yindao',
            name: '引导页'
        }
    }
];

rootRoute.children = routeList;

export {
    rootRoute,
    routeList
};
