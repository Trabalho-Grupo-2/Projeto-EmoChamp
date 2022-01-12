<template>
  <div>
    <Navbar />
    <div>
      <img src="../assets/registerbg.svg" alt="yellowbg" id="yellowbg" />
      <div class="b-row" style="height: 100px"></div>
      <div class="b-row" style="height: 200px"></div>
      <div class="b-row" style="height: 800px">
        <b-form>
          <label for="email"
            >Email:</label>
            <b-form-input type="text"></b-form-input><br />
          <label for="password"
            >Password:</label>
            <b-form-input type="password"></b-form-input>
          <b-button type="submit" variant="primary">Login</b-button>
        </b-form>
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

<style scoped>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}


#yellowbg {
  position: absolute;
  z-index: -2;
  margin-top: -150px;
  margin-bottom: -150px;
}
</style>