<template>
  <div>
    <Navbar />
      <img src="../assets/redelipsebg.svg" alt="redbg" id="redbg" />
      <div class="b-row" style="height: 100px"></div>
      <div class="b-row" style="height: 200px"></div>
      <div class="b-row" style="height: 800px">
        <b-form @submit.prevent="pushLogin()">
          <label for="email">Email:</label>
          <b-form-input v-model="form.email" type="text"></b-form-input><br />
          <label for="password">Password:</label>
          <b-form-input v-model="form.password" type="password"></b-form-input>
          <b-button type="submit" variant="primary">Login</b-button>
        </b-form>
      </div>
    <FooterX />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import FooterX from "../components/FooterX.vue";
import { mapGetters } from "vuex";
import { mapMutations } from 'vuex';


export default {
  components: {
    Navbar,
    FooterX,
  },
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
      ...mapMutations([
            'SET_USER_LOGIN',
        ]),
      pushLogin() {
          if(this.getUsers.some(user => {
              user.email == this.form.email && user.password == this.form.password
          })){
              this.SET_USER_LOGIN
          }
          else{
              alert("Credenciais Inválidas")
          }
      }
  },
  computed: {
    ...mapGetters(["getLoggedState","getUsers"]),
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

#redbg {
  position: absolute;
  z-index: -2;
  margin-top: -150px;
  margin-bottom: -150px;
}
</style>