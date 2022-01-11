import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedUser: null,
  },
  getters: {
    getselectedUser: state => state.selectedUser
    
  },
  mutations: {
    SETSELECTEDUSER: (state, payload) => { (state.selectedUser = payload); console.log(state.selectedUser)},
  },
});
