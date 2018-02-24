import axios from 'axios'

// axios全局配置
axios.defaults.baseURL="http://localhost:8889/";
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.timeout=5000;

// 请求拦截器
axios.interceptors.request.use(
	(config) => {
		return config;
	},(error) => {
		return Promise.reject(error);
	}
)

// 响应拦截器
axios.interceptors.response.use(
	(response) => {
		return response;
	},(error) => {
		return Promise.reject(error);
	}
)

/**
 *封装HTTP请求方法
 */

// 封装get方法
export function get(url,params = {}){
	return new Promise((resolve,reject) => {
		axios.get(url,{
			params: params
		}).then(response =>{
			resolve(response.data);
		}).catch(error => {
			reject(error);
		})
	})
}

// 封装post方法
export function post(url,data = {}){
	return new Promise((resolve,reject) =>{
		axios.post(url,data).then(response => resolve(response.data)).catch(error => reject(error))
	})
}

// 封装delete方法
export function deletes(url,data = {}){
	return new Promise((resolve,reject) =>{
		axios.delete(url,data).then(response => resolve(response.data)).catch(error => reject(error))
	})
}

// 封装put方法
export function put(url,data = {}){
	return new Promise((resolve,reject) =>{
		axios.put(url,data).then(response => resolve(response.data)).catch(error => reject(error))
	})
}

// 封装patch方法
export function patch(url,data = {}){
	return new Promise((resolve,reject) =>{
		axios.patch(url,data).then(response => resolve(response.data)).catch(error => reject(error))
	})
}

export default {

	/*用户登录*/
	Login(params){
		return get('/user/login',params)
	}
}


/*
也可在main.js定义全局变量使用
import {get,post,put,patch} from api
Vue.prototype.$get = get
Vue.prototype.$post = post
Vue.prototype.$put = put
Vue.prototype.$patch = patch
使用
this.$get('/user/login').then((response) => {console.log(response)})
*/
