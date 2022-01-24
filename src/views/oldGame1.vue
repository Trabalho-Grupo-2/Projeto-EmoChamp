<template>
  <div>
    <Navbar />
    <img id="pagemarker" src="../assets/activepagemarker.svg" alt="marker" />
    <div class="g1instructions">
      <h2>Jogo 1 - Reconhecimento de Expressões</h2>
      <p>Intruções</p>
      <ol>
        <li>Na área de jogo podes encontrar 4 imagens.</li>
        <li>Seleciona a imagem que achas que corresponde à emoção descrita.</li>
        <li>Continua a adivinhar até que o jogo acabe.</li>
        <li>Diverte-te!</li>
      </ol>
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
#pagemarker {
  position: relative;
  left: 550px;
  top: -15px;
  z-index: -1;
}
.div {
  height: 500px;
}
</style>
