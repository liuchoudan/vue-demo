import * as types from '../types'

const state = {
	// 这样写法防止页面刷新时丢失数据
	token: localStorage.getItem('token') || null,
	user_info: JSON.parse(localStorage.getItem("user_info")) || {}
}

const getters = {
	token: state => state.token,
	userInfo: state => state.user_info
}

const mutations = {
	[types.SET_TOKEN](state,res){
		state.token = res
	},

	[types.SET_USER_INFO](state,res){
		state.user_info = res
	}
}


const actions = {
	/**
	 * 用户登录
	 */
	setUserInfo({commit},user){
		localStorage.setItem('user_info',JSON.stringify(user))
		localStorage.setItem('token',user.token)
		commit(types.SET_TOKEN,user.token)
		commit(types.SET_USER_INFO,user)
	},

	/**
	 * 用户注销
	 */
	setSignOut({commit}){
		localStorage.removeItem('user_info')
		localStorage.removeItem('token')
		commit(types.SET_TOKEN, null)
		commit(types.SET_USER_INFO, {})
	} 
}

export default {
	state,
	getters,
	mutations,
	actions
}