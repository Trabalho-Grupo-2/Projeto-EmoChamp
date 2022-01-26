<template>
    <div>
        <Navbar />

        <div class="statsImg">
            <img id="pagemarker" src="../assets/activepagemarker.svg" alt="marker" />
            <img id="redBaloonTop" src="../assets/redelipse.svg" alt="Red Baloon" style="margin-top: 60px" />
        </div>
        <StatsX/>
        <div class="statsImgfooter">
            <img id="bluebg" src="../assets/ondasmakerBaixo.svg" alt="marker" />
        </div>

        <FooterX />
    </div>
</template>

<script>
    import Navbar from "../components/Navbar.vue";
    import FooterX from "../components/FooterX.vue";
    import StatsX from "../components/StatsX.vue"
    import ApexCharts from 'apexcharts'


    // var chart = new ApexCharts(document.querySelector("#chart"), options);
    // chart.render();


    export default {
        components: {
            Navbar,
            FooterX,
            StatsX
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
                var chart = new ApexCharts(document.querySelector("#chart")[0], this.options);
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
     .statsImgfooter #bluebg {
        position: absolute;
        width: 100%;
        height: auto;
        top: 1200px;
        z-index: -2;
    }

</style>