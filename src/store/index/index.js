import cache from '@/utils/cache'
export default {
	namespaced: true,
	state: {
		indexActive: '0', //各个栏目的active-index
		indexLocation: { "0": 0 }, //各个栏目的高度
	},
	mutations: {
		set_indexActive(state, val) {
            state.indexActive = val
//          console.log(state.indexActive);
            cache.setSession('index_Active', val)
       },
        set_indexLocation(state, obj) {
            state.indexLocation = obj
            cache.setSession('index_Location', obj)
        },
	},
	getters: {
        activeMeta: state => {
            // 当前active的栏目的index、location
            let index = state.indexActive;
            let location = state.indexLocation[state.indexActive]
            return { index, location }
        }
    },
	actions: {
		// 获取active栏目缓存
        get_indexActive_cache({ commit, dispatch }) {
            const data = cache.getSession('index_Active')
            if (data) {
                commit('set_indexActive', data)
            } else {
                commit('set_indexActive', 0)
            }
        }
	}
}