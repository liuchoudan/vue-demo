<template>
	<div class="app-container">
		<el-row type="flex" justify="center">
			<el-col :span="24">
				<div class="bg-cont">
					<el-col :span="6" :offset="9" :xs="{span:'20',offset:'2'}">
					<div class="login-cont" >
							<div class="login-title">
								<span>ABCD</span>
							</div>
							<div class="login-body">
								<el-form :model="user" ref="ruleForm" label-width="0px" class="demo-ruleForm">
									<el-form-item prop="username">
										<el-input v-model="user.username" placeholder="帐号"></el-input>
									</el-form-item>
									<el-form-item prop="password">
										<el-input type="password" placeholder="密码" v-model="user.password" @keyup.enter.native="login()"></el-input>
									</el-form-item>
									<el-form-item>
										<el-col :span="14">
											<el-input v-model="user.mobile" placeholder="手机"></el-input>
										</el-col>
										<el-col :span="8" :offset="2">
											<el-input type="password" placeholder="验证码"></el-input>
										</el-col>
									</el-form-item>
									<div class="btns">
										<el-button type="primary" class="login-btn" @click="login">登录</el-button>
										<span class="reg-btn">注册</span>
										<span class="find-btn">找回密码</span>
									</div>
								</el-form>
							</div>
						</div>
					</el-col>
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
import api from '../../config/api'
import { mapActions } from 'vuex'
export default {
	data() {
		return {
			user:{
				username: '',
				password: '',
			},
			type:{
				success: 'success',
				warning: 'warning',
				info: 'info',
				error: 'error'
			}
		}
	},
	methods: {
		...mapActions(['setUserInfo']),
		login() {
			if( this.user.username === ''){
				this.dialog('请输入用户名',this.type.warning);
				return false;
			}
				
			if( this.user.password === ''){
				this.dialog('请输入密码',this.type.warning);
				return false;
			}

			api.Login(this.user).then(data => {
				if(data.status == true){
					console.log(data.user)
					this.setUserInfo(data.user);
					this.dialog(data.msg,this.type.success);
					//this.$router.push({path: '/table'});
					this.$router.replace('/')
				}else{
					this.dialog(data.msg,this.type.error);
				}
			}).catch(response => {
				this.dialog("服务器内部错误",this.type.error);
			});
		},
		dialog (msg,type) {
			this.$message({
			type: type,
			message: msg
		});
		}
	}
}
</script>


<style scope>
	@import "../../assets/css/base.css"; 
	.bg-cont{
		width: 100%;
		height: 100%;
		position: fixed;
		background: url('../../assets/image/bg.jpg') no-repeat center fixed;
		background-size: cover;
	}
	.login-cont{
		margin-top: 50%;

	}
	.login-title{
		margin: 0 auto;
		height: 44px;
		padding: 0 20px 2.6rem;
		box-sizing: content-box;
		color: #fff;
		text-align: center;
		font-weight: 500;
		font-size: 1.8rem;
		letter-spacing: 2px;
		height: 50px;
	}
	.login-body{
		background: rgba(255, 255, 255, 0.61);
		border: 1px solid rgba(255,255,255,.3);
		box-shadow: 0 3px 0 rgba(12, 12, 12, 0.03);
		border-radius: 3px;
		padding: 0px;
		height: 250px;
		padding: 30px;	
	}
	@media screen and (max-width: 768px) {
		.login-cont{
			margin-top: 20%;
		}
	}

	.login-btn{
		width:100%;
	}
	.btns{width: 100%;}
	.reg-btn{
		display:block;
		float: left;
		color: #51689f;
		font-size:12px;
		height: 30px;
		line-height:30px;
	}
	.find-btn{
		display: block;
		float: right;
		color: #51689f;
		font-size:12px;
		height: 30px;
		line-height:30px;
	}
</style>