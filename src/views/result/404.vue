<!--
 * @Descripttion:
 * @Author: lvjing
 * @Date: 2020-01-19 17:47:41
 * @LastEditors  : lvjing
 * @LastEditTime : 2020-01-20 13:41:57
 -->
<template>
    <div class="a-retult">
        <div class="a-result-404">
            <div class="a-result-img">
                <img
                    :src="src"
                    alt=""
                    class="a-result-img">
                <img
                    :src="clond1"
                    class="a-result-img_clond1"
                    alt="">
                <img
                    :src="clond1"
                    class="a-result-img_clond2"
                    alt="">
                <img
                    :src="clond1"
                    class="a-result-img_clond3"
                    alt="">
            </div>
            <div
                class="a-retult-right">
                <h1 class="a-result-title">OOPS!</h1>
                <p class="a-result-info">All rights reserved <span>wallstreetcn</span></p>
                <p class="a-result-desc">{{ $t('lang.result.page404.title') }}...</p>
                <p class="a-result-info a-result-info2">{{ $t('lang.result.page404.desc') }}.</p>
                <el-button
                    type="primary"
                    round
                    class="a-result-btn"
                    @click="handldeBack">
                    回到首页
                </el-button>
            </div>
        </div>
    </div>
</template>

<script>
import Src from '../../../static/404.png';
import Cloud1 from '../../../static/404_cloud.png';
export default {
    data() {
        return {
            src: Src,
            clond1: Cloud1,
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
    .a-result-img{
        position: relative;
        &_clond1{
            width: 80px;
            top: 17px;
            left: 220px;
            position: absolute;
            animation: cloudLeft 2s linear forwards;
        }
        &_clond2{
            width: 46px;
            top: 10px;
            left: 420px;
            position: absolute;
            animation: cloudMid 2s linear forwards;
        }
        &_clond3{
            width: 62px;
            top: 100px;
            left: 500px;
            position: absolute;
            animation: cloudRight 2s linear forwards;
        }
    }

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
        animation: slideUp .3s ease-in forwards;
    }
    .a-result-info{
        font-size: 13px;
        color: grey;
        margin-bottom: 20px;
        animation: slideUp .4s ease-in forwards;
        span{
            cursor: pointer;
            color: #6190E8;
        }
    }
    .a-result-info2{
        animation: slideUp .6s ease-in forwards;
    }
    .a-result-desc{
        font-size: 20px;
        line-height: 24px;
        color: #222;
        margin-bottom: 20px;
        animation: slideUp .5s ease-in forwards;
    }
    .a-result-btn{
        animation: slideUp .7s ease-in forwards;
    }
}

@keyframes slideUp {
    0% {
        transform: translateY(60px);
        opacity: 0;
    }
      100% {
        transform: translateY(0);
        opacity: 1!important;
    }
}
@keyframes cloudLeft {
    0% {
        top: 17px;
        left: 220px;
        opacity: 0;
    }
    20% {
        top: 33px;
        left: 188px;
        opacity: 1;
    }
    80% {
        top: 81px;
        left: 92px;
        opacity: 1;
    }
    100% {
        top: 97px;
        left: 60px;
        opacity: 0;
    }
}
@keyframes cloudMid {
    0% {
        top: 10px;
        left: 420px;
        opacity: 0;
    }
    20% {
        top: 40px;
        left: 360px;
        opacity: 1;
    }
    70% {
        top: 130px;
        left: 180px;
        opacity: 1;
    }
    100% {
        top: 160px;
        left: 120px;
        opacity: 0;
    }
}
@keyframes cloudRight {
    0% {
        top: 100px;
        left: 500px;
        opacity: 0;
    }
    20% {
        top: 120px;
        left: 460px;
        opacity: 1;
    }
    80% {
        top: 180px;
        left: 340px;
        opacity: 1;
    }
    100% {
        top: 200px;
        left: 300px;
        opacity: 0;
    }
}
</style>
