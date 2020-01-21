/*
 * @Descripttion:
 * @Author: lvjing
 * @Date: 2020-01-20 20:39:30
 * @LastEditors  : lvjing
 * @LastEditTime : 2020-01-20 20:46:57
 */
const Form = () => import('@/views/form');

const Basic = () => import('@/views/form/basic');

const Senior = () => import('@/views/form/senior');

const FormRoute = {
    path: '/form',
    component: Form,
    redirect: '/form/basic',
    meta: {
        premission: true,
        show: true,
        icon: 'iconfont icon-shifouyunxuweiwanchengpandianrenwukaidan',
        name: 'lang.menu.form'
    },
    children: [
        {
            path: 'basic',
            component: Basic,
            meta: {
                premission: true,
                show: true,
                icon: 'iconfont icon-jichubiaodan',
                name: 'lang.menu.formBasic'
            }
        },
        {
            path: 'senior',
            component: Senior,
            meta: {
                premission: true,
                show: true,
                icon: 'iconfont icon-gaojibiaodan',
                name: 'lang.menu.formSenior'
            }
        }
    ]
};

export default FormRoute;
