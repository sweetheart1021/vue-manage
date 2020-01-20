<!--
 * @Descripttion:
 * @Author: lvjing
 * @Date: 2020-01-20 16:00:03
 * @LastEditors  : lvjing
 * @LastEditTime : 2020-01-20 16:24:14
 -->
<template>
    <div class="a-table">
        <div class="a-table_form">
            <el-form
                ref="form"
                :model="params"
                inline
                label-width="110px">
                <el-form-item label="活动名称：">
                    <el-input
                        v-model="params.name"
                        clearable
                        placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="活动区域">
                    <el-select
                        v-model="params.region"
                        placeholder="请选择"
                        clearable>
                        <el-option
                            label="区域一"
                            value="shanghai"></el-option>
                        <el-option
                            label="区域二"
                            value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="活动名称：">
                    <el-input
                        v-model="params.name"
                        clearable
                        placeholder="请选择"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary">查询</el-button>
                    <el-button>重置</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div>
            <el-table
                ref="table"
                :data="tableData"
                border
                style="width: 100%">
                <el-table-column
                    type="selection"
                    width="60"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="date"
                    label="标题"
                    width="180">
                    <template slot-scope="scope">
                        <span class="a-nitice-name">{{ scope.row.date }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="date"
                    label="时间"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="姓名"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="address"
                    label="内容">
                </el-table-column>
            </el-table>
            <base-page
                :page="params.page"
                :page-size="params.pageSize"
                @page="handlePage">
            </base-page>
        </div>
    </div>
</template>

<script>
import BasePage from '@/components/common/BasePage';
export default {
    components: {
        BasePage
    },
    data() {
        return {
            params: {
                name: '',
                region: ''
            },
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }]
        };
    },
    methods: {
        handlePage(val) {
            this.params.page = val.page;
            this.params.pageSize = val.pageSize;
        }
    }
};
</script>

<style lang="less" scoped>
.a-table{
    &_form{
        margin-top: 20px;
        margin-bottom: 10px;
    }
}
</style>
