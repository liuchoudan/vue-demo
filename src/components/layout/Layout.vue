<template>
	<div class="container">
		<!-- 导航栏 -->
		<navbar v-on:showMenu="showMenu"></navbar>

		<!-- 菜单树 -->
		<transition name="menu">
			<sidebar v-if="show" class="tree"></sidebar>
		</transition>
		
		<!-- 主窗口 -->
			<div :class="contClass" id="content-wrap">
				<router-view></router-view>
			</div>
		
	</div>
</template>

<script>
	import navbar from './Navbar'
	import sidebar from './SideBar'
	export default {
		data () {
			return {
				contClass:'content-wrap',
				show: true,
				message: 'Hello World'
			}
		},
		components: {
			navbar,
			sidebar
		},
		methods: {
			showMenu (data){
				this.show = data;
				if(data)
					this.contClass = 'content-wrap';
				else
					this.contClass = 'content-big-wrap';
			}
		}
	}

</script>

<style>
	.content-wrap{
	    position: absolute;
	    left: 250px;
	    right: 0;
	    top: 74px;
	    bottom:0; 
	    width: auto;
	    margin:20px;
	    /* float: left; */
	    transition: all 0.5s ease;
	}

	.content-big-wrap{
	    position: absolute;
	    left: 20px;
	    right: 0;
	    top: 74px;
	    bottom:0; 
	    width: auto;
	    margin:20px;
	    /* float: left; */
	   /*  transform: translateX(-50px); */
	    transition: all 0.5s ease;
	}

/* 	.tree{
	float: left;
} */

	.menu-enter-active{
		transition: all 0.5s ease;
	}
	.menu-leave-active{
		transition: all 0.5s ease;
	}
	.menu-enter, .menu-leave-to{
		transform: translateY(-50px);
		opacity: 0;
	}
</style>

