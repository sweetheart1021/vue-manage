<!--
 * @Descripttion:
 * @Author: lvjing
 * @Date: 2020-01-19 16:03:00
 * @LastEditors  : lvjing
 * @LastEditTime : 2020-01-20 11:24:14
 -->
<template>
    <div>
        <div class="a-guide-alert">
            <span>quill {{ $t("lang.component.quill.title") }}</span>
            <br>
            {{ $t("lang.component.quill.desc") }}
        </div>
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
                @click="handleContent('html')">{{ $t("lang.component.quill.html") }}</el-button>
            <el-button
                type="danger"
                @click="handleContent('text')">{{ $t("lang.component.quill.text") }}</el-button>
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
.a-guide-alert{
    padding: 24px 40px;
    text-align: left;
    background: #f8f8f9;
    border-radius: 4px;
    margin-bottom: 20px;
    span{
        font-size: 16px;
        font-weight: bold;
    }
}
.a-editor-footer{
    margin-top: 60px;
    text-align: center;
}
</style>
