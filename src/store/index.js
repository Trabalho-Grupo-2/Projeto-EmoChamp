import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedUser: null,
    isLogged: localStorage.getItem("isLogged") ? localStorage.getItem("isLogged") : localStorage.setItem("isLogged", false),
    loggedUser: localStorage.getItem("user") ? localStorage.getItem("user") : localStorage.setItem("user", null),
    users: localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : localStorage.setItem("users", JSON.stringify([{ name: "admin", email: "admin", password: "admin", type: "admin" , id:0 }])),
    utilities: {id: 0}
  },
  getters: {
    getselectedUser: state => state.selectedUser,
    getLoggedState: state => state.isLogged,
    getUsers: state => state.users,
    getLoggedUser: state => state.loggedUser,
    getId: state => state.utilities.id

  },
  mutations: {
    SET_SELECTED_USER: (state, payload) => { state.selectedUser = payload },
    SET_USER: (state, payload) => {
      state.users.push(payload);
      localStorage.setItem("users", JSON.stringify(state.users));
    },
    SET_USER_LOGIN: (state, payload) => {
      state.isLogged = payload;
      localStorage.setItem("isLogged", payload)
    },
    SET_USER_LOGOUT: (state, payload) => { state.isLogged = payload; localStorage.setItem("isLogged", payload) },
    SET_LOGGED_USER: (state, payload) => { state.loggedUser = payload; localStorage.setItem("user", JSON.stringify(state.loggedUser)) },
    INCREMENT_ID: (state) => {state.utilities.id++}
  },
});
x