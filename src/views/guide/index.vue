<!--
 * @Descripttion:
 * @version:
 * @Author: lvjing
 * @Date: 2020-01-17 23:05:52
 * @LastEditors  : lvjing
 * @LastEditTime : 2020-01-20 11:26:38
 -->
<template>
    <div class="a-guide">
        <div class="a-guide-alert">
            {{ $t("lang.guide.title") }}
            <a
                href="https://github.com/kamranahmedse/driver.js"
                target="_blank">driver.js</a>
        </div>
        <el-button
            type="primary"
            @click.prevent.stop="handleDriver">
            <i class="el-icon-question"></i>
            {{ $t("lang.guide.btn") }}
        </el-button>
    </div>
</template>

<script>
import Driver from 'driver.js';
import 'driver.js/dist/driver.min.css';
import steps from '@/utils/defineSteps'; // 用来存放引导的步骤
export default {
    name: 'Guide',
    data() {
        return {
            driver: null
        };
    },
    mounted() {
        this.driver = new Driver();
    },
    methods: {
        handleDriver() {
            this.driver.defineSteps(steps);
            this.driver.start();
        }
    }
};
</script>

<style lang="less" scoped>
.a-guide-alert{
    padding: 24px 40px;
    text-align: left;
    background: #f8f8f9;
    border-radius: 4px;
    margin-bottom: 20px;
    a{
        color: #6190E8;
        text-decoration: none;
    }
}
.el-icon-question{
    font-size: 16px;
    margin-right: 2px;
}
</style>
