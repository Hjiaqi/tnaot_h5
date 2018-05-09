export default {
	namespaced: true,
	state: {
		nighttime: false, //夜间模式
		popUp: false,//分享弹框
		popUpType: 0, //分享弹框类型。0:默认,1：转发，2：收藏，3：举报

		detailPop: false //详情页面分享
	},
	mutations: {
		set_nighttime(state, val){
			state.nighttime = val;
		},
		set_popUp(state, val){
			state.popUp = val;
		},
		set_popUpType(state, val){
			state.popUpType = val;
		},
		//详情页面分享方法
		set_detailPop(state, val){
			state.detailPop = val;
		}
	}
}
