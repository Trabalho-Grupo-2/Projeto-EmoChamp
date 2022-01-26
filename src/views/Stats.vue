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

    export default {
        components: {
            Navbar,
            FooterX,
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