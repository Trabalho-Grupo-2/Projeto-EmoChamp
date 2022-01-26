<template>
    <div>
        <Navbar />

        <div class="consultaImg">
            <img id="pagemarker" src="../assets/activepagemarker.svg" alt="marker" />
            <img id="redBaloonTop" src="../assets/redelipse.svg" alt="Red Baloon" style="margin-top: 60px" />
        </div>

        <div class="consulta">
            <b-container class="consultaContainer">
                <b-row class="consultaAddPaciente" align-v="center" align-h="start">
                    <b-col class="consultaAddCol" cols="12">
                        <p>Adicionar Paciente :</p>
                    </b-col>
                    <b-col cols="5">
                        <input type="text" class="consultaAddInput">
                    </b-col>
                    <b-col >
                        <b-button type="button" variant="outline-primary" size="lg" class="buttonPlay">
                            Adicionar
                        </b-button>
                    </b-col>
                </b-row>

                <div class="consultaSearch">
                    <b-row class="consultaSearchPaciente">
                        <b-col cols="3">
                            <span>Procurar Paciente: </span>
                        </b-col>
                        <b-col>
                            <input type="text" class="consultaSearchInput">
                        </b-col>
                    </b-row>

                    <b-row class="consultaIconGroup" align-v="center" align-h="center">
                        <b-col sm align-self="center">
                            <img src="../assets/seta-left.svg" class="nextFoto">
                        </b-col>
                        <b-col sm>
                            <img class="gameFoto" src="../assets/Badges/Group179.svg">
                        </b-col>
                         <b-col sm>
                            <img class="gameFoto" src="../assets/Badges/Group207.svg">
                        </b-col>
                        <b-col sm>
                            <img class="gameFoto" src="../assets/Badges/Group190.svg">
                        </b-col>
                        <b-col sm>
                            <img class="gameFoto" src="../assets/Badges/Group198.svg">
                        </b-col>
                        <b-col sm align-self="center">
                            <img src="../assets/seta-right.svg" class="nextFoto">
                        </b-col>
                    </b-row>
                </div>
            </b-container>
        </div>

        <div class="consultaTab">
            <b-tabs content-class="mt-3" align="center" fill>
                <b-tab title="Geral" active>
                    <p>I'm the first tab</p>

                    <button @click="tabela()"> Teste !</button>
                    <div id="chart"></div>


                </b-tab>
                <b-tab title="Jogo 1">
                    <p>I'm the second tab</p>
                </b-tab>
                <b-tab title="Jogo 2">
                    <p>I'm the first tab</p>
                </b-tab>
                <b-tab title="Categorias">
                    <p>I'm the second tab</p>
                </b-tab>
            </b-tabs>
        </div>
        <div class="consultaImg">
            <img id="bluebg" src="../assets/ondasmakerBaixo.svg" alt="marker" />
        </div>

        <FooterX />
    </div>
</template>

<script>
    import Navbar from "../components/Navbar.vue";
    import FooterX from "../components/FooterX.vue";
    import ApexCharts from 'apexcharts'



    export default {
        components: {
            Navbar,
            FooterX,
        },
         data() {
            return {
                options: {
                    series: [44],
                    colors: ['#F8E9A1'],
                    chart: {
                        height: 500,
                        type: 'radialBar',
                    },
                    plotOptions: {
                        radialBar: {
                            dataLabels: {
                                name: {
                                    fontSize: '22px',
                                },
                                value: {
                                    fontSize: '16px',
                                },
                                total: {
                                    show: true,
                                    label: 'Total',
                                    formatter: function () {
                                        return 249
                                    }
                                }
                            }
                        }
                    },
                    labels: ['Yoga'
                    ],
                },
            }
        },

        methods: {
            tabela() {
                var chart = new ApexCharts(document.querySelector("#chart"), this.options);
                chart.render();
            }
        },
    };
</script>

<style>
    .consultaImg #pagemarker {
        position: absolute;
        left: 889px;
        top: 0px;
        z-index: -1;
    }

    .consultaImg #redBaloonTop {
        margin-top: 60px;
        top: 200px;
        position: absolute;
    }

    .consultaImg #bluebg {
        position: absolute;
        width: 100%;
        height: auto;
        top: 800px;
        z-index: -2;
    }

    .consulta {
        color: #24305E;
    }

    .consulta .consultaContainer {
        margin: 50px 50px 600px 50px;
    }

    .consulta .consultaContainer .consultaAddPaciente {
        margin: 150px 200px 50px 300px;
    }

    .consulta .consultaContainer .consultaAddPaciente .consultaAddCol{
        margin: 0px 0px 20px 0px;
        font-size: 20px;
    }

    .consulta .consultaContainer .consultaAddPaciente .consultaAddInput{
        width: 260px;
        background-color: #F9F9F9

    }

    .consulta .consultaContainer .consultaSearch {
        background-color: #F9F9F9;
        margin: 100px 50px 100px 200px;
        padding: 25px 50px 50px 50px;
    }

    .consulta .consultaContainer .consultaSearch span{    
        font-size: 20px;
    }

    .consulta .consultaContainer .consultaSearch .consultaSearchInput{
        background-color: #F9F9F9;

    }

    .consulta .consultaContainer .consultaSearch .consultaIconGroup {
        margin: 50px 50px 0px 50px;
    }

    .consulta .consultaContainer .consultaSearch .consultaIconGroup .gameFoto {
        height: 100px;
        width: 100px;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }

    .consulta .consultaContainer .consultaSearch .consultaIconGroup .nextFoto {
        height: 75px;
        width: 50%;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }


    .consulta .buttonPlay {
        margin: 0px 0px 0px 0px;
        font-size: 20px;
        padding: 4px 50px 8px 50px;

        background-color: #ffffff;
        color: #374785;
        border-color: #374785;
        border: 3px solid;
    }

    .consulta .buttonPlay:hover {
        background-color: #374785 !important;
        color: white !important;
        border: 3px solid #374785;
    }
    .consultaTab {
        width: 50%;
        margin-left: 20%;
        margin-bottom: 10%;
    }


</style>