import { createStore } from 'vuex'

// 创建vuex仓库并导出
// vue2.0 创建仓库 new Vuex.Store({})
// vue3.0 创建仓库 createStore({})
export default createStore({
  state: {
    // 数据
    // username: 'zs'
  },
  getters: {
    // vuex的计算属性
    // newName(state) {
    //     return state.username + '????'
    // }
  },
  mutations: {
    // 改数据函数
    // updateName(state) {
    //     state.username = 'ls'
    // }
  },
  actions: {
    // 请求数据函数
    // updateName(ctx) {
    //     setTimeout(() => {
    //         ctx.commit('updateName')
    //     }, 1000)
    // }
  },
  modules: {
    // 分模块
  }
})
