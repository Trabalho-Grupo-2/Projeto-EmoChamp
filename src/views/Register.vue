<template>
  <div>
    <Navbar />
    <div v-if="selectedUser === null">
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
        <div class="card" @click="SETSELECTEDUSER('psychologist')">
          <div class="cardImage">
            <img class="card-3" src="../assets/Users/Humaaans Standing.svg" />
          </div>
          <h2>Sou um Psicólogo</h2>
          <p>
            A aplicação permite gerir um conjunto de pacientes, fornecendo
            acesso ao seu desempenho. Obtenha informação e personalize o seu
            planeamento de consultas.
          </p>
        </div>
        <div class="card" @click="SETSELECTEDUSER('alone')">
          <div class="cardImage">
            <img class="card-1" src="../assets/Users/human-verde.svg" />
          </div>
          <h2>Estou Sozinho</h2>
          <p>
            Adequado caso estejas a utilizar aplicação por conta própria. Caso
            estejas com dificuldades procura a ajuda de alguém que conheças.
          </p>
        </div>
        <div class="card" @click="SETSELECTEDUSER('tutor')">
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
      <div class="b-row" style="height: 100px"></div>
      <div class="b-row" style="height: 200px"></div>
      <div class="b-row" style="height: 800px">
        <form>
          
        
        </form>
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
import { mapState } from "vuex";

export default {
  components: {
    Navbar,
    FooterX,
  },
  computed: {
    ...mapGetters(["getselectedUser"]),
    ...mapState(["selectedUser"]),
  },
  methods: {
    ...mapMutations(["SETSELECTEDUSER"]),
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
.card {
  background-color: #f8e9a1 !important;
  border: none !important;
  width: 269px;
  height: 550px;
  color: #374785;
  text-align: center;
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
.container2 div {
  width: 200px !important;
  background-color: blue !important;
}
</style>

