<!--
 * @Descripttion:
 * @Author: lvjing
 * @Date: 2020-01-19 17:12:20
 * @LastEditors  : lvjing
 * @LastEditTime : 2020-01-19 17:33:36
 -->
<template>
    <div class="a-result">
        <i class="el-icon-success"></i>
        <p class="a-result-title">提交成功</p>
        <p class="a-result-desc">
            提交结果页用于反馈一系列操作任务的处理结果，如果仅是简单操作，使用 Message 全局提示反馈即可。灰色区域可以显示一些补充的信息。
        </p>
        <div class="a-result-extra">
            已提交申请，等待部门审核。
        </div>
        <div class="a-result-footer">
            <el-button type="primary">返回列表</el-button>
            <el-button>查看信息</el-button>
        </div>
    </div>
</template>

<script>
export default {

};
</script>

<style lang="less" scoped>
.a-result{
    text-align: center;
    padding-top: 80px;
    width: 60%;
    margin: auto;
    & .el-icon-success{
        font-size: 100px;
        color: #19be6b
    }
    & .a-result-title{
        font-size: 30px;
        color: #17233d;
    }
    & .a-result-desc{
        margin-bottom: 20px;
    }
    & .a-result-extra{
        padding: 24px 40px;
        text-align: left;
        background: #f8f8f9;
        border-radius: 4px;
    }
    & .a-result-footer{
        padding: 30px;
    }
}

</style>
