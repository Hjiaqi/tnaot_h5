export default {
	namespaced: true,
	state: {
		headerText: '', //保存用户点击“服务类型”的ID
	},
	mutations: {
		setHeaderText(state, val) {
			state.headerText = val;
		}
	},
	getters: {
		getHeaderText: state => {
			let Text = state.headerText;
			return { Text }
		}
	}
		
}