<!--
 * @Descripttion:
 * @Author: lvjing
 * @Date: 2020-01-20 13:57:28
 * @LastEditors  : lvjing
 * @LastEditTime : 2020-01-20 14:03:59
 -->
<template>
    <div class="a-page">
        <el-pagination
            :current-page="page"
            :page-sizes="pageSizes"
            :page-size="pageSize"
            :total="total"
            background
            layout="total, sizes, prev, pager, next, jumper"
            @size-change="(val) => handleSizeChange({pageSize: val, page: page})"
            @current-change="(val) => handleSizeChange({pageSize: pageSize, page: val})">
        </el-pagination>
    </div>
</template>

<script>
export default {
    props: {
        page: {
            type: Number,
            default: 1
        },
        pageSize: {
            type: Number,
            default: 10
        },
        pageSizes: {
            type: Array,
            default: () => [10, 20, 50, 100]
        },
        total: {
            type: Number,
            default: 400
        }
    },
    methods: {
        handleSizeChange(data) {
            this.$emit('page', data);
        }
    }
};
</script>

<style lang="less" scoped>
.a-page{
    text-align: right;
    padding: 10px 0;
}
</style>
