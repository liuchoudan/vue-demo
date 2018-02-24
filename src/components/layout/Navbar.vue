<template>
	<div class="header">
		<el-row type="flex" justify="center">
			<el-col :span="24">
				<!-- 项目名称 -->
				<el-col class="nav-title" :span="1" :offset="1" :xs="titlexs">
				  	<a class="font-green font-size20 font-title">ABCD</a>
				</el-col>

				<!-- 菜单树 -->
				<el-col class="nav-icon" :span="1" :offset="0" :xs="firstxs" :pull="2">
				  	<a class="el-icon-fa-bars font-white font-size20"  @click="showMenu"></a>
				</el-col>
				
			  	<el-col class="nav-item" :span="1" :offset="offset" :xs="xs">
			  		<el-dropdown trigger="click" menu-align='start'>
				  			<span class="el-dropdown-link">
					        	<a class="el-icon-star-off font-white font-size20"></a>
					      	</span>
					        <el-dropdown-menu slot="dropdown">
					          <el-dropdown-item>查看</el-dropdown-item>
					          <el-dropdown-item>新增</el-dropdown-item>
					          <el-dropdown-item>删除</el-dropdown-item>
					        </el-dropdown-menu>
					</el-dropdown>
			  	</el-col>

			  	<el-col class="nav-item" :span="1" :offset="0" :xs="xs">
			  		<el-dropdown trigger="click" menu-align='start'>
				  			<span class="el-dropdown-link">
					        	<a class="el-icon-setting  font-white font-size20"></a>
					      	</span>
					        <el-dropdown-menu slot="dropdown">
					          <el-dropdown-item>查看</el-dropdown-item>
					          <el-dropdown-item>新增</el-dropdown-item>
					          <el-dropdown-item>删除</el-dropdown-item>
					        </el-dropdown-menu>
					</el-dropdown>
			  	</el-col>

			  	<el-col class="nav-item" :span="1" :offset="0" :xs="xs">
			  		<el-dropdown trigger="click" menu-align='start'>
				  			<span class="el-dropdown-link">
					        	<a class="el-icon-fa-user font-white font-size20"></a>
					      	</span>
					        <el-dropdown-menu slot="dropdown">
						        <el-dropdown-item>{{userInfo.username}}</el-dropdown-item>
						        <el-dropdown-item>查看</el-dropdown-item>
						        <el-dropdown-item v-on:click.native="LoginOut">注销</el-dropdown-item>
					        </el-dropdown-menu>
					</el-dropdown>
			  	</el-col>
			</el-col>
		</el-row> 
	</div>
</template>

<script>
import { mapGetters,mapActions} from 'vuex'
export default{
	data (){
		return {
				showMenuTree: true,
				offset: 18,
				titlexs:{
					span:24,
					offset:0
				},
				firstxs:{
					span:6,
					offset:0,
					pull:0
				},
				xs:{
					span:6,
					offset:0
				}
		}
	},
	computed: {
		...mapGetters(['userInfo','token'])
	},
	methods: {
		...mapActions(['setSignOut']),
		showMenu(){
			this.showMenuTree = ! this.showMenuTree;
			this.$emit('showMenu',this.showMenuTree);
		},
		LoginOut() {
			this.setSignOut();
			this.$router.push({path: '/user'})
		}
	}
}
</script>

<style scoped>
 @import '../../assets/css/font.css';
	.header{
		background-color: #333; 
		padding-top: 8px;
		/* line-height: 72px; */
	}
	.font-title{
		font-weight: bold;
		font-family: "Source Sans Pro", sans-serif;
		letter-spacing:5px;
	}
	.nav-icon{
		text-align: center;
		height: 64px;
		line-height: 64px;
	}
	.nav-title{
		text-align: left;
		line-height: 64px;
		/* overflow: hidden; */
	}
	@media screen and (max-width: 768px) {
		.nav-title{
			text-align: center;
			line-height: 20px;
			/* overflow: hidden; */
		}
	}
	.nav-item{
		height: 64px;
		text-align: center;
		line-height: 64px;
		overflow: hidden;
	}
</style>