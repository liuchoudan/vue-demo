<template>
	<div class="app-container">
		<el-row type="flex" justify="center">
			<el-col :span="24">
				<div class="widget">
					<div class="widget-header">{{title}}</div>
					<div class="widget-body widget-main">
						<div class="panel">
							<el-carousel :interval="4000" type="card" height="500px">
								<el-carousel-item v-for="item in imgs" :key="item">
									<img :src="item">
								</el-carousel-item>
							</el-carousel>
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
				title: '主页',
				imgs: [
					require('../../assets/image/item/img1.jpg'),
					require('../../assets/image/item/img2.jpg'),
					require('../../assets/image/item/img3.jpg'),
					require('../../assets/image/item/img4.jpg'),
					require('../../assets/image/item/img5.jpg'),
					require('../../assets/image/item/img6.jpg'),
				]

			}
		}
	}
</script>

<style>
	@import "../../assets/css/base.css"; 
	.el-carousel__item img {
		width:100%;
		height:500px;
		display: inline-block;
	}

	.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
	}

	.el-carousel__item:nth-child(2n+1) {
		background-color: #d3dce6;
	}
</style>