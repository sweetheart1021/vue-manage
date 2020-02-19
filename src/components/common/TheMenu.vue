<!--
 * @Descripttion:
 * @version:
 * @Author: lvjing
 * @Date: 2020-01-17 23:25:17
 * @LastEditors: lvjing
 * @LastEditTime: 2020-02-19 14:59:22
 -->
<template>
    <el-menu
        :collapse="isCollapse"
        :default-active="selectIndex"
        class="a-menu"
        background-color="#1d1e23"
        text-color="#fff"
        router
        unique-opened
        @select="handleSelect">
        <template
            v-for="(item, index) in menus"
        >
            <el-submenu
                v-if="item.children"
                :index="item.path"
                :key="index"
                popper-class="haveChildren">
                <template slot="title">
                    <i :class="item.meta.icon"></i>
                    <span slot="title">
                        {{ $t(item.meta.name ) }}
                    </span>
                </template>
                <el-menu-item-group>
                    <el-menu-item
                        v-for="(chlid, childIndex) in item.children"
                        :key="childIndex"
                        :index="`${item.path}/${chlid.path}`">
                        <div class="a-menu-icon-wapper">
                            <i :class="chlid.meta.icon"></i>
                        </div>
                        <span>{{ $t(chlid.meta.name) }}</span>
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-menu-item
                v-else
                :key="index"
                :index="item.path">
                <i :class="item.meta.icon"></i>
                <span slot="title">{{ $t(item.meta.name) }}</span>
            </el-menu-item>
        </template>
    </el-menu>
</template>

<script>
import {rootRoute} from '@/router/main.js';
import { mapState, mapMutations } from 'vuex';
export default {
    data() {
        return {
            menus: rootRoute.children,
            selectIndex: '',
            brea: []
        };
    },
    computed: {
        ...mapState({
            isCollapse: (state) => state.Common.isCollapse
        })
    },
    watch: {
        '$route': {
            handler(val) {
                this.brea = [];
                this.brea = val.matched.filter(v => v.path);
                this.$store.commit('SET_BREAD', this.brea);
                this.selectIndex = val.path;
            },
            immediate: true
        }
    },
    mounted() {
        let index = sessionStorage.getItem('index');
        this.selectIndex = index || '/home/console';
    },
    methods: {
        ...mapMutations([
            'SET_BREAD'
        ]),
        handleSelect(index, path) {
            this.selectIndex = index;
            sessionStorage.setItem('index', index);
        }
    }
};
</script>

<style lang="less" scoped>
.a-menu{
    user-select: none;
    border-right: none;
}
.a-menu-icon-wapper{
    display: inline-block;
    width: 30px;
    text-align: center;
}
::-webkit-scrollbar {
    display:none
}
</style>
