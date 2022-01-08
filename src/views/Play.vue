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
          Escolhe o o jogo que pretendes jogar!
        </h1>
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

<style></style>
