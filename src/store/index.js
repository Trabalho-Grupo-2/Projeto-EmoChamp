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
    isLogged: false,
    loggedUser: null,
    users: [{ name: "admin", email: "admin", password: "admin", type: "admin" , id:0 }],
    id: 0
  },
  getters: {
    getselectedUser: state => state.selectedUser,
    getLoggedState: state => state.isLogged,
    getUsers: state => state.users,
    getLoggedUser: state => state.loggedUser,
    getId: state => state.id,

  },
  mutations: {
    SET_SELECTED_USER: (state, payload) => { state.selectedUser = payload },
    SET_USER: (state, payload) => {
      state.users.push(payload);
    },
    SET_USER_LOGIN: (state, payload) => {
      state.isLogged = payload;
    },
    SET_USER_LOGOUT: (state, payload) => { state.isLogged = payload; state.selectedUser = null },
    SET_LOGGED_USER: (state, payload) => { state.loggedUser = payload; },
    INCREMENT_ID: (state) => {state.id++},
    REMOVE_USER: (state,payload) => { state.users.splice(payload,1)}
  },
});