<template>
  <div>
    <Navbar />
    <img
      src="../assets/redelipse.svg"
      alt="bg baloon"
      style="margin-top: 60px"
    />
    <div class="w-100 p-3 text-center" style="margin-bottom: -150px;">
      <div class="b-row">
        <h1
          class="display-4"
          style="color: #374785; font-size: 30px; margin-top: -300px"
        >
          Escolhe o o jogo que pretendes jogar!
        </h1>
      </div>
      <div class="b-row" style="height: 100px"></div>
      <div
        class="container"
        style="width: 75%; display: flex; justify-content: space-around"
      >
        <div class="b-col">
          <img
            src="../assets/selectgameborder.svg"
            alt="Gameselectborder"
            style="z-index: -1; position: absolute; left: 255px; filter: invert(0%) sepia(2%) saturate(17%) hue-rotate(231deg) brightness(103%) contrast(101%);"
          />
          <br />
          <p style="color: #374785; font-size: 20px">Jogo 1</p>
          <img src="../assets/jogo1.jpg" alt="game1preview" />
          <br /><br />
          <p style="color: #374785; font-size: 20px">
            Reconhecimento de Emoções
          </p>
          <p style="color: #374785; font-size: 12px">
            Seleciona entre 4 imagens, a que corresponde a que achas<br />
            que corresponde à emoção descrita, continua a adivinhar até<br />
            que o jogo acabe.
          </p>
          <b-button
            type="button"
            @click="$router.push('Game1')"
            variant="outline-primary"
            size="lg"
            class="buttonPlay"
          >
            Jogar
          </b-button>
        </div>
        <div class="b-col">
          <img
            src="../assets/selectgameborder.svg"
            alt="Gameselectborder"
            style="z-index: -1; position: absolute; left: 800px; filter: invert(0%) sepia(2%) saturate(17%) hue-rotate(231deg) brightness(103%) contrast(101%)"
          />
          <br />
          <p style="color: #374785; font-size: 20px">Jogo 2</p>
          <img src="../assets/jogo2.jpg" alt="game2preview" />
          <br /><br />
          <p style="color: #374785; font-size: 20px">
            Reprodução de Expressões
          </p>
          <p style="color: #374785; font-size: 12px">
            Será dada uma emoção, através da webcam terás que<br />
            representar a expressão que é pedida. Continua a adivinhar até<br />
            que o jogo acabe.
          </p>
          <b-button
            type="button"
            @click="$router.push('Game2')"
            variant="outline-primary"
            size="lg"
            class="buttonPlay"
          >
            Jogar
          </b-button>
        </div>
      </div>
    </div>
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
.buttonPlay {
  margin: 20px 0px 500px 20px !important;
  font-size: 25px !important;
  padding: 4px 50px 8px 50px !important ;

  background-color: #ffffff !important;
  color: #374785 !important;
  border-color: #374785 !important;
  border: 3px solid !important;
  border-radius: 20px !important;
}

.buttonPlay:hover {
  background-color: #374785 !important;
  color: white !important;
  border: 3px solid #374785 !important;
}
</style>
