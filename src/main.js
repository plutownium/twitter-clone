import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Routes from "./routes";
import vuetify from "./plugins/vuetify";
import { firestorePlugin } from "vuefire";

Vue.use(firestorePlugin);

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes
});

new Vue({
  render: h => h(App),
  vuetify,
  router: router
}).$mount("#app");

//   { id: 1, name: 'rolypolyistaken', handle: 'rolypolyistaken', tweet: 'this is a msg on twitter', tsp: 36},
//   { id: 2, name: 'Dominii', handle: 'Dominii', tweet: 'dash sucks', tsp: 50},
//   { id: 3, name: 'Rick', handle: 'hiimrick', tweet: 'Molten Core sux', tsp: 26}]
