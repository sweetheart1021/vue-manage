<!--
 * @Descripttion:
 * @version:
 * @Author: lvjing
 * @Date: 2020-01-17 23:25:17
 * @LastEditors  : lving
 * @LastEditTime : 2020-01-18 23:05:03
 -->
<template>
    <el-menu
        :collapse="isCollapse"
        class="a-menu"
        background-color="#1d1e23"
        text-color="#fff"
        @open="handleOpen"
        @close="handleClose">
        <el-submenu index="1">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">导航一</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
                <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
                <span slot="title">选项4</span>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item
            index="3"
            disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
        </el-menu-item>
    </el-menu>
</template>

<script>
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState({
            isCollapse: (state) => state.Common.isCollapse
        })
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
};
</script>

<style lang="less" scoped>
.a-menu{
    user-select: none;
    border-right: none;
}
</style>
