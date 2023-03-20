import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user: user,
  },
  plugins: [
    // import한 vuex-persistedstate 등록
    createPersistedState()
  ]
})

export default store
