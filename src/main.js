// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router';
import vueResource from 'vue-resource';
import Customers from './components/Customers';
import About from './components/About';
import Add from './components/Add';
import Edit from './components/Edit';
import CustomerDetails from './components/CustomerDetails';


Vue.config.productionTip = false

Vue.use(vueResource)
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/', component: Customers},
    {path: '/about', component: About},
    {path: '/add', component: Add},
    {path: '/customer/:id', component: CustomerDetails},
    {path: '/edit/:id', component: Edit},
  ],
  //linkActiveClass: "active", // active class for non-exact links.
  linkExactActiveClass: "active" // active class for *exact* links.
});

/* eslint-disable no-new */
new Vue({
  router,
  template: `
    <div id="app">
      <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-3">
        <div class="container">
        <a class="navbar-brand" href="/">vCustomers</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contact">Contact</router-link>
            </li>
          </ul>
          <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/add">Add Customer</router-link>
          </li>
          </ul>
          </div>
        </div>
      </nav>
      <router-view></router-view>
    </div>
  `
}).$mount("#app")
