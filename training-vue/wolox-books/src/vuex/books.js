import { bookService } from '@/services/book'

export default {
  namespaced: true,
  state: {
    list: [],
    detail: null
  },
  mutations: {
    setList (state, { list }) {
      state.list = list
    },
    setDetail (state, { book }) {
      state.detail = book
    }
  },
  actions: {
    load (context) {
      bookService.list().then(response => {
        context.commit('setList', { list: response.data })
      })
    },
    loadDetail (context, id) {
      bookService.getById(id).then(response => {
        context.commit('setDetail', { book: response.data })
      })
    },
    resetDetail (context) {
      context.commit('setDetail', { book: null })
    }
  },
  getters: {
    list: state => state.list,
    detail: state => state.detail
  }
}
