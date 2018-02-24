<template>
	<div class="sidebar">
        <el-menu default-active="/" class="el-menu-vertical-demo" router unique-opened>
            <el-menu-item index="/">
                <i class="el-icon-fa-home"></i>主页
            </el-menu-item>
            <el-submenu index="2">
                <template slot="title"><i class="el-icon-fa-table"></i>表格</template>
                <el-menu-item index="/table" >基础表格</el-menu-item>
                <el-menu-item index="vuetable">Vue表格组件</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title"><i class="el-icon-fa-newspaper-o"></i>表单</template>
                <el-menu-item index="/from">基本表单</el-menu-item>
                <el-menu-item index="editor">编辑器</el-menu-item>
                <el-menu-item index="markdown">markdown</el-menu-item>
                <el-menu-item index="upload">文件上传</el-menu-item>
            </el-submenu>
            <el-submenu index="4">
                <template slot="title"><i class="el-icon-fa-bar-chart-o"></i>图表</template>
                <el-menu-item index="/chart">基础图表</el-menu-item>
                <el-menu-item index="mixcharts">混合图表</el-menu-item>
            </el-submenu>
            <el-menu-item index="/user" >
                <i class="el-icon-fa-user-o"></i>登录
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
	export default {
		data () {
			return {
				isCollapse: true
			}
		}
	}
</script>

<style>
	.sidebar{width: 225px;margin-left: 20px;margin-top: 20px;}
</style>