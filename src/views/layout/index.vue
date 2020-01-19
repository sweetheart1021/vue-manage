<!--
 * @Descripttion:
 * @version:
 * @Author: lvjing
 * @Date: 2020-01-18 10:45:48
 * @LastEditors  : lvjing
 * @LastEditTime : 2020-01-19 14:29:37
 -->
<template>
    <div class="a-web">
        <aside
            :style="menuWidth"
            class="a-aside">
            <div class="a-logo">
                <img
                    :src="src"
                    alt="">
                <div
                    v-if="!isCollapse"
                    class="a-logo-name">后台管理系统</div>
            </div>
            <div class="a-menu">
                <base-menu></base-menu>
            </div>

        </aside>
        <section class="a-section">
            <div
                :style="contentWidth"
                class="a-header">
                <i
                    :class="!isCollapse ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
                    @click="handleIsCollapse"></i>
                <div class="a-header-bread">
                    <el-breadcrumb separator-class="el-icon-arrow-right">
                        <el-breadcrumb-item
                            v-for="(item, index) in bread"
                            :to="{ path: item.path }"
                            :key="index">
                            <i :class="item.meta.icon"></i>
                            {{ item.meta.name }}
                        </el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
                <div class="a-header-right">
                    <i
                        :class=" !isScreen ? 'iconfont icon-quanping' : 'iconfont icon-quitquanping'"
                        @click="toggleFullScreen">
                    </i>
                    <el-badge
                        :value="12"
                        style="line-height: 1">
                        <i class="iconfont icon-ziyuan"></i>
                    </el-badge>
                    <el-dropdown
                        trigger="click"
                        placement="bottom">
                        <div class="a-header-welcome">
                            <img
                                :src="src"
                                alt="">
                            <span>
                                {{ $t('lang.header.welcome') }}：admin
                                <i
                                    class="el-icon-arrow-down el-icon--right"
                                    style="margin: 0;padding: 0"></i>
                            </span>
                        </div>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>
                                <i
                                    class="el-icon-key"
                                    style="margin-right: 0">
                                </i>
                                {{ $t('lang.header.changePwd') }}
                            </el-dropdown-item>
                            <el-dropdown-item>
                                <i
                                    class="el-icon-setting"
                                    style="margin-right: 0">
                                </i>
                                {{ $t('lang.header.setting') }}
                            </el-dropdown-item>
                            <el-dropdown-item>
                                <i
                                    class="el-icon-switch-button"
                                    style="margin-right: 0">
                                </i>
                                {{ $t('lang.header.out') }}
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <el-dropdown
                        trigger="click"
                        placement="bottom"
                        @command="handleCommand">
                        <i class="iconfont icon-yuyan"></i>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="zh">
                                简体中文
                            </el-dropdown-item>
                            <el-dropdown-item
                                disabled
                                command="en">
                                English
                            </el-dropdown-item>
                            <el-dropdown-item command="ja">
                                日本語
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </div>
            <div
                :style="contentWidth"
                class="a-content">
                <router-view />
            </div>
        </section>
    </div>
</template>

<script>
import BaseMenu from '@/components/base/BaseMenu';
import logo from '@/images/logo.jpg';
import { mapState, mapMutations } from 'vuex';
export default {
    components: {
        BaseMenu
    },
    data() {
        return {
            src: logo,
            isScreen: false
        };
    },
    computed: {
        ...mapState({
            isCollapse: (state) => state.Common.isCollapse,
            bread: (state) => state.Common.bread
        }),
        // logo div的宽度
        menuWidth() {
            return this.isCollapse ? {
                width: '64px'
            } : {
                width: '220px'
            };
        },
        contentWidth() {
            return this.isCollapse ? {
                'padding-left': '74px'
            } : {
                'padding-left': '230px'
            };
        }
    },
    methods: {
        ...mapMutations([
            'SET_COLLAPSE'
        ]),
        handleIsCollapse() {
            this.$store.commit('SET_COLLAPSE', !this.isCollapse);
        },
        toggleFullScreen() {
            this.isScreen = !this.isScreen;
            // alternative standard method
            if (!document.fullscreenElement &&
                !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) { // current working methods
                if (document.documentElement.requestFullscreen) {
                    document.documentElement.requestFullscreen();
                } else if (document.documentElement.msRequestFullscreen) {
                    document.documentElement.msRequestFullscreen();
                } else if (document.documentElement.mozRequestFullScreen) {
                    document.documentElement.mozRequestFullScreen();
                } else if (document.documentElement.webkitRequestFullscreen) {
                    document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
                }
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen();
                }
            }
        },
        handleCommand(command) {
            this.$i18n.locale = command;
            sessionStorage.setItem('locale', command);
        }
    }
};
</script>

<style lang="less" scoped>
.a-aside{
    position: fixed;
    left: 0px;
    top: 0px;
    bottom: 0px;
    height: 100%;
    background: #1d1e23;
    z-index: 1;
    overflow: hidden;
    transition: width 0.3s;
    & .a-logo{
        height: 60px;
        text-align: center;
        position: relative;
        border-bottom: 1px solid #101117;
        line-height: 60px;
        & img{
            width: 30px;
            height: 30px;
            border-radius: 90px;
            display: inline-block;
            vertical-align: middle;
        }
        & .a-logo-name{
            color: white;
            font-weight: bold;
            font-size: 16px;
            display: inline-block;
            line-height: 60px;
            height: inherit;
        }
    }
    & .a-menu{
        height: calc(100vh - 60px);
        width: inherit;
        position: relative;
        overflow-x: hidden;
        overflow-y: auto;

    }
}
.a-section{
    .a-header{
        height: 60px;
        box-sizing: border-box;
        position: fixed;
        top: 0px;
        width: 100%;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
        line-height: 60px;
        transition: padding-left 0.3s;
        & .el-icon-s-fold,
        & .el-icon-s-unfold{
            cursor: pointer;
            font-size: 20px;
        }
        & .a-header-bread{
            display: inline-block;
            margin-left: 20px;
        }
        & .a-header-right{
            float: right;
            margin-right: 20px;
            i{
                cursor: pointer;
                display: inline-block;
                padding: 0 10px;
            }
            .icon-ziyuan{
                font-weight: bold;
            }
            i:hover{
                // background: #f8f8f9;
                color: #6190E8;
            }
            & .a-header-welcome{
                display: inline-block;
                padding: 0 10px;
                cursor: pointer;
                user-select: none;
                margin-left: 15px;
                & img{
                    width: 26px;
                    height: 26px;
                    border-radius: 90px;
                    line-height: 60px;
                    vertical-align: middle;
                }
            }
            & .a-header-welcome:hover{
                background: #f8f8f9;
                color: #6190E8;
            }
        }
    }
    .a-content{
        padding: 60px 10px 0 0px;;
        transition: padding-left 0.3s;
    }
}
</style>
