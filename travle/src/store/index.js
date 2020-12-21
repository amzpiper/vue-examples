import Vuex from 'vuex'

let defaultCity = '北京'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (error) {}

export default Vuex.createStore({
  state: {
    city: defaultCity
  },
  actions: {
    changeCity (ctx, city) {
      ctx.commit('changeCity', city)
    }
  },
  mutations: {
    changeCity (state, city) {
      state.city = city
      try {
        localStorage.city = city
      } catch (error) {
      }
    }
  },
  getters: {
    doubleCity (state) {
      return state.city + '' + state.city
    }
  }
})
