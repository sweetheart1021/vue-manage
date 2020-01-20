/*
 * @Descripttion:
 * @Author: lvjing
 * @Date: 2020-01-20 09:35:39
 * @LastEditors  : lvjing
 * @LastEditTime : 2020-01-20 10:37:16
 */
export const steps = [
    {
        element: '.el-icon-s-fold', // 显示高亮的元素
        popover: {
            title: 'Hamburger', // 引导标题
            description: 'Open && Close sidebar', // 引导描述
            position: 'bottom' // 引导出现的位置
        }
    },
    {
        element: '.a-header-bread', // 显示高亮的元素
        popover: {
            title: 'Breadcrumb', // 引导标题
            description: 'Indicate the current page location', // 引导描述
            position: 'bottom' // 引导出现的位置
        }
    },
    {
        element: '.icon-quanping', // 显示高亮的元素
        popover: {
            title: 'Screenfull', // 引导标题
            description: 'Set the page into fullscreen', // 引导描述
            position: 'bottom' // 引导出现的位置
        }
    },
    {
        element: '.icon-ziyuan', // 显示高亮的元素
        popover: {
            title: 'message notification', // 引导标题
            description: '先填写步骤1', // 引导描述
            position: 'left' // 引导出现的位置
        }
    },
    {
        element: '.a-header-settting', // 显示高亮的元素
        popover: {
            title: 'Personal Settings', // 引导标题
            description: '先填写步骤1', // 引导描述
            position: 'left' // 引导出现的位置
        }
    },
    {
        element: '.icon-yuyan', // 显示高亮的元素
        popover: {
            title: 'Multilingual switching', // 引导标题
            description: 'chinese, Japanese', // 引导描述
            position: 'left' // 引导出现的位置
        }
    }
];

export default steps;
