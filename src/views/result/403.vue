<!--
 * @Descripttion:
 * @Author: lvjing
 * @Date: 2020-01-19 17:48:01
 * @LastEditors  : lvjing
 * @LastEditTime : 2020-01-19 18:19:39
 -->
<template>
    <div class="a-result-403">
        <el-button type="primary"><i class="el-icon-back"></i> 返回</el-button>
        <el-row>
            <el-col :span="12">
                <h1 class="a-result-title">Oops!</h1>
                <p class="a-result-source">gif来源airbnb 页面</p>
                <h2 class="a-result-desc">你没有权限去该页面</h2>
                <h6 class="a-result">如有不满请联系你领导</h6>
                <ul>
                    <li>或者你可以去:</li>
                    <li>
                        <el-link
                            type="primary"
                            @click="handleLi('/home')">回首页</el-link>
                    </li>
                    <li>
                        <el-link
                            type="primary"
                            @click="handleTaobao">随便看看</el-link>
                    </li>
                    <li>
                        <el-link
                            type="primary"
                            @click="dialogVisible=true">点我看图</el-link>
                    </li>
                </ul>
            </el-col>
            <el-col :span="12">
                <img
                    :src="src"
                    alt="">
            </el-col>
        </el-row>
        <el-dialog
            :visible.sync="dialogVisible"
            :before-close="handleClose"
            title="一张欢快的图片，祝你一天都有好心情！"
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
            dialogVisible: false
        };
    },
    methods: {
        handleLi(path) {
            this.$router.push({path: path});
        },
        handleTaobao() {
            window.open('https://www.taobao.com');
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
</style>
