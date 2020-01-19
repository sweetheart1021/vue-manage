<!--
 * @Descripttion:
 * @Author: lvjing
 * @Date: 2020-01-19 16:03:00
 * @LastEditors  : lvjing
 * @LastEditTime : 2020-01-19 17:05:15
 -->
<template>
    <div>
        <el-alert
            :closable="false"
            title="quill 富文本编辑器"
            description="一款轻巧方便的富文本编辑器"
            type="info"
            effect="dark"
            class="a-edit-alert">
        </el-alert>
        <template>
            <quill-editor
                ref="editor"
                :content="content"
                style="height: 400px"
                @change="onEditorChange($event)">
            </quill-editor>
        </template>
        <div class="a-editor-footer">
            <el-button
                type="primary"
                @click="handleContent('html')">获取html值</el-button>
            <el-button
                type="danger"
                @click="handleContent('text')">获取text值</el-button>
        </div>
    </div>
</template>

<script>
import { quillEditor } from 'vue-quill-editor';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
export default {
    components: {
        quillEditor
    },
    data() {
        return {
            content: `<h2>quill 编辑器</h2>
                官方文档地址：
                <a href="https://quilljs.com/docs/api/#settext">https://quilljs.com/docs/api/#settext</a>`,
            main: ''
        };
    },
    methods: {
        onEditorChange(val) {
            this.main = val;
        },
        handleContent(type) {
            console.log(this.main[type]);
            this.$message.success('数据获取成功，请打开控制台查看');
        }
    }
};
</script>

<style lang="less" scoped>
.a-edit-alert{
    margin-bottom: 20px;
}
.a-editor-footer{
    margin-top: 60px;
    text-align: center;
}
</style>
