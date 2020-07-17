import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import elementUI from './elementUI';

// require('aframe');

elementUI();

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
