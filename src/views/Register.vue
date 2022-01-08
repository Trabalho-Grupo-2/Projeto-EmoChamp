<template>
  <div>
    <Navbar />
    <img
      id="logobg"
      src="../assets/redelipse.svg"
      alt="logo back"
      style="margin-top: 60px"
    />
    <div class="w-100 p-3 text-center">
      <div class="b-row">
        <h1 class="display-4" style="color: #374785; font-size: 30px; margin-top: -300px">
          Escolhe o cenário mais adequado à tua situação atual.
        </h1>
      </div>
    </div>
    <section class="container">
      <div class="card">
        <div class="cardImage card-1"></div>
        <h2>Estou Sozinho</h2>
        <p>Adequado caso estejas a utilizar   aplicação por conta própria. Caso estejas com dificuldades procura a ajuda de alguém que conheças.</p>
      </div>
      <div class="card">
        <div class="cardImage card-2"></div>
        <h2>Estou Acompanhado</h2>
        <p>Adequado para utilização  supervisionada. É possível a  criação de filtros e jogos costumizados, permitindo uma resposta mais eficaz face às necessidades que procura.</p>
      </div>
      <div class="card">
        <div class="cardImage card-3"></div>
        <h2>Sou um Psicólogo</h2>
        <p>A aplicação permite gerir um    conjunto de pacientes, fornecendo acesso ao seu desempenho. Obtenha informação e personalize o seu planeamento de consultas.</p>
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
  width: 80%;
  justify-content: space-around;
}
.card {
  background-color: #F8E9A1 !important;
  border:none;
  width:269px;
  height:550px;
  color:#374785;
}
.cardImage{
  background-color: #000000;
  height: 283.66px;
  margin-bottom: 15px;
}
</style>