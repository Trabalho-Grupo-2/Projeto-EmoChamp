import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState({
        storage: window.localStorage,
    })],
  state: {
    selectedUser: null,
    isLogged: localStorage.getItem("isLogged") ? localStorage.getItem("isLogged") : localStorage.setItem("isLogged", false),
    loggedUser: localStorage.getItem("user") ? localStorage.getItem("user") : localStorage.setItem("user", null),
    users: localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : localStorage.setItem("users", JSON.stringify([{ name: "admin", email: "admin", password: "admin", type: "admin" , id:0 }])),
    utilities: {id: localStorage.getItem("id") ? localStorage.getItem("id") : localStorage.setItem("id", 0),}
  },
  getters: {
    getselectedUser: state => state.selectedUser,
    getLoggedState: state => state.isLogged,
    getUsers: state => state.users,
    getLoggedUser: state => state.loggedUser,
    getId: state => state.utilities.id,

  },
  mutations: {
    SET_SELECTED_USER: (state, payload) => { state.selectedUser = payload },
    SET_USER: (state, payload) => {
      state.users.push(payload);
      localStorage.setItem("vuex.users", JSON.stringify(state.users));
    },
    SET_USER_LOGIN: (state, payload) => {
      state.isLogged = payload;
      localStorage.setItem("isLogged", payload)
    },
    SET_USER_LOGOUT: (state, payload) => { state.isLogged = payload;localStorage.setItem("isLogged", payload); state.selectedUser = null; localStorage.user = null },
    SET_LOGGED_USER: (state, payload) => { state.loggedUser = payload; localStorage.setItem("user", JSON.stringify(state.loggedUser)) },
    INCREMENT_ID: (state) => {state.utilities.id++; localStorage.setItem("id",state.utilities.id)},
    REMOVE_USER: (state,payload) => { state.users.splice(payload,1) ; localStorage.users= JSON.stringify(state.users)}
  },
});