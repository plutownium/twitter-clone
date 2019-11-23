import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		userId: null, // email, basically
		logged_in: false,
		name: null,
		handle: null
		// holder: null
	},
	getters: {
		loggedIn(state) {
			return state.logged_in;
		},
		user(state) {
			return state.userId;
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
		setUser(state, email) {
			state.userId = email;
		},
		registerUsername(state, username) {
			state.name = username;
		},
		registerHandle(state, handle) {
			state.handle = handle;
		},
		resetForSignout(state) {
			state.userId = null,
			state.logged_in = false,
			state.name = null,
			state.handle = null
		},
		changeUsername(state, newName) {
			state.name = newName
		},
		changeUserHandle(state, newHandle) {
			state.handle = newHandle
		}
		// editHolder(state, payload) {
		// 	state.holder = payload
		// }
	}
});
