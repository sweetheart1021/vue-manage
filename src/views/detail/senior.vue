<!--
 * @Descripttion:
 * @Author: lvjing
 * @Date: 2020-01-20 16:28:14
 * @LastEditors  : lvjing
 * @LastEditTime : 2020-01-20 19:01:04
 -->
<template>
    <div class="a-senior">
        <el-divider content-position="left">
            <span style="font-weight: bold">出差审批编号：100000</span>
        </el-divider>
        <el-row>
            <el-col
                v-for="(item, index) in list"
                :key="index"
                :xs="12"
                :sm="8"
                :lg="6"
                :xl="6">
                <div class="a-senior_info">
                    <span class="a-basic_title">{{ item.label }}：</span>
                    <span v-if="!item.tag">{{ item.value }}</span>
                    <el-tag
                        v-else
                        type="danger">{{ item.value }}</el-tag>
                </div>
            </el-col>
        </el-row>
        <el-divider content-position="left">
            <span style="font-weight: bold">审核流程</span>
        </el-divider>
        <el-steps
            :active="3"
            class="a-step">
            <el-step
                description="申请时间：2019-09-21 12:23:43">
                <span
                    slot="title"
                    class="a-step_title">申请人：Aresn</span>
            </el-step>
            <el-step
                description="审批时间：2019-09-21 12:23:43">
                <span
                    slot="title"
                    class="a-step_title">审批人：中小鱼</span>
            </el-step>
            <el-step
                description="审批时间：2019-09-21 12:23:43">
                <span
                    slot="title"
                    class="a-step_title">审批人：Echo</span>
            </el-step>
            <el-step>
                <span
                    slot="title"
                    class="a-step_title">审批人：糖糖</span>
            </el-step>
            <el-step>
                <span
                    slot="title"
                    class="a-step_title">审批人：如意</span>
            </el-step>
        </el-steps>
        <el-divider content-position="left">
            <span style="font-weight: bold">行程信息</span>
        </el-divider>
        <el-row>
            <el-col
                v-for="(item, index) in trip"
                :key="index"
                :xs="12"
                :sm="8"
                :lg="6"
                :xl="6">
                <div class="a-senior_info">
                    <span class="a-basic_title">{{ item.label }}：</span>
                    <span v-if="!item.tag">{{ item.value }}</span>
                    <el-tag
                        v-else
                        type="danger">{{ item.value }}</el-tag>
                </div>
            </el-col>
        </el-row>
        <el-divider content-position="left">
            <span style="font-weight: bold">同行人员</span>
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
                prop="no"
                label="工号">
            </el-table-column>
            <el-table-column
                prop="dep"
                label="所属部门">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: [
                {label: '申请人', value: 'Aresn'},
                {label: '审批人', value: '中小鱼'},
                {label: '状态', value: '待审批'},
                {label: '出差事由', value: '与客户签署合同'},
                {label: '合同编号', value: '100000'},
                {label: '紧急程度', value: '紧急', tag: true},
                {label: '出差时间', value: '2019-07-28 - 2019-07-30'},
                {label: '出差地点', value: '北京'},
                {label: '随行人员', value: '秘书'}
            ],
            trip: [
                {label: '出发城市', value: '北京市'},
                {label: '出发时间', value: '2019-07-28'},
                {label: '返程时间', value: '2019-07-30'},
                {label: '交通类型', value: '飞机'},
                {label: '航班到达城市', value: '深圳市'}
            ],
            tableData: [
                {name: 'Aresn', sex: 1, no: '001', dep: '开发部'},
                {name: '中小鱼', sex: 1, no: '002', dep: '行政部'},
                {name: 'Aresn', sex: 2, no: '003', dep: '人事部'},
                {name: 'Echo', sex: 2, no: '004', dep: '财务部'}
            ]
        };
    }
};
</script>

<style lang="less" scoped>
.a-senior{
    padding: 0 20px;
    &_info{
        margin-bottom: 10px;
        box-sizing: border-box;
        height: 30px;
    }
    .a-step{
        margin-bottom: 40px;
        &_title{
            font-size: 14px !important;
        }
    }
}
</style>
