import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedUser: null,
    isLogged : false,
    users: localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : [],
    form: {
      name: "",
      aboutMe: "",
      password: "",
      email: "",
      avatar: ""
    }
  },
  getters: {
    getselectedUser: state => state.selectedUser,
    getloggedStatus: state => state.isLogged

  },
  mutations: {
    SETSELECTEDUSER: (state, payload) => { (state.selectedUser = payload); console.log(state.selectedUser)},
  },
});
