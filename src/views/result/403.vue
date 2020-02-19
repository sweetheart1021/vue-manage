<!--
 * @Descripttion:
 * @Author: lvjing
 * @Date: 2020-01-19 17:48:01
 * @LastEditors: lvjing
 * @LastEditTime: 2020-02-19 14:54:10
 -->
<template>
    <div class="a-result-403">
        <el-button
            type="primary"
            class="a-result-btn"
            @click="handleBack">
            <i class="el-icon-back"></i>
            {{ $t('lang.result.page403.btn') }}
        </el-button>
        <el-row>
            <el-col :span="12">
                <div class="a-result-left">
                    <h1 class="a-result-title">Oops!</h1>
                    <p class="a-result-source">{{ $t('lang.result.page403.source') }}</p>
                    <h2 class="a-result-desc">{{ $t('lang.result.page403.title') }}</h2>
                    <div class="a-result-bottom">
                        <h6 class="a-result">{{ $t('lang.result.page403.func') }}</h6>
                        <ul>
                            <li>{{ $t('lang.result.page403.other.name') }}:</li>
                            <li>
                                <el-link
                                    type="primary"
                                    @click="handleLi('/home')"
                                >
                                    {{ $t('lang.result.page403.other.home') }}
                                </el-link>
                            </li>
                            <li>
                                <el-link
                                    type="primary"
                                    @click="handleTaobao"
                                >
                                    {{ $t('lang.result.page403.other.look') }}
                                </el-link>
                            </li>
                            <li>
                                <el-link
                                    type="primary"
                                    @click="dialogVisible=true"
                                >
                                    {{ $t('lang.result.page403.other.img') }}
                                </el-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </el-col>
            <el-col :span="12">
                <img
                    v-if="isShow"
                    :src="src"
                    alt="">
            </el-col>
        </el-row>
        <el-dialog
            :visible.sync="dialogVisible"
            :title="$t('lang.result.page403.other.modalTitle')"
            width="840px"
            top="20px">
            <img
                src="https://wpimg.wallstcn.com/007ef517-bafd-4066-aae4-6883632d9646"
                alt="">
        </el-dialog>
    </div>
</template>

<script>
import Src403 from '@/../static/403.gif';
export default {
    data() {
        return {
            src: Src403,
            isShow: false,
            dialogVisible: false,
            animation: false
        };
    },
    mounted() {
        this.animation = true;
        this.isShow = true;
    },
    destroyed() {
        this.isShow = false;
    },
    methods: {
        handleLi(path) {
            this.$router.push({path: path});
        },
        handleTaobao() {
            window.open('https://www.taobao.com');
        },
        handleBack() {
            history.go(-1);
        }
    }
};
</script>

<style lang="less" scoped>
.a-result-403{
    width: 800px;
    max-width: 100%;
    margin: 80px auto;
    .a-result-title{
        font-size: 70px;
        font-weight: 700;
        color: #484848;
    }
    .a-result-desc{
        font-weight: 700;
        color: #484848;
        font-size: 24px;
    }
}
.a-result-btn{
    animation: animation 0.6s ease-in forwards;
}
.a-result-title{
    animation: animation 0.3s ease-in forwards;
}
.a-result-left{
    animation: animation 0.4s ease-in forwards;
}
.a-result-bottom{
    animation: animation 0.5s ease-in forwards;
}

@keyframes animation {
    0% {
        opacity: 0;
        transform: translateX(-60px);
    }
    100% {
        opacity: 1;
        transform: translateX(0px);
    }
}
</style>
