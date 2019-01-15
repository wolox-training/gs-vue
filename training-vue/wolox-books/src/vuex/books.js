import { bookService } from '@/services/book'

export default {
  namespaced: true,
  state: {
    list: []
  },
  mutations: {
    setList (state, { list }) {
      state.list = list
    }
  },
  actions: {
    load (context) {
      bookService.list().then(response => {
        context.commit('setList', { list: response.data })
      })
    }
  },
  getters: {
    list: state => state.list
  }
}
