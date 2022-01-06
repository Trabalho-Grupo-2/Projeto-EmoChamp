<template>
  <div class="home">
    <Navbar></Navbar>
    <img id="bluebg" src="../assets/homebackground.svg" alt="marker" />
    <div class="callforaction">
      <h1>Melhora a tua capacidade de reconhecer emoções</h1>
      <p>
        Aprende a distinguir entre diferentes emoções com a ajuda do nosso
        website.<br />
        Apresentamos diferentes jogos para reconhecer e representar emoções,
        efetua<br />
        o registo para mais funcionalidades.
      </p>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>
<style scoped>
.home #bluebg {
  position: absolute;
  width: 1540px;
  height: 705px;
  right: 0px;
  top: -80px;
  z-index: -1;
}
.home .callforaction h1 {
  position: absolute;
  font-size: 30px;
  top: 196px;
  left: 371px;
  color: #24305e;
  font-family: Comfortaa_Bold, Playfair_SemiBold, Arial;
  line-height: 50px;
}
.home .callforaction p {
  position: absolute;
  top: 274px;
  left: 635px;
  text-align: justify;
  font-family: Comfortaa_Regular, Playfair_Regular, Arial;
  color: #24305e;
  line-height: 35px;
  font-size: 15px;
}
</style>
