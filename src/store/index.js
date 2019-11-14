import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    signed_in: true
  },
  getters: {},
  mutations: {
    changeSignedInStatus(state) {
      console.log(state.signed_in)
      const signed_in = !state.signed_in;
      console.log(state.signed_in)
      return signed_in;
    }
  }
});
