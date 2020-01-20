/*
 * @Descripttion:
 * @version:
 * @Author: lvjing
 * @Date: 2020-01-17 23:19:18
 * @LastEditors  : lvjing
 * @LastEditTime : 2020-01-20 16:30:30
 */
// 结果页面
import ResultRouter from './result';

// 列表页面
import ListRoute from './list';

// 详情页面
import DetailRoute from './detail';

const Layout = () => import('@/views/layout');
const Home = () => import('@/views/home');
const Console = () => import('@/views/home/console');

const Component = () => import('@/views/component');
const Editor = () => import('@/views/component/editor');

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
            name: 'lang.menu.home'
        },
        children: [
            {
                path: 'console',
                component: Console,
                meta: {
                    premission: true,
                    show: true,
                    icon: 'el-icon-s-grid',
                    name: 'lang.menu.console'
                }
            }
        ]
    },
    {
        path: '/component',
        component: Component,
        redirect: '/component/editor',
        meta: {
            premission: true,
            show: true,
            icon: 'iconfont icon-zujian',
            name: 'lang.menu.component'
        },
        children: [
            {
                path: 'editor',
                component: Editor,
                meta: {
                    premission: true,
                    show: true,
                    icon: 'iconfont icon-fuwenben',
                    name: 'lang.menu.editor'
                }
            }
        ]
    },
    {
        path: '/guide',
        component: Guide,
        meta: {
            premission: true,
            show: true,
            icon: 'iconfont icon-yindao',
            name: 'lang.menu.guide'
        }
    },
    ResultRouter,
    ListRoute,
    DetailRoute
];

rootRoute.children = routeList;

export {
    rootRoute,
    routeList
};
