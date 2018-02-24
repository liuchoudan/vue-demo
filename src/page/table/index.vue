<template>
	<div class="app-container">
			<el-row type="flex" justify="center">
				<el-col :span="24">
					<div  class="widget">
						<div class="widget-header">Basic Table</div>
						<div class="widget-body">
							<!-- 数据表格 -->
							<el-table :data="tableData" style="width:100%;" border stripe>
								<el-table-column type="index" align="center" label="序号" width="65">
								</el-table-column>

								<el-table-column align="center" label="名称" prop="name">
								</el-table-column>

								<el-table-column align="center" label="邮箱" prop="email">
								</el-table-column>

								<el-table-column align="center" label="性别" prop="sex">
								</el-table-column>

								<el-table-column align="center" label="分数" prop="score" sortable>
								</el-table-column>
							</el-table>
							<!-- 分页组件 -->
							<div style="margin-top:5px;">
								<el-pagination :total="page.total" :page-size="page.size" :page-sizes="page.sizes" :page-count="page.count" 
									:current-page="page.current" layout="total, sizes, prev, pager, next, jumper">
								</el-pagination>
							</div>
						</div>
					</div>
				</el-col>
			</el-row>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				title: 'Basic Table',
				page:{
					total: 100,
					size: 10,
					sizes:[10,20,30,50],
					count:10,
					current:5
				},
				tableData:[
					{
						name: '张三',
						email: 'AAAAAAAA@163.com',
						sex: '男',
						score: 88
					},
					{
						name: '张三',
						email: 'AAAAAAAA@163.com',
						sex: '男',
						score: 100
					},
					{
						name: '张三',
						email: 'AAAAAAAA@163.com',
						sex: '男',
						score: 33
					},
					{
						name: '张三',
						email: 'AAAAAAAA@163.com',
						sex: '男',
						score: 66
					},
					{
						name: '张三',
						email: 'AAAAAAAA@163.com',
						sex: '男',
						score: 22
					},
					{
						name: '张三',
						email: 'AAAAAAAA@163.com',
						sex: '男',
						score: 99
					},
					{
						name: '张三',
						email: 'AAAAAAAA@163.com',
						sex: '男',
						score: 88
					},
					{
						name: '张三',
						email: 'AAAAAAAA@163.com',
						sex: '男',
						score: 88
					},
					{
						name: '张三',
						email: 'AAAAAAAA@163.com',
						sex: '男',
						score: 88
					},
					{
						name: '张三',
						email: 'AAAAAAAA@163.com',
						sex: '男',
						score: 88
					}

				]
			}
		}
	}
</script>

<style>
@import "../../assets/css/base.css";
</style>