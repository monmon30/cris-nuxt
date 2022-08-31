export const state = () => ({
  data: {
    data: null,
    loading: false,
    isError: false,
    errorMessage: null
  },
  products: [
    {
      name: 'Bow Gold (Big)',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sint eligendi velit alias tempora, voluptatum, in animi placeat voluptate ex, quasi corrupti impedit distinctio quia numquam repellat laborum iure dolorem.',
      images: [
        { url: 'bow_gold_back', is_main: false },
        { url: 'bow_gold_bottom_left', is_main: false },
        { url: 'bow_gold_front', is_main: false },
        { url: 'bow_gold_top_right', is_main: true }
      ]
    },
    {
      name: 'Bow Gold (Small)',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sint eligendi velit alias tempora, voluptatum, in animi placeat voluptate ex, quasi corrupti impedit distinctio quia numquam repellat laborum iure dolorem.',
      images: [
        { url: 'bow_gold_back', is_main: false },
        { url: 'bow_gold_bottom_left', is_main: false },
        { url: 'bow_gold_front', is_main: true },
        { url: 'bow_gold_top_right', is_main: false }
      ]
    }
  ]
})

export const getters = {
  getProduct: state => state.data?.data,
  getProducts: state => state.products,
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
