<template>
  <div>
    <Navbar />
    <div class="w-100 p-3 text-center">
      <div class="b-row" style="height: 10px"></div>
      <div class="b-row">
        <h1 class="display-1">Display 1</h1>
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
