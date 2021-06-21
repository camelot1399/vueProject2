import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: [],
    countList: 0,
  },
  mutations: {
    setListState(state, payload) {
      state.list = payload;
    },
    addToListItem(state, item) {
      state.list.push(item);
    }
  },
  actions: {
    fetchData({commit}) {
      return new Promise( (resolve, reject) => {
        setTimeout( () => {
          const list = [];

          for (let i = 1; i < 200; i++) {
            list.push({
              name: 'Михаил',
              age: i
            })
          }
          
          resolve(list);
        }, 2000)
      }).then((result) => {
        commit('setListState', result);
      })
    }
  },
  modules: {
  },
  getters: {
    getList(state) {
      return state.list;
    },
    getListCountAge(state) {
      return state.list.reduce((acc, el) => {
        acc + el.age
      }, 0);
    },
    getListCount(state) {
      return state.list.length;
    }
  }
})
