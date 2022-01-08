<template>
  <div>
    <Navbar />
    <div class="div">
        

        <b-container class="bv-example-row">
            <div class="homeTitle">
                <b-row class="text-center">
                    <b-col>
                        <h3 class="title">
                            Melhora a tua capacidade de reconhecer emoções
                        </h3>
                    </b-col>
                </b-row>

                <b-row>
                    <b-col cols="6"></b-col>
                    <b-col cols="6" align-self="end">
                        <p class="subTitle">
                            Aprende a distinguir entre diferentes emoções com a ajuda do nosso website. Apresentamos diferentes jogos para reconhecer e representar emoções, efetua o registo para mais funcionalidades.
                        </p>
                    </b-col>
                </b-row>

                <b-row >
                    <b-col cols="9"></b-col>
                    <b-col cols="3">
                        <b-button class="buttonPlay" variant="outline-primary" size="lg">   Play    </b-button>
                    </b-col>
                </b-row>
            </div>
        </b-container>

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
.div {
  margin: 100px 50px 10px 50px;
}

.homeTitle {
    margin-top: 200px;
    color: #24305E;
}

.homeTitle .title {
    margin-bottom: 30px;
}

.homeTitle .buttonPlay {
    margin: 20px
}
</style>
