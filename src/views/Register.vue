<template>
  <div>
    <Navbar />
    <div v-if="getselectedUser === null">
      <img
        id="logobg"
        src="../assets/redelipse.svg"
        alt="logo back"
        style="margin-top: 60px; position: absolute"
      />
      <div class="w-100 p-3 text-center">
        <div class="b-row">
          <h1
            class="display-4"
            style="color: #374785; font-size: 30px; margin-top: 50px"
          >
            Escolhe o cenário mais adequado à tua situação atual.
          </h1>
        </div>
      </div>

      <section class="container">
        <div class="card" @click="SET_SELECTED_USER('psychologist')">
          <div class="cardImage">
            <img class="card-3" src="../assets/Users/Humaaans_Standing.svg" />
          </div>
          <h2>Sou um Psicólogo</h2>
          <p>
            A aplicação permite gerir um conjunto de pacientes, fornecendo
            acesso ao seu desempenho. Obtenha informação e personalize o seu
            planeamento de consultas.
          </p>
        </div>
        <div class="card" @click="SET_SELECTED_USER('alone')">
          <div class="cardImage">
            <img class="card-1" src="../assets/Users/human-verde.svg" />
          </div>
          <h2>Estou Sozinho</h2>
          <p>
            Adequado caso estejas a utilizar aplicação por conta própria. Caso
            estejas com dificuldades procura a ajuda de alguém que conheças.
          </p>
        </div>
        <div class="card" @click="SET_SELECTED_USER('tutor')">
          <div class="cardImage">
            <img class="card-2" src="../assets/Users/human-red.svg" />
          </div>
          <h2>Estou Acompanhado</h2>
          <p>
            Adequado para utilização supervisionada. É possível a criação de
            filtros e jogos costumizados, permitindo uma resposta mais eficaz
            face às necessidades que procura.
          </p>
        </div>
      </section>
    </div>
    <div v-else>
      <img src="../assets/registerbg.svg" alt="yellowbg" id="yellowbg" />
      <div class="b-row" style="height: 100px">
      </div>
      <div class="b-row" style="height: 300px">
        <section class="container2">
        <div class="card2">
          <div class="cardImage2">
            <img class="card-3" src="../assets/Users/Humaaans_StandingPequeno.svg" />
          </div>
          <h4>Sou um Psicólogo</h4>
        </div>
        <div class="card2">
          <div class="cardImage2">
            <img class="card-1" src="../assets/Users/human-verdePequeno.svg" />
          </div>
          <h4>Estou Sozinho</h4>
        </div>
        <div class="card2">
          <div class="cardImage2">
            <img class="card-2" src="../assets/Users/human-redPequeno.svg" />
          </div>
          <h4>Estou Acompanhado</h4>
        </div>
      </section>
      </div>
      <div class="b-row" style="height: 800px">
        <b-form @submit.prevent="pushForm()">
          <label for="name"
            >Nome:</label><b-form-input class="input" type="text" v-model="form.name" required></b-form-input>
            <br/>
          <label for="email"
            >Email:</label><b-form-input class="input" type="text" v-model="form.email" required></b-form-input>
            <br />
          <label for="password"
            >Password:</label><b-form-input class="input" type="password" v-model="form.password1" required></b-form-input>
            <br />
          <label for="confirmarpassword"
            >Confirmar Password:</label><b-form-input class="input" type="password" v-model="form.password2" required></b-form-input>
          <b-button type="submit" variant="primary" style="background-color: #374785;
          border-color: #374785;">Registar</b-button>
        </b-form>
        <img
        id="logobg"
        src="../assets/redelipse2.svg"
        alt="logo back"
        style=" margin-left:1229px; margin-top:245px; position: absolute"
      />
      </div>
    </div>
    <FooterX />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import FooterX from "../components/FooterX.vue";
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";

export default {
  components: {
    Navbar,
    FooterX,
  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        password1: "",
        password2: "",
      },
      successful: false,
      message: "",
      loading: false,
      errors: []
    };
  },
  computed: {
    ...mapGetters(["getselectedUser","getUsers","getId"]),
  },
  methods: {
    ...mapMutations(["SET_SELECTED_USER"]),
    async pushForm() {
      this.message = "";
      this.loading = true;
      this.successful = false;
      this.errors = [];
      const user = {
          name: this.form.name,
          email: this.form.email,
          password: this.form.password1,
          type: this.getselectedUser
        }
      if (this.form.name && this.form.password1 && this.form.password2 && this.form.email) {
          if(this.form.password1 == this.form.password2){
        //makes request by dispatching an action
        try {
          if(user.type == "alone" || user.type == "tutor" ){
          await this.$store.dispatch("registerPatient", user /*formData*/);
          }
          else if(user.type == "psychologist"){
            await this.$store.dispatch("registerPsychologist", user /*formData*/);
          }
          this.message = this.$store.getters.getMessage;
          this.successful = true;
        } catch (error) {
          this.message =
            (error.response && error.response.data) ||
            error.message || error.toString();
        } finally {
          this.loading = false;
        }
        }
      } else {
        this.loading = false;
        if (!this.user.username) {
          this.errors.push("Username required.");
        }
        if (!this.user.password) {
          this.errors.push("Password required.");
        }
      }
      this.SET_SELECTED_USER(null);
      // this.$router.push("/login")
    }
  },
};
</script>


<style scoped>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
.container {
  display: flex;
  width: 85% !important;
  justify-content: space-around;
  margin-top: 80px;
  margin-bottom: 300px;
  overflow: hidden;
}
.container2 {
  display: flex;
  width: 75% !important;
  justify-content: space-around;
  overflow: hidden;
}
.card {
  background-color: #f8e9a1 !important;
  border: none !important;
  width: 269px;
  height: 550px;
  color: #374785;
  text-align: center;
}
.card:hover {
  cursor: pointer;
  opacity: 0.8;
}
.card2 {
  background-color: #f8e9a1 !important;
  border: none !important;
  color: #374785;
  text-align: center;
}
.card2:hover {
  cursor: pointer;
  opacity: 0.8;
}
.cardImage {
  height: 283.66px;
  margin-bottom: 15px;
  background-size: cover;
}

.card-2 {
  margin-top: 5px;
  margin-left: -35px;
}
.card-3 {
  margin-top: 6px;
  margin-left: -70px;
}
.card h2 {
  padding: 10px;
}
.card2 h4 {
  padding: 20px;
}
.card p {
  padding: 10px;
  font-size: 13px;
}
#yellowbg {
  position: absolute;
  z-index: -2;
  margin-top: -150px;
  margin-bottom: -150px;
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
.input {
  width: 30%;
  height: 10%;
  margin-left: 20%;
  border: 3px solid #374785;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.8);
  margin-bottom: 30px;
}
label {
  position:absolute;
  color: #374785;
  font-size: 16px;
  margin-top: 0.5%;
  margin-left: 7%;
}
</style>

