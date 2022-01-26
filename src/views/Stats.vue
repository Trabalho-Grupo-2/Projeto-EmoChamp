<template>
    <div>
        <Navbar />

        <div class="statsImg">
            <img id="pagemarker" src="../assets/activepagemarker.svg" alt="marker" />
            <img id="redBaloonTop" src="../assets/redelipse.svg" alt="Red Baloon" style="margin-top: 60px" />
        </div>
        <div class="statsTab">
            <b-tabs content-class="mt-3" align="center" fill>
                <b-tab title="Geral" active><p>I'm the first tab</p>
                <mdb-container>
    <mdb-row>
      <mdb-col md="4">
        <div class="d-flex justify-content-center">
          <mdb-simple-chart :value="value" color="#4CAF50">
            52%
          </mdb-simple-chart>
        </div>
        <div class="d-flex justify-content-center mt-3">
          <mdb-badge color="green"
            >Sales <mdb-icon icon="arrow-circle-up"
          /></mdb-badge>
        </div>
      </mdb-col>
      <mdb-col md="4">
        <div class="d-flex justify-content-center">
          <mdb-simple-chart :value="value2" color="#F44336">
            64%
          </mdb-simple-chart>
        </div>
        <div class="d-flex justify-content-center mt-3">
          <mdb-badge color="red"
            >ROI <mdb-icon icon="arrow-circle-down"
          /></mdb-badge>
        </div>
      </mdb-col>
      <mdb-col md="4">
        <div class="d-flex justify-content-center">
          <mdb-simple-chart :value="value3" color="#9E9E9E">
            100%
          </mdb-simple-chart>
        </div>
        <div class="d-flex justify-content-center mt-3">
          <mdb-badge color="grey"
            >Conversion <mdb-icon icon="minus-square"
          /></mdb-badge>
        </div>
      </mdb-col>
    </mdb-row>
  </mdb-container>
                </b-tab>
                <b-tab title="Jogo 1"><p>I'm the second tab</p></b-tab>
                <b-tab title="Jogo 2" active><p>I'm the first tab</p></b-tab>
                <b-tab title="Categorias"><p>I'm the second tab</p></b-tab>
            </b-tabs>
        </div>


        <FooterX />
    </div>
</template>

<script>
    import Navbar from "../components/Navbar.vue";
    import FooterX from "../components/FooterX.vue";
    import {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbSimpleChart,
    mdbBadge,
    mdbIcon
  } from "mdbvue";

    export default {
        components: {
            Navbar,
            FooterX,
            mdbContainer,
            mdbRow,
            mdbCol,
            mdbSimpleChart,
            mdbBadge,
            mdbIcon
        },
    };
</script>

<style>
.statsImg #pagemarker {
        position: absolute;
        left: 897px;
        top: 0px;
        z-index: -1;
    }

.statsImg #redBaloonTop {
    margin-top: 60px;
    position: absolute;
}
.statsTab{
    width:50%;
    margin-top: 10%;
    margin-left: 20%;
}
</style>