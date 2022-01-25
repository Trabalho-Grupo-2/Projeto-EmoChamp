<template>
  <div>
    <Navbar />
    <img id="pagemarker2" src="../assets/activepagemarker.svg" alt="marker" />
    <div class="g1instructions">
      <h2>Jogo 2 - Representação de Emoções</h2>
      <br>
      <p>Instruções:</p>
      <ol>
        <li>Será dada uma emoção.</li>
        <li>Terás de representar através da webcam a emoção pedida.</li>
        <li>Repete o passo 2 até que o jogo acabe.</li>
        <li>Diverte-te!</li>
      </ol>
    </div>
    <div class="container_game1">
      
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
#pagemarker2 {
  position: absolute;
  left: 580px;
  top:0px;
  z-index: -1;
}
.g1instructions {
  margin-left: 100px;
  margin-top: 50px;
  color: #24305E;
}
.container_game1{
  margin-top:50px;
  margin-bottom: 150px;
  margin-left:170px;
  height:630px;
  width: 1090px;
  background-image: url("../assets/game_container.svg");
}
</style>