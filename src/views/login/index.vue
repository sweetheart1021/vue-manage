<!--
 * @Descripttion:
 * @version:
 * @Author: lvjing
 * @Date: 2020-01-17 23:21:23
 * @LastEditors: lvjing
 * @LastEditTime: 2020-02-20 10:04:01
 -->
<template>
    <div class="login">
        <div class="login-wapper">
            <div style="text-align:center">
                <img
                    :src="src"
                    alt="">
            </div>
            <div class="login-content">
                <el-form
                    ref="formName"
                    :model="params"
                    :rules="rules"
                    :hide-required-asterisk="true"
                    label-position="top"
                    label-width="80px"
                    size="medium">
                    <el-form-item
                        :label="$t('lang.login.username')"
                        prop="username">
                        <el-input
                            v-model="params.username"
                            :placeholder="$t('lang.login.usernamePlaceholder')">
                        </el-input>
                    </el-form-item>
                    <el-form-item
                        :label="$t('lang.login.password')"
                        prop="password">
                        <el-input
                            v-model="params.password"
                            :placeholder="$t('lang.login.passwordPlaceholder')">
                        </el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-row>
                            <el-row>
                                <el-col style="text-align:right">
                                    <el-link :underline="false">{{ $t('lang.login.forget') }}~~</el-link>
                                </el-col>
                            </el-row>
                            <el-col :span="12">
                                <el-checkbox v-model="checked">
                                    {{ $t('lang.login.remenber') }}
                                </el-checkbox>
                            </el-col>
                            <el-col
                                :span="12"
                                style="text-align:right">
                                <el-button
                                    type="primary"
                                    size="small"
                                    @click="submitForm">
                                    {{ $t('lang.login.btn') }}
                                </el-button>
                            </el-col>
                        </el-row>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
import Logo from '@/../static/logo.png';
export default {
    data() {
        return {
            src: Logo,
            checked: false,
            params: {
                username: '',
                password: ''
            },
            rules: {
                username: [
                    { required: true, message: `${this.$t('lang.login.usernameRules1')}`, trigger: 'blur' },
                    { min: 3, max: 5, message: `${this.$t('lang.login.usernameRules2')}`, trigger: 'blur' }
                ],
                password: [
                    { required: true, message: `${this.$t('lang.login.passwordRules1')}`, trigger: 'blur' }
                ]
            }
        };
    },
    methods: {
        submitForm() {
            this.$refs['formName'].validate((valid) => {
                if (valid) {
                    this.$router.push({path: '/home'});
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        }
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
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.2);
    // border: 1px solid #ddd;
    border-radius: 6px;
    background: white;
    padding: 36px 36px 10px 36px;
    box-sizing: border-box;
}
</style>
