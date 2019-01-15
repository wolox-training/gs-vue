import { bookService } from '@/services/book'

export default {
  namespaced: true,
  state: {
    list: []
  },
  mutations: {
    setList (state, payload) {
      state.list = payload.list
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
    list (state) {
      return state.list
    }
  }
}
