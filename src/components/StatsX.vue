<template>
  <div class="statsTab">
            <b-tabs content-class="mt-3" align="center" fill>
                <b-tab title="Geral" active >
                    <b-container>
                        <b-row>
                            <b-col><div id="chart"></div>
                            </b-col>
                            <b-col><div id="chart2"></div></b-col>
                        </b-row>
                        <b-row class="caixas">
                            <b-col><div class="total">
                                <p>Número de perguntas respondidas:</p><span class="totalGeral">500</span></div></b-col>
                            <b-col><div class="total"><p>Número de partidas jogo 1:</p><span class="totalJogo1">100</span></div></b-col>
                            <b-col><div class="total"><p>Número de partidas jogo 2:</p><span class="totalJogo2">20</span></div></b-col>
                        </b-row>
                    </b-container>

                    </b-tab>
                <b-tab title="Jogo 1">
                   <b-container>
                        <b-row>
                            <b-col><div id="chart3"></div>
                            </b-col>
                            <b-col></b-col>
                        </b-row>
                        <b-row class="caixas">
                            <b-col><div class="total">
                                <p>Número de perguntas respondidas:</p><span class="totalGeral">500</span></div></b-col>
                            <b-col><div class="total"><p>Número de partidas:</p><span class="totalJogo1">100</span></div></b-col>
                        </b-row>
                    </b-container>
                </b-tab>
                <b-tab title="Jogo 2">
                   <b-container>
                        <b-row>
                            <b-col><div id="chart4"></div>
                            </b-col>
                            <b-col></b-col>
                        </b-row>
                        <b-row class="caixas">
                            <b-col><div class="total">
                                <p>Número de perguntas respondidas:</p><span class="totalGeral">500</span></div></b-col>
                            <b-col><div class="total"><p>Número de partidas:</p><span class="totalJogo1">100</span></div></b-col>
                        </b-row>
                    </b-container>
                </b-tab>
                <b-tab title="Categorias">
                    <p>I'm the second tab</p>
                </b-tab>
            </b-tabs>
        </div>
</template>

<script>
import ApexCharts from 'apexcharts'
export default {
    data() {
            return {
                condition:"",
                options: {
                    series: [50],
                    colors: ['#F8E9A1'],
                    chart: {
                        height: 300,
                        type: 'radialBar',
                    },
                    plotOptions: {
                        radialBar: {
                            hollow:{
                                margin:10, size: 70

                            },
                            dataLabels: {
                                name: {
                                    fontSize: '22px',
                                },
                                value: {
                                    fontSize: '16px',
                                },
                                total: {
                                    show: true,
                                    label: 'Taxa de sucesso',
                                }
                            }
                        }
                    },
                    labels: ['Jogo 1'],
                },
                options2: {
                    series: [60],
                    colors: ['#F8E9A1'],
                    chart: {
                        height: 300,
                        type: 'radialBar',
                    },
                    plotOptions: {
                        radialBar: {
                            hollow:{
                                margin:10, size: 70

                            },
                            dataLabels: {
                                name: {
                                    fontSize: '22px',
                                },
                                value: {
                                    fontSize: '16px',
                                },
                                total: {
                                    show: true,
                                    label: 'Taxa de sucesso',
                                }
                            }
                        }
                    },
                    labels: ['Jogo 2'],
                },
            }
        },
        mounted () {
            var chart = new ApexCharts(document.querySelector("#chart"), this.options);
            var chart2 = new ApexCharts(document.querySelector("#chart2"), this.options2);

            chart.render();
            chart2.render();
        },
       

}
</script>

<style>
.statsTab{
    width:70%;
    margin: 10% auto 30% auto;
}
.caixas{
    margin-top: 100px !important;
}
.total{
    padding: auto;
    border-style: solid;
    border-color: #374785;
    border-radius: 5px;
    color: #374785;
    text-align: center;
}
.totalGeral{
   color:#F76C6C;
   font-size: 20px;
}
.totalJogo1{
    color:#F76C6C;
    font-size: 20px;
}
.totalJogo2{
    color:#F76C6C;
    font-size: 20px;
}

</style>