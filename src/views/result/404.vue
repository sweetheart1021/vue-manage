<!--
 * @Descripttion:
 * @Author: lvjing
 * @Date: 2020-01-19 17:47:41
 * @LastEditors  : lvjing
 * @LastEditTime : 2020-01-19 20:52:19
 -->
<template>
    <div class="a-retult">
        <div class="a-result-404">
            <img
                :src="src"
                alt=""
                class="a-result-img">
            <transition name="el-zoom-in-bottom">
                <div
                    v-show="animation"
                    class="a-retult-right">
                    <h1 class="a-result-title">OOPS!</h1>
                    <p class="a-result-info">All rights reserved <span>wallstreetcn</span></p>
                    <p class="a-result-desc">The webmaster said that you can not enter this page...</p>
                    <p class="a-result-info">Please check that the URL you entered is correct, or click the button below to return to the homepage.</p>
                    <el-button
                        type="primary"
                        round
                        @click="handldeBack">
                        Back to home
                    </el-button>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
import Src from '../../../static/404.png';
export default {
    data() {
        return {
            src: Src,
            animation: false
        };
    },
    mounted() {
        this.animation = true;
    },
    methods: {
        handldeBack() {
            history.go(-1);
        }
    }
};
</script>

<style lang="less" scoped>
.a-retult{
    position: relative;
}
.a-result-404{
    width: 900px;
    position: absolute;
    top: 120px;
    left: 50%;
    transform: translate(-50%, 0);

}
.a-result-img{
    width: 600px;
    float: left;
}
.a-retult-right{
    width: 300px;
    float: left;
    .a-result-title{
        font-size: 32px;
        color: #6190E8;
        font-weight: bold;
    }
    .a-result-info{
        font-size: 13px;
        color: grey;
        margin-bottom: 20px;
        span{
            cursor: pointer;
            color: #6190E8;
        }
    }
    .a-result-desc{
        font-size: 20px;
        line-height: 24px;
        color: #222;
        margin-bottom: 20px;
    }
}
</style>
