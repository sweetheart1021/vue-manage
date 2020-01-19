/*
 * @Descripttion:
 * @version:
 * @Author: lvjing
 * @Date: 2020-01-17 23:19:18
 * @LastEditors  : lving
 * @LastEditTime : 2020-01-18 10:47:36
 */
const Login = () => import('@/views/login');
const Layout = () => import('@/views/layout');
const Home = () => import('@/views/home');
const Component = () => import('@/views/component');
const Guide = () => import('@/views/guide');

const routeList = [
    {
        path: '/',
        redirect: '/home',
        component: Layout,
        children: [
            {
                path: '/home',
                component: Home,
                meta: {
                    premission: true
                }
            },
            {
                path: '/component',
                component: Component,
                meta: {
                    premission: true
                }
            },
            {
                path: '/guide',
                component: Guide,
                meta: {
                    premission: true
                }
            }
        ]
    },
    {
        path: '/login',
        component: Login
    }
];

export default routeList;
