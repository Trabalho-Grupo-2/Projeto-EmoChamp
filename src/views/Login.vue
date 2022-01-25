
<template>
  <div>
    <Navbar />
      <img src="../assets/redelipsebg.svg" alt="redbg" id="redbg" />
      <div class="b-row" style="height: 100px"></div>
      <div class="b-row" style="height: 200px"><h2 style="color:white;">Login</h2></div>
      <div class="b-row" style="height: 800px">
        <b-form @submit.prevent="pushLogin()">
          <label for="email">Email:</label>
          <b-form-input min="15" max="40" v-model="form.email" type="text"></b-form-input><br />
          <label for="password">Password:</label>
          <b-form-input min="8" max= "20" v-model="form.password" type="password"></b-form-input>
          <b-button type="submit" variant="primary" style="background-color: #374785;
          border-color: #374785;">Entrar</b-button>
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
      control: false,
      user : ""
    };
  },
  methods: {
      ...mapMutations([
            "SET_USER_LOGIN","SET_LOGGED_USER"
        ]),
      pushLogin() {
          if(this.getUsers.some(user => 
              user.email == this.form.email && user.password == this.form.password
          ))
          {
              this.user = this.getUsers.find( user => user.email == this.form.email);
              this.control = true;
              this.SET_LOGGED_USER(this.user);
              this.SET_USER_LOGIN(this.control);
              this.$router.push("/play")
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
input {
  width: 30%;
  margin-left: 30%;
  border: 3px solid #374785;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.8);
  margin-bottom: 30px;
}
label {
  position:absolute;
  color: #374785;
  font-size: 16px;
  margin-left: 20%;
  margin-top: 0.5%;
}
h2 {
  margin-left: 20%;
}
button {
  padding: 10px 50px;
  border-radius: 7px;
  margin-left: 65%;
  margin-top: 5%;
  font-size: 20px;
}
button:hover {
  background-color: #374785 !important;
  color: white !important;
}

</style>