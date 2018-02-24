import Vue from 'vue'
import vuex from 'vuex'
// 加载模块
import user from './module/user'

Vue.use(vuex)

const store = new vuex.Store({
	modules: {
		user
	}
})

export default store