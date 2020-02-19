<!--
 * @Descripttion:
 * @version:
 * @Author: lvjing
 * @Date: 2020-01-17 23:21:23
 * @LastEditors: lvjing
 * @LastEditTime: 2020-02-19 18:06:15
 -->
<template>
    <div class="login">
        <div class="login-wapper">
            <img
                :src="src"
                alt="">
            <div class="login-content">

            </div>
        </div>
    </div>
</template>

<script>
import Logo from '@/../static/logo.png';
export default {
    data() {
        return {
            src: Logo
        };
    }
};
</script>

<style lang="less" scoped>
.login{
    background-image: url('../../../static/bg.gif');
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0px;
    left: 0px;
}
.login-wapper{
    width: 404px;
    text-align: center;
    position: absolute;
    top: 100px;
    left: 50%;
    transform: translate(-201px, 0);
}
img{
    width: 196px;
    height: 46px;
    margin-bottom: 25px;
}
.login-content{
    width: 100%;
    height: 302px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.2);
    // border: 1px solid #ddd;
    border-radius: 6px;
    background: white;
}
</style>
