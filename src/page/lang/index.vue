<template>
	<div class="app-container">
		<el-row type="flex" justify="center">
			<el-col :span="24">
				<div class="widget">
					<div class="widget-header">{{title}}</div>
					<div class="widget-body widget-main">
						<div class="panel">
							<!--语言设置 -->
							<div class="block" style="height:50px;">
								<span class="wrapper">
									<el-button type="success" @click="setLang('zh-CN')">中文</el-button>
									<el-button type="info" @click="setLang('en-US')">English</el-button>
								</span>
							</div>
							<!-- 位置设置 -->
							<el-radio-group v-model="labelPosition" size="small">
								<el-radio-button label="left">左对齐</el-radio-button>
								<el-radio-button label="right">右对齐</el-radio-button>
								<el-radio-button label="top">顶部对齐</el-radio-button>
							</el-radio-group>
							<!-- 表单-->
							<div style="margin: 20px;"></div>
							<el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
								<el-form-item label="名称">
									<el-input v-model="formLabelAlign.username" style="width:300px;"></el-input>
								</el-form-item>
								<el-form-item label="活动区域">
									<el-input v-model="formLabelAlign.password" style="width:300px;"></el-input>
								</el-form-item>
								<el-form-item label="">
									<el-button type="success">{{$t('login')}}</el-button>
									<el-button type="info">注册</el-button>
									</el-form-item>
							</el-form>
						</div>
					</div>
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script>	
	export default {
		data() {
			return {
				title: '国际化表单',
				labelPosition: 'right',
				formLabelAlign: {
					username: '',
					password: ''
				}
			}
		},
		methods: {
			setLang  (value) {
				if(value == 'zh-CN') {
					this._i18n.locale = 'zh-CN';
				}
				else if(value == 'en-US'){
					this._i18n.locale = 'en-US';
				}
			}
		}
	}
</script>

<style>
	@import "../../assets/css/base.css"; 	
</style>