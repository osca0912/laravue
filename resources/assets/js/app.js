
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

//Vue.component('example', require('./components/Example.vue'));
import Hello from './components/Hello.vue'; // 引入Hello 组件
import ElementUI from 'element-ui'; // 引入element
import 'element-ui/lib/theme-chalk/index.css';
import VueResource from 'vue-resource'
Vue.use(VueResource);
Vue.use(ElementUI);

Vue.http.options.emulateHTTP = true;
Vue.http.options.emulateJSON = true

import router from './router/index.js'; // 引入路由
const app = new Vue({
    el: '#app',
    router,
    render: h => h(Hello)
});
