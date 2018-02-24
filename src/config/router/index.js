import Vue from 'vue'
import Router from 'vue-router'
import store from '../vuex'
import * as types from '../vuex/types'

import layout from '../../components/layout/Layout'
import home from '../../page/home'
import login from '../../page/user'
import list from '../../page/table'
import chart from '../../page/chart'
import lang from '../../page/lang'
import error from '../../page/404'

Vue.use(Router)

const router = new Router({
	linkActiveClass: 'active',
	routes: [
		{
			path: '/',
			component: layout,
			meta: {
            	requireAuth: true,
        	},
			children: [
				{
					path: '/',
					component: home
				},
				{
					path: '/table',
					component: list
				},
				{
					path: '/chart',
					component: chart
				},
				{
					path: '/from',
					component: lang
				}
			]
		},
		{
			path: '/user',
			component: login
		},
		{
			path: '*', 
			component: error
		}
	]
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(r => r.meta.requireAuth)) {
        if (store.state.user.token) {
            next();
        }
        else {
            next({
                path: '/user'/*,
                query: {redirect: to.fullPath}*/
            })
        }
    }
    else {
        next();
    }
})
export default router