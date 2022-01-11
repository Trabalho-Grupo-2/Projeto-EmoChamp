<template>
  <div>
    <Navbar />
    <div class="div"></div>
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
.div {
  height: 500px;
}
</style>