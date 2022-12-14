export const state = () => ({
  data: {
    data: null,
    loading: false,
    isError: false,
    errorMessage: null
  },
  products: [
    {
      id: 1,
      name: 'Bow Gold (Big)',
      description:
        'You will be enriched in every way so that you can be generous on every occasion, and through us your generosity will result in thanksgiving to God.',
      images: [
        { url: 'bow_gold_back', is_main: false },
        { url: 'bow_gold_bottom_left', is_main: false },
        { url: 'bow_gold_front', is_main: false },
        { url: 'bow_gold_top_right', is_main: true }
      ]
    },
    {
      id: 2,
      name: 'Abstract Table Cross',
      description:
        'You will be enriched in every way so that you can be generous on every occasion, and through us your generosity will result in thanksgiving to God.',
      images: [
        { url: 'atc_back', is_main: false },
        { url: 'atc_front', is_main: false },
        { url: 'atc_front2', is_main: true },
        { url: 'atc_left_front', is_main: false }
      ]
    },
    {
      id: 3,
      name: 'Acryclic',
      description:
        'You will be enriched in every way so that you can be generous on every occasion, and through us your generosity will result in thanksgiving to God.',
      images: [
        { url: 'acryclic_top_left', is_main: false },
        { url: 'acryclic_top_right', is_main: false },
        { url: 'acryclic_front', is_main: true },
        { url: 'acryclic_back', is_main: false }
      ]
    },
    {
      id: 4,
      name: 'Jesus & Mary',
      description:
        'The statue is carefully handcrafted with well-defined figures and facial features. It is a nice decoration and will bring endless peace and comfort to the family.',
      images: [
        { url: 'jm_right', is_main: false },
        { url: 'jm_left', is_main: false },
        { url: 'jm_front', is_main: true },
        { url: 'jm_back', is_main: false }
      ]
    },
    {
      id: 5,
      name: 'Holy Family Figurine Set 1',
      description:
        'A perfect gift for Catholic families, this image of Jesus and Mary. The Holy Family can be put in the altar, or anywhere in the home to instill and remind of the values of their holyness.',
      images: [
        { url: 'hf_mary', is_main: false },
        { url: 'hf_joseph', is_main: false },
        { url: 'hf_front', is_main: true },
        { url: 'hf_zoom', is_main: false }
      ]
    },
    {
      id: 6,
      name: 'Mother & Child',
      description:
        'A perfect gift for Catholic families, this image of Jesus and Mary. The Holy Family can be put in the altar, or anywhere in the home to instill and remind of the values of their holyness.',
      images: [
        { url: 'mc_right', is_main: false },
        { url: 'mc_left', is_main: false },
        { url: 'mc_front', is_main: true },
        { url: 'mc_back', is_main: false }
      ]
    },
    {
      id: 7,
      name: 'Eucharist',
      description:
        'You will be enriched in every way so that you can be generous on every occasion, and through us your generosity will result in thanksgiving to God.',
      images: [
        { url: 'e_front', is_main: false },
        { url: 'e_front2', is_main: false },
        { url: 'e_front4', is_main: true }
      ]
    },
    {
      id: 8,
      name: 'Holy Spirit Acryclic',
      description:
        'You will be enriched in every way so that you can be generous on every occasion, and through us your generosity will result in thanksgiving to God.',
      images: [
        { url: 'hsa_1', is_main: false },
        { url: 'hsa_2', is_main: false },
        { url: 'hsa_3', is_main: true }
      ]
    },
    {
      id: 9,
      name: 'Miracle Saint Benedict',
      description:
        'You will be enriched in every way so that you can be generous on every occasion, and through us your generosity will result in thanksgiving to God.',
      images: [
        { url: 'msb_1', is_main: false },
        { url: 'msb_2', is_main: false },
        { url: 'msb_3', is_main: true }
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
