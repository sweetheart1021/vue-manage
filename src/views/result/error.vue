<!--
 * @Descripttion:
 * @Author: lvjing
 * @Date: 2020-01-19 17:12:31
 * @LastEditors  : lvjing
 * @LastEditTime : 2020-01-19 17:36:41
 -->
<template>
    <div class="a-result">
        <i class="el-icon-error"></i>
        <p class="a-result-title">提交失败</p>
        <p class="a-result-desc">
            请核对并修改以下信息后，再重新提交。
        </p>
        <div class="a-result-extra">
            <p>您提交的内容有如下错误：</p>
            <p>
                <i class="el-icon-circle-close"></i>
                您的账户已被冻结
                <span class="a-result-btn">立即解冻 <i class="el-icon-arrow-right"></i></span>
            </p>
            <p>
                <i class="el-icon-circle-close"></i>
                您的账户还不具备申请资格
                <span class="a-result-btn">立即解冻 <i class="el-icon-arrow-right"></i></span>
            </p>
        </div>
        <div class="a-result-footer">
            <el-button type="primary">返回修改</el-button>
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
    & .el-icon-error{
        font-size: 100px;
        color: #ed4014
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
    & .el-icon-circle-close{
        color: rgb(237, 64, 20)
    }
    & .a-result-btn{
        cursor: pointer;
        color: #6190E8;
        margin-left: 15px;
    }
}

</style>
