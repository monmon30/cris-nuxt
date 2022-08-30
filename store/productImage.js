/* eslint-disable no-useless-return */
export const state = () => ({
  data: {
    data: null,
    loading: false,
    isError: false,
    errorMessage: null
  }
})
export const getters = {
  getProductImage(state) {
    return state.data?.data
  },
  getSampleImage(state) {
    return state.data?.data?.attributes?.images
  }
}

export const mutations = {
  SET_DATA(state, payload) {
    state.data.data = payload
  }
}
export const actions = {
  async createProductImage({ commit }, { productId, formImage }) {
    const formData = new FormData()
    formData.append('image_url', formImage)
    const data = await this.$axios.post(
      `/api/products/${productId}/product_images`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    )
    commit('SET_DATA', data.data)
  }
}
