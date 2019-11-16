import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		user: null,
		logged_in: false
	},
	getters: {
		loggedIn(state) {
			return state.logged_in;
		},
		user(state) {
			return state.user;
		},
		showLoggedIn(state) {
			return state.user ? true : false;
		}
	},
	mutations: {
		changeSignedInStatus(state) {
			if (state.logged_in) {
				state.logged_in = false;
			} else {
				state.logged_in = true;
			}
		},
		setUser(state, payload) {
			state.user = payload;
		},
		removeUser(state) {
			state.user = null;
		}
	}
});
