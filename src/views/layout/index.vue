<!--
 * @Descripttion:
 * @version:
 * @Author: lvjing
 * @Date: 2020-01-18 10:45:48
 * @LastEditors  : lvjing
 * @LastEditTime : 2020-01-20 16:09:54
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
                <span
                    v-if="!isCollapse"
                    class="a-logo-name">{{ $t('lang.logo') }}</span>
            </div>
            <div class="a-menu">
                <the-menu></the-menu>
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
                            <template v-if="item.meta">
                                <i :class="item.meta.icon"></i>
                                <span>
                                    {{ $t(item.meta.name) }}
                                </span>
                            </template>
                        </el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
                <div class="a-header-right">
                    <div class="a-header-right-icon">
                        <i
                            :class=" !isScreen ? 'iconfont icon-quanping' : 'iconfont icon-quitquanping'"
                            @click="toggleFullScreen">
                        </i>
                    </div>
                    <div class="a-header-right-icon">
                        <el-badge
                            :value="12"
                            style="line-height: 1">
                            <i
                                class="iconfont icon-ziyuan"
                                @click="handleNotice">
                            </i>
                        </el-badge>
                    </div>
                    <el-dropdown
                        trigger="click"
                        placement="bottom">
                        <div class="a-header-welcome">
                            <img
                                :src="src"
                                alt="">
                            <span class="a-header-settting">
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
                        <div class="a-header-right-icon">
                            <i class="iconfont icon-yuyan"></i>
                        </div>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="zh,简体中文">
                                简体中文
                            </el-dropdown-item>
                            <el-dropdown-item
                                disabled
                                command="en">
                                English
                            </el-dropdown-item>
                            <el-dropdown-item command="ja,日本語">
                                日本語
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </div>
            <div
                :style="contentWidth"
                class="a-content">
                <div class="a-main">
                    <router-view />
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import TheMenu from '@/components/common/TheMenu';
import logo from '@/images/logo.jpg';
import { mapState, mapMutations } from 'vuex';
export default {
    components: {
        TheMenu
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
            this.$i18n.locale = command.split(',')[0];
            sessionStorage.setItem('locale', command.split(',')[0]);
            this.$message.success(`${this.$t('lang.message')}${command.split(',')[1]}`);
        },
        handleNotice() {
            this.$router.push({path: '/list/notice'});
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
    z-index: 2021;
    .a-logo{
        height: 60px;
        text-align: center;
        position: relative;
        border-bottom: 1px solid #101117;
        line-height: 60px;
        padding: 0 10px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        img{
            width: 30px;
            height: 30px;
            border-radius: 90px;
            display: inline-block;
            vertical-align: middle;
        }
        .a-logo-name{
            color: white;
            font-weight: bold;
            font-size: 16px;
            line-height: 60px;
            height: inherit;

        }
    }
    .a-menu{
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
        position: absolute;
        top: 0px;
        width: 100%;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
        line-height: 60px;
        transition: padding-left 0.3s;
        background: white;
        z-index: 2020;
        .el-icon-s-fold,
        .el-icon-s-unfold{
            cursor: pointer;
            font-size: 20px;
        }
        .a-header-bread{
            display: inline-block;
            margin-left: 20px;
        }
        .a-header-right{
            float: right;
            margin-right: 20px;
            .a-header-right-icon{
                display: inline-block;
                cursor: pointer;
                i{
                    line-height: 1;
                    display: inline-block;
                    padding: 0 10px;
                }
                i:hover{
                    color: #6190E8;
                }
                .icon-ziyuan{
                    position: relative;
                    top: -2px
                }
            }
            .a-header-right-icon:hover{
                border-bottom: 2px solid #6190E8;
            }

            .a-header-welcome{
                display: inline-block;
                padding: 0 10px;
                cursor: pointer;
                user-select: none;
                margin-left: 15px;
                img{
                    width: 26px;
                    height: 26px;
                    border-radius: 90px;
                    line-height: 60px;
                    vertical-align: middle;
                }
            }
            .a-header-welcome:hover{
                background: #f8f8f9;
                color: #6190E8;
                border-bottom: 2px solid #6190E8;
            }
        }
    }
    .a-content{
        padding: 60px 10px 0 0px;
        transition: padding-left 0.3s;
        height: calc(100vh - 60px);
        background: #f2f2f2;
        .a-main{
            margin-top: 10px;
            height: calc(100vh - 80px);
            background: white;
            overflow-x: hidden;
            overflow-y: auto;
            padding: 5px;
        }
    }
}
</style>
