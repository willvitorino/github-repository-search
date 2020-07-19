function state () {
  return {
    loading: false
  }
}

const getters = {
  loading: state => state.loading
}

const mutations = {
  toggleLoading: state => {
    state.loading = !state.loading
  },
  setLoading: (state, loading) => {
    state.loading = !!loading
  }
}

export default {
  state,
  getters,
  mutations
}
