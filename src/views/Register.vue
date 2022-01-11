<template>
  <div>
    <Navbar />
    <img
      id="logobg"
      src="../assets/redelipse.svg"
      alt="logo back"
      style="margin-top: 60px; position: absolute;"
    />
    <div class="w-100 p-3 text-center">
      <div class="b-row">
        <h1 class="display-4" style="color: #374785; font-size: 30px; margin-top: 50px">
          Escolhe o cenário mais adequado à tua situação atual.
        </h1>
      </div>
    </div>
    <section class="container">
      <div class="card">
        <div class="card">
        <div class="cardImage"><img class="card-3" src="../assets/Users/Humaaans Standing.svg"></div>
        <h2>Sou um Psicólogo</h2>
        <p>A aplicação permite gerir um    conjunto de pacientes, fornecendo acesso ao seu desempenho. Obtenha informação e personalize o seu planeamento de consultas.</p>
      </div>
        <div class="cardImage"><img class="card-1" src="../assets/Users/human-verde.svg"></div>
        <h2>Estou Sozinho</h2>
        <p>Adequado caso estejas a utilizar   aplicação por conta própria. Caso estejas com dificuldades procura a ajuda de alguém que conheças.</p>
      </div>
      <div class="card">
        <div class="cardImage"><img class="card-2" src="../assets/Users/human-red.svg"></div>
        <h2>Estou Acompanhado</h2>
        <p>Adequado para utilização  supervisionada. É possível a  criação de filtros e jogos costumizados, permitindo uma resposta mais eficaz face às necessidades que procura.</p>
      </div>
    </section>

    <FooterX />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import FooterX from "../components/FooterX.vue";

export default {
  components: {
    Navbar,
    FooterX,
  },
};
</script>

<style>
*{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
.container {
  display: flex;
  width:85% !important;
  justify-content: space-around;
  margin-top: 80px;
  margin-bottom: 300px;
  overflow:hidden;
}
.card {
  background-color: #F8E9A1 !important;
  border:none !important;
  width:269px;
  height:550px;
  color:#374785;
  text-align: center;
}
.cardImage{
  height: 283.66px;
  margin-bottom: 15px;
  background-size: cover;
}
.card-2{
  margin-top: 5px;
}
.card-3{
  margin-top: 6px;
}
.card h2{
  padding: 10px;
}
.card p{
  padding: 10px;
  font-size: 13px;
}
</style>