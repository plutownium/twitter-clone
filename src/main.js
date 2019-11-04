import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router' 
import Routes from './routes'

Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes
});

Vue.prototype.$tweets = [
  { id: 1, name: 'rolypolyistaken', handle: 'rolypolyistaken', tweet: 'this is a msg on twitter', tsp: 36}, 
  { id: 2, name: 'Dominii', handle: 'Dominii', tweet: 'dash sucks', tsp: 50}, 
  { id: 3, name: 'Rick', handle: 'hiimrick', tweet: 'Molten Core sux', tsp: 26}]

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
