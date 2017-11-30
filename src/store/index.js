// 入口文件
import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import state from './state'
import mutations from './mutations'
// vuex插件，每次修改时在控制台输出log，修改前和修改后的状态
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

// vuex的调试工具，只在开发环境下开启
// npm run build 就是 production环境 debug = false
// npm run dev 就是 dev环境 ==> debug = true
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations,
  // vuex的严格模式，当debug为true时开启（开发环境）
  strict: debug,
  plugins: debug ? [createLogger()] : []
})