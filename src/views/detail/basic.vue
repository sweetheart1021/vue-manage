<!--
 * @Descripttion:
 * @Author: lvjing
 * @Date: 2020-01-20 16:27:52
 * @LastEditors  : lvjing
 * @LastEditTime : 2020-01-20 17:40:54
 -->
<template>
    <div>
        <template v-for="index in 2">
            <div
                :key="index"
                class="a-basic-info">
                <el-divider content-position="left">
                    <span style="font-weight: bold">基本信息</span>
                </el-divider>
                <el-row>
                    <el-col
                        v-for="item in 12"
                        :key="item"
                        :xs="12"
                        :sm="8"
                        :lg="6"
                        :xl="6">
                        <div class="a-basic">
                            <span class="a-basic_title">性别：</span>
                            <span>女</span>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </template>
        <div class="a-basic-info">
            <el-divider content-position="left">
                <span style="font-weight: bold">表格信息</span>
            </el-divider>
            <el-table
                ref="table"
                :data="tableData"
                border
                style="width: 100%">
                <el-table-column
                    prop="name"
                    label="姓名">
                    <template slot-scope="scope">
                        <el-link
                            type="primary"
                            style="font-size: 12px;
                        padding: 0">{{ scope.row.name }}</el-link>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="sex"
                    label="性别">
                    <template slot-scope="scope">
                        <span>{{ scope.row.sex === 1 ? '男' : '女' }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="city"
                    label="城市">
                </el-table-column>
                <el-table-column
                    prop="email"
                    label="邮箱">
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
            tableData: [
                {name: 'Aresn', sex: 1, city: '北京市', email: 'aresn@iview.design'},
                {name: '中小鱼', sex: 1, city: '上海市', email: 'aresn@iview.design'},
                {name: 'Aresn', sex: 2, city: '成都市', email: 'aresn@iview.design'},
                {name: 'Echo', sex: 2, city: '深圳市', email: 'aresn@iview.design'},
                {name: '唐不苦', sex: 1, city: '重启市', email: 'aresn@iview.design'},
                {name: '甜筒', sex: 2, city: '福州市', email: 'aresn@iview.design'}
            ],
            params: {
                page: 1,
                pageSize: 10
            }
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
.a-basic-info{
    padding: 0 20px;
}
.a-basic{
    margin-bottom: 20px;
    // &_title{
    //     font-weight: bold;
    // }
}
</style>
