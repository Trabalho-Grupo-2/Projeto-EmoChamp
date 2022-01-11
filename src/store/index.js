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
      password: "",
      email: "",
    }
  },
  getters: {
    getselectedUser: state => state.selectedUser,
    getformName: state => state.form.name,
    getformPassword: state => state.form.password,
    getformEmail: state => state.form.email,

  },
  mutations: {
    SETSELECTEDUSER: (state, payload) => { state.selectedUser = payload; console.log(state.selectedUser)},
    SETUSERNAME: (state,payload) => state.form.name = payload,
    SETPASSWORD: (state,payload) => state.form.password = payload,
    SETEMAIL: (state,payload) => state.form.email = payload,
  },
});
