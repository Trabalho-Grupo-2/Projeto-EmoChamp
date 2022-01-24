<<<<<<< HEAD
<template>
    <div>
        <Navbar />

        <img id="redBaloonTop" src="../assets/redelipse.svg" alt="Red Baloon" style="margin-top: 60px" />

        <div class="perfil">
            <b-container class="perfilContainer">
                <div class="perfilRowBadge">
                    <b-row align-content="center">
                        <b-col>
                            <img class="perfilIcon" src="../assets/Badges/Group190.svg" alt="perfilIcon">
                            <span class="perfilSpan">user777</span>
                        </b-col>

                        <b-col cols="8" class="perfilAbout">
                            <p class="perfilTag">Sobre mim:</p>
                            <textarea name="" id="" cols="50" rows="5"></textarea>
                        </b-col>
                    </b-row>

                    <div class="perfilRow">

                        <b-row>
                            <b-col>
                                <p>
                                    Nome Completo:
                                </p>
                            </b-col>
                            <b-col>
                                <p>
                                    Pedro Miguel Rodrigues
                                </p>
                            </b-col>
                            <b-col>
                            </b-col>
                        </b-row>

                        <b-row>
                            <b-col>
                                <p>
                                    Email:
                                </p>
                            </b-col>
                            <b-col>
                                <p>
                                    pedrorodrigues@example.com
                                </p>
                            </b-col>
                            <b-col>
                                <b-button type="button" variant="outline-primary" size="lg" class="buttonPlay">
                                    Editar
                                </b-button>
                            </b-col>
                        </b-row>
                    </div>
                </div>

                <b-row class="perfilRowInfo">
                    <b-col>

                    </b-col>

                    <b-col>

                    </b-col>
                </b-row>

                <b-row>
                    <b-col>
                        <!-- <b-carousel id="carousel-no-animation" style="text-shadow: 0px 0px 2px #000" no-animation
                            indicators img-width="1024" img-height="480">
                            <b-carousel-slide class="svgBadge" caption="1 slide" img-src="../assets/Badges/Group180.png">
                            </b-carousel-slide>
                            <b-carousel-slide class="svgBadge" caption="2 slide" img-src="../assets/Badges/Group180.png">
                            </b-carousel-slide>
                            <b-carousel-slide class="svgBadge" caption="3 slide" img-src="../assets/Badges/Group190.svg">
                            </b-carousel-slide>
                            <b-carousel-slide class="svgBadge" caption="4 slide" img-src="../assets/Badges/Group198.svg">
                            </b-carousel-slide>
                            <b-carousel-slide class="svgBadge" caption="First slide" img-src="../assets/Badges/Group207.svg">
                            </b-carousel-slide>
                        </b-carousel> -->

                        <b-carousel id="carousel-no-animation" style="text-shadow: 0px 0px 2px #000" no-animation
                            indicators img-width="1024" img-height="480">
                            <b-carousel-slide caption="First slide" img-src="https://picsum.photos/1024/480/?image=10">
                            </b-carousel-slide>
                            <b-carousel-slide caption="Second Slide" img-src="https://picsum.photos/1024/480/?image=12">
                            </b-carousel-slide>
                            <b-carousel-slide caption="Third Slide" img-src="https://picsum.photos/1024/480/?image=22">
                            </b-carousel-slide>
                            <b-carousel-slide caption="Fourth Slide" img-src="https://picsum.photos/1024/480/?image=23">
                            </b-carousel-slide>
                        </b-carousel>
                    </b-col>
                </b-row>
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

    #redBaloonTop {
        margin-top: 60px;
        top: 200px;
        position: absolute;
    }

    .perfil {
        color: #24305E;
    }

    .perfil .perfilContainer {
        margin: 50px 50px 200px 50px;
    }

    .perfil .perfilContainer .perfilRowBadge {
        margin: 100px 100px 200px 300px;
    }

    .perfil .perfilContainer .perfilRowBadge .perfilIcon {
        height: 125px;
        width: 125px;
        margin: 0px 30px 15px 0px;
    }

    .perfil .perfilContainer .perfilRowBadge .perfilSpan {
        margin: 0px 0px 0px 35px;
    }

    .perfil .perfilContainer .perfilRowBadge .perfilAbout {
        margin: 0px 0px 0px 40px;
    }

    .perfil .perfilContainer .perfilRowBadge .perfilRow {
        margin: 100px 0px 0px 0px;
    }

    .perfil .buttonPlay {
        margin: 0px 0px 0px 0px;
        font-size: 20px;
        padding: 4px 50px 8px 50px;

        background-color: #ffffff;
        color: #374785;
        border-color: #374785;
        border: 3px solid;
    }

    .perfil .buttonPlay:hover {
        background-color: #374785 !important;
        color: white !important;
        border: 3px solid #374785;
    }
</style>
=======
<template>
  <div>
    <Navbar />
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
>>>>>>> 2680938ca3fd3ceac2fa8520876f36e2a39c4579
