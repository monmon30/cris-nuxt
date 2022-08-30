export const state = () => ({
  data: {
    data: null,
    loading: false,
    isError: false,
    errorMessage: null
  }
})

export const getters = {
  getProduct: state => state.data?.data,
  getsample: state => state.data.data
}
export const mutations = {
  SET_DATA(state, payload) {
    state.data.data = payload
  },
  SET_LOADING(state, payload) {
    state.data.loading = payload
  },
  SET_IS_ERROR(state, payload) {
    state.data.isError = payload
  },
  SET_ERROR_MESSAGE(state, payload) {
    state.data.errorMessage = payload
  }
}
export const actions = {
  async createProduct({ commit }, form) {
    commit('SET_LOADING', true)
    const data = await this.$axios.post('/api/products', form)
    commit('SET_DATA', data.data)
    commit('SET_LOADING', false)
  }
}
