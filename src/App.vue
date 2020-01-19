<!--
 * @Descripttion:
 * @version:
 * @Author: lvjing
 * @Date: 2020-01-17 22:16:04
 * @LastEditors  : lving
 * @LastEditTime : 2020-01-18 09:25:58
 -->
<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'App'
};
</script>

<style>
body{
    padding: 0px;
    margin: 0px;
    font-size: 14px;
    color: #515a6e;
}
#app{
    overflow-x: hidden;
    overflow-y: auto;
    width: 100%;
    height: 100%;
}
</style>
