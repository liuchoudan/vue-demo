import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

/*
 * 国际化配置文件
 */
const i18n = new VueI18n({
	locale:"zh-CN",
	messages:{
		"zh-CN": require("./lang/zh_CN.json"),
	    "en-US": require("./lang/en.json")
  	}
})

export default i18n