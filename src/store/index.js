import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    // signed_in: false,
    user: null,
    status: null,
  },
  getters: {
    status(state) {
      return state.status
    },
    user(state) {
      return state.user
    }
  },
  mutations: {
    // changeSignedInStatus(state) {}
    setUser(state, payload) {
      state.user = payload
    },
    removeUser(state) {
      state.user = null
    }
  }
});
