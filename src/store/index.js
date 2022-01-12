import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedUser: null,
    isLogged: false,
    users: localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : [{name: "admin",password:"admin", type:"admin"}],
    form: {
      name: "",
      email: "",
      password: "",
    }
  },
  getters: {
    getselectedUser: state => state.selectedUser,
    getUsers: state => state.users

  },
  mutations: {
    SET_SELECTED_USER: (state, payload) => { state.selectedUser = payload},
    SET_USER: (state, payload) => {
      state.users.push(payload);
      localStorage.setItem("users", JSON.stringify(state.users));
    }
  },
});
