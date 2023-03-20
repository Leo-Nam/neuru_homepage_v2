export default {
  namespaced: true,
  state: {
    userOs: null,
  },
  mutations: {
    setUserOs(state, userOs) {
      state.userOs = userOs
    },
  },
}
