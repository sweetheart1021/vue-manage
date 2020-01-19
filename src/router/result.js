/*
 * @Descripttion:
 * @Author: lvjing
 * @Date: 2020-01-19 17:12:53
 * @LastEditors  : lvjing
 * @LastEditTime : 2020-01-19 17:52:28
 */
const Result = () => import('@/views/result');

const Success = () => import('@/views/result/success');

const Error = () => import('@/views/result/error');

const Page403 = () => import('@/views/result/403');

const Page404 = () => import('@/views/result/404');

const Page500 = () => import('@/views/result/500');

const ResultRoute = {
    path: '/result',
    component: Result,
    redirect: '/result/success',
    meta: {
        premission: true,
        show: true,
        icon: 'iconfont icon-jieguo',
        name: 'lang.menu.result'
    },
    children: [
        {
            path: 'success',
            component: Success,
            meta: {
                premission: true,
                show: true,
                icon: 'iconfont icon-chenggong',
                name: 'lang.menu.success'
            }
        },
        {
            path: 'error',
            component: Error,
            meta: {
                premission: true,
                show: true,
                icon: 'iconfont icon-shibai',
                name: 'lang.menu.error'
            }
        },
        {
            path: '403',
            component: Page403,
            meta: {
                premission: true,
                show: true,
                icon: 'iconfont icon-icon-test1',
                name: 'lang.menu.page403'
            }
        },
        {
            path: '404',
            component: Page404,
            meta: {
                premission: true,
                show: true,
                icon: 'iconfont icon-icon-test',
                name: 'lang.menu.page404'
            }
        },
        {
            path: '500',
            component: Page500,
            meta: {
                premission: true,
                show: true,
                icon: 'iconfont icon-icon-test2',
                name: 'lang.menu.page500'
            }
        }
    ]
};

export default ResultRoute;
