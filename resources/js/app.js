/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

// import ProfilesList from "./components/ProfilesList";

require('./bootstrap');

window.Vue = require('vue');
import Vue from 'vue';
import router from "./router";
import store from './store';

import test from "./components/test";

// import route from "./route";
import VueRouter from 'vue-router';

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('example-component-2', require('./components/ExampleComponent2.vue').default);
Vue.component('test-div', require('./components/test').default);

Vue.component('my-nav-bar', require('./components/NavBar').default);
Vue.component('my-app', require('./components/App').default);
// Vue.component('profiles-list', require('./components/ProfilesList').default);

import ProfilesList from './components/ProfilesList';
import App from './components/App';

import Test3 from './components/Test3';
import MyNavBar from './components/NavBar';

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */


const app2 = new Vue({
    el: '#app',
    store,
    render: h => h(App),
    router
})




// console.log("test route: ", route('test'));
// console.log("test route: ", route('test2'));
// console.log("test route: ", route('test3'));
///



