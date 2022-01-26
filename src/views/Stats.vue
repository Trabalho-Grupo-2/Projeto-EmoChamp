<template>
    <div>
        <Navbar />

        <div class="statsImg">
            <img id="pagemarker" src="../assets/activepagemarker.svg" alt="marker" />
            <img id="redBaloonTop" src="../assets/redelipse.svg" alt="Red Baloon" style="margin-top: 60px" />
        </div>
        <div class="statsTab">
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


        <FooterX />
    </div>
</template>

<script>
    import Navbar from "../components/Navbar.vue";
    import FooterX from "../components/FooterX.vue";
    import ApexCharts from 'apexcharts'


    // var chart = new ApexCharts(document.querySelector("#chart"), options);
    // chart.render();


    export default {
        components: {
            Navbar,
            FooterX,
        },

        data() {
            return {
                options: {
                    series: [44, 55, 67, 83, 90, 30, 40, 60, 80],
                    colors: ['#F6B8C3', '#B8B8B8', '#E0B0FF', '#C8A2C8', '#CEC7C8', '#FF78A9', '#DDA0DD', '#D6A8B6','#CBC0DC'],
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
                    labels: ['Yoga', 'Receitas', 'Jardinagem', 'Artes Plásticas', 'Quiz', 'Fitness', 'Jogos',
                        'Meditação', 'DIY'
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

    .statsTab {
        width: 50%;
        margin-top: 10%;
        margin-left: 20%;
    }
</style>