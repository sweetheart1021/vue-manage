<!--
 * @Descripttion:
 * @Author: lvjing
 * @Date: 2020-01-20 13:54:06
 * @LastEditors  : lvjing
 * @LastEditTime : 2020-01-20 16:51:40
 -->
<template>
    <div class="a-notice">
        <div class="a-notice-btn">
            <el-button type="danger">{{ $t('lang.list.notice.delete') }}</el-button>
            <el-button type="primary">{{ $t('lang.list.notice.readly') }}</el-button>
            <el-button type="primary">{{ $t('lang.list.notice.all') }}</el-button>
        </div>
        <el-tabs
            type="border-card"
            @tab-click="handleTabClick">
            <el-tab-pane
                v-for="(item, index) in list"
                :key="index">
                <span slot="label">
                    <i :class="item.icon"></i>
                    {{ $t(item.name) }}
                </span>
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
                            <el-link
                                type="primary"
                                style="font-size: 12px;">{{ scope.row.date }}</el-link>
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
            </el-tab-pane>
        </el-tabs>
        <base-page
            :page="params.page"
            :page-size="params.pageSize"
            @page="handlePage">
        </base-page>
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
            list: [
                {icon: 'el-icon-date', name: 'lang.list.notice.table.all'},
                {icon: 'el-icon-edit-outline', name: 'lang.list.notice.table.todo'},
                {icon: 'el-icon-chat-dot-round', name: 'lang.list.notice.table.notice'},
                {icon: 'el-icon-message', name: 'lang.list.notice.table.email'}
            ],
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
            }],
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
        },
        handleTabClick() {
            this.params.page = 1;
            this.params.pageSize = 10;
        }
    }
};
</script>

<style lang="less" scoped>
.a-notice-btn{
    margin-bottom: 20px;
}
</style>
