import 'babel-polyfill'
import Vue from 'vue'
import VueFetch, {$fetch} from "./plugins/fetch"
import App from './components/App'
import router from './router'
import store from "./store";
import * as filters from './filter'

// Filters
for (const key in filters){
  Vue.filter(key, filters[key])
}

new Vue({
  el: '#app',
  router,
  // Injected store
  store,
  render: h => h(App)
});
