/*
 * @Descripttion:
 * @Author: lvjing
 * @Date: 2020-01-20 16:28:35
 * @LastEditors  : lvjing
 * @LastEditTime : 2020-01-20 16:34:43
 */
const Detail = () => import('@/views/detail');

const Basic = () => import('@/views/detail/basic');

const Senior = () => import('@/views/detail/senior');

const DetailRoute = {
    path: '/detail',
    component: Detail,
    redirect: '/detail/basic',
    meta: {
        premission: true,
        show: true,
        icon: 'iconfont icon-xiangqing',
        name: 'lang.menu.detail'
    },
    children: [
        {
            path: 'basic',
            component: Basic,
            meta: {
                premission: true,
                show: true,
                icon: 'iconfont icon-jichu',
                name: 'lang.menu.basic'
            }
        },
        {
            path: 'senior',
            component: Senior,
            meta: {
                premission: true,
                show: true,
                icon: 'iconfont icon-gaoji',
                name: 'lang.menu.senior'
            }
        }
    ]
};

export default DetailRoute;
