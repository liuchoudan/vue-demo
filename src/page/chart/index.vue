<template>
	<div class="app-container">
		<el-row type="flex" justify="center">
				<el-col :span="24">
					<div  class="widget">
						<div class="widget-header">{{title}}</div>
						<div class="widget-body">
							<!-- 数据图 -->
							<div id="chart" class="chart" style="width:100%;height:500px;"></div>
						</div>
					</div>
				</el-col>
			</el-row>
	</div>
</template>

<script>
	import echarts from 'echarts'
	export default {
		data () {
			return {
				title: 'Echarts'
			}
		},
		mounted () {
			// 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart'));
        // 绘制收入图表
        myChart.setOption({
            title: { text: '最近收入' },
            tooltip: {},
            xAxis: {
                data: ["3月","4月","5月","6月","7月","8月"]
            },
            yAxis: {},
            series: [{
                name: '收入',
                type: 'bar',
                data: [800, 1200, 1360, 1100, 1100, 1800]
            }]
        });
        window.onresize = function () {
            myChart.resize()
          }
		}
	}
</script>

<style>
@import "../../assets/css/base.css";
</style>