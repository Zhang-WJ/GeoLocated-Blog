import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  // Todo options
  state() {
    return {
      user: null,
    }
  }
});

export default store;
