import Vue from 'vue';
import App from './App.vue';
import 'jquery';
import 'popper.js';
import 'bootstrap';
import './assets/app.css';
import VueBootstrapTypeahead from 'vue-bootstrap-typeahead';


Vue.config.productionTip = false;
// Global registration
Vue.component('vue-bootstrap-typeahead', VueBootstrapTypeahead);

new Vue({
  render: h => h(App),
}).$mount('#app')
