<!--
 * @Descripttion:
 * @Author: lvjing
 * @Date: 2020-01-20 13:49:07
 * @LastEditors  : lvjing
 * @LastEditTime : 2020-01-20 15:56:49
 -->
<template>
    <div class="a-goods">
        <el-row :gutter="20">
            <el-col
                v-for="(item, index) in list"
                :key="index"
                :xs="12"
                :sm="8"
                :xl="6">
                <div class="a-goods-item">
                    <img
                        :src="item.url"
                        alt="">
                    <h4 class="a-goods-title">{{ item.title }}</h4>
                    <p class="a-goods-desc">{{ item.desc }}</p>
                    <p class="a-goods-price">
                        <span>{{ item.price }}</span>
                        <s v-if="item.s">{{ item.s }}</s>
                    </p>
                    <div
                        v-if="item.tag"
                        class="a-goods-tag"
                    >
                        <el-tag
                            v-if="item.type === &quot;primary&quot;"
                            type="primary">{{ $t(item.tagName) }}</el-tag>
                        <el-tag
                            v-if="item.type === &quot;success&quot;"
                            type="success">{{ $t(item.tagName) }}</el-tag>
                        <el-tag
                            v-if="item.type === &quot;danger&quot;"
                            type="danger">{{ $t(item.tagName) }}</el-tag>
                    </div>
                </div>
            </el-col>
        </el-row>
        <base-pgae></base-pgae>
    </div>
</template>

<script>
import BasePgae from '@/components/common/BasePage';
import img1 from '../../../static/list/img1.png';
import img2 from '../../../static/list/img2.png';
import img3 from '../../../static/list/img3.png';
import img4 from '../../../static/list/img4.png';
import img5 from '../../../static/list/img5.png';
import img6 from '../../../static/list/img6.png';
export default {
    components: {
        BasePgae
    },
    data() {
        return {
            list: [
                {url: img1, title: 'Vue.js实战', desc: 'Vue.js 作者尤雨溪作序', price: '¥ 69 ', tag: true, tagName: 'lang.list.goods.recommended', type: 'primary'},
                {url: img2, title: '蒙马特城市安全防盗背包', desc: 'XDDESIGN 经典版', price: '¥ 350 ', s: ' ¥ 450 ', tag: true, tagName: 'lang.list.goods.stockout', type: 'success'},
                {url: img3, title: '京东 E 卡（100元）', desc: '面值 100 元的京东E卡（电子卡）', price: '¥ 100 '},
                {url: img4, title: 'Cherry 机械键盘背光版', desc: 'Cherry MX BOARD 1.0', price: '¥ 1450 '},
                {url: img5, title: 'Sony 无线立体声耳机', desc: 'WH-H800', price: '¥ 69 ', tag: true, tagName: 'lang.list.goods.specialOffer', type: 'danger'},
                {url: img6, title: '妙控鼠标 2 - 银色', desc: 'Apple Mouse', price: '¥ 528 '}
            ]
        };
    }
};
</script>

<style lang="less" scoped>
.a-goods-item{
    text-align: center;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    margin-bottom: 10px;
    padding: 20px 0;
    position: relative;
    cursor: pointer;
    img{
        width: 230px;
        grid-row-end: 230px;
    }
    .a-goods-title{
        font-size: 16px;
        font-weight: bold;
    }
    .a-goods-desc{
        font-size: 14px;
        color: #808695;
        margin: 5px 0;
    }
    .a-goods-price{
        font-size: 14px;
        color: #ff6700;
        s{
            color: #c5c8ce;
        }
    }
    .a-goods-tag{
        position: absolute;
        top: 15px;
        right: 20px;
    }
}
.a-goods-item:hover{
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
    border-color: #eee;
}
</style>
