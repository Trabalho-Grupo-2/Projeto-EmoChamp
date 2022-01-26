<template>
    <div class="statsTab">
        <b-tabs content-class="mt-3" align="center" class="tabGroup" fill>
            <b-tab title="Geral" active>
                <b-container>
                    <b-row>
                        <b-col>
                            <div id="chart"></div>
                        </b-col>
                        <b-col>
                            <div id="chart2"></div>
                        </b-col>
                    </b-row>
                    <b-row class="caixas">
                        <b-col>
                            <div class="total">
                                <p>Número de perguntas respondidas:</p><span class="totalGeral">500</span>
                            </div>
                        </b-col>
                        <b-col>
                            <div class="total">
                                <p>Número de partidas jogo 1:</p><span class="totalJogo1">100</span>
                            </div>
                        </b-col>
                        <b-col>
                            <div class="total">
                                <p>Número de partidas jogo 2:</p><span class="totalJogo2">20</span>
                            </div>
                        </b-col>
                    </b-row>
                </b-container>

            </b-tab>
            <b-tab title="Jogo 1">
                <b-container>
                    <b-row align-v="center">
                        <b-col cols="4">
                            <div id="chart3"></div>
                        </b-col>
                        <b-col cols="8">
                            <div class="progressBar">
                                <b-progress :max="max" height="30px" animated>
                                    <b-progress-bar :value="value">
                                        <span> <strong> Angry: {{((value / max) * 100)}} % </strong></span>
                                    </b-progress-bar>
                                </b-progress>
                                <b-progress :max="max" height="30px" animated>
                                    <b-progress-bar :value="value">
                                        <span> <strong> Disgusted: {{((value / max) * 100)}} % </strong></span>
                                    </b-progress-bar>
                                </b-progress>
                                <b-progress :max="max" height="30px" animated>
                                    <b-progress-bar :value="value">
                                        <span> <strong> Fearful: {{((value / max) * 100)}} % </strong></span>
                                    </b-progress-bar>
                                </b-progress>
                                <b-progress :max="max" height="30px" animated>
                                    <b-progress-bar :value="value">
                                        <span> <strong> Happy: {{((value / max) * 100)}} % </strong></span>
                                    </b-progress-bar>
                                </b-progress>
                                <b-progress :max="max" height="30px" animated>
                                    <b-progress-bar :value="value">
                                        <span> <strong> Neutral: {{((value / max) * 100)}} % </strong></span>
                                    </b-progress-bar>
                                </b-progress>
                                <b-progress :max="max" height="30px" animated>
                                    <b-progress-bar :value="value">
                                        <span> <strong> Sad: {{((value / max) * 100)}} % </strong></span>
                                    </b-progress-bar>
                                </b-progress>
                                <b-progress :max="max" height="30px" animated>
                                    <b-progress-bar :value="value">
                                        <span> <strong> Surprised: {{((value / max) * 100)}} % </strong></span>
                                    </b-progress-bar>
                                </b-progress>
                                <b-progress :max="max" height="30px" animated>
                                    <b-progress-bar :value="value">
                                        <span> <strong> Sad: {{((value / max) * 100)}} % </strong></span>
                                    </b-progress-bar>
                                </b-progress>
                            </div>
                        </b-col>
                    </b-row>
                    <b-row class="caixas">
                        <b-col>
                            <div class="total">
                                <p>Número de perguntas respondidas:</p><span class="totalGeral">500</span>
                            </div>
                        </b-col>
                        <b-col>
                            <div class="total">
                                <p>Número de partidas:</p><span class="totalJogo1">100</span>
                            </div>
                        </b-col>
                    </b-row>
                </b-container>
            </b-tab>
            <b-tab title="Jogo 2">
                <b-container>
                    <b-row align-v="center">
                        <b-col cols="4">
                            <div id="chart4"></div>
                        </b-col>
                        <b-col cols="8">
                            <div class="progressBar">
                                <b-progress :max="max" height="30px" animated>
                                    <b-progress-bar :value="value">
                                        <span> <strong> Angry: {{((value / max) * 100)}} % </strong></span>
                                    </b-progress-bar>
                                </b-progress>
                                <b-progress :max="max" height="30px" animated>
                                    <b-progress-bar :value="value">
                                        <span> <strong> Disgusted: {{((value / max) * 100)}} % </strong></span>
                                    </b-progress-bar>
                                </b-progress>
                                <b-progress :max="max" height="30px" animated>
                                    <b-progress-bar :value="value">
                                        <span> <strong> Fearful: {{((value / max) * 100)}} % </strong></span>
                                    </b-progress-bar>
                                </b-progress>
                                <b-progress :max="max" height="30px" animated>
                                    <b-progress-bar :value="value">
                                        <span> <strong> Happy: {{((value / max) * 100)}} % </strong></span>
                                    </b-progress-bar>
                                </b-progress>
                                <b-progress :max="max" height="30px" animated>
                                    <b-progress-bar :value="value">
                                        <span> <strong> Neutral: {{((value / max) * 100)}} % </strong></span>
                                    </b-progress-bar>
                                </b-progress>
                                <b-progress :max="max" height="30px" animated>
                                    <b-progress-bar :value="value">
                                        <span> <strong> Sad: {{((value / max) * 100)}} % </strong></span>
                                    </b-progress-bar>
                                </b-progress>
                                <b-progress :max="max" height="30px" animated>
                                    <b-progress-bar :value="value">
                                        <span> <strong> Surprised: {{((value / max) * 100)}} % </strong></span>
                                    </b-progress-bar>
                                </b-progress>
                                <b-progress :max="max" height="30px" animated>
                                    <b-progress-bar :value="value">
                                        <span> <strong> Sad: {{((value / max) * 100)}} % </strong></span>
                                    </b-progress-bar>
                                </b-progress>
                            </div>
                        </b-col>
                    </b-row>
                    <b-row class="caixas">
                        <b-col>
                            <div class="total">
                                <p>Número de perguntas respondidas:</p><span class="totalGeral">500</span>
                            </div>
                        </b-col>
                        <b-col>
                            <div class="total">
                                <p>Número de partidas:</p><span class="totalJogo1">20</span>
                            </div>
                        </b-col>
                    </b-row>
                </b-container>
            </b-tab>
            <b-tab title="Categorias">
                <b-row align-v="center" align-h="center">
                    <b-col cols="8">
                        <div class="progressBar">
                            <b-progress :max="max" height="30px" animated>
                                <b-progress-bar :value="value">
                                    <span> <strong> Angry: {{((value / max) * 100)}} % </strong></span>
                                </b-progress-bar>
                            </b-progress>
                            <b-progress :max="max" height="30px" animated>
                                <b-progress-bar :value="value">
                                    <span> <strong> Disgusted: {{((value / max) * 100)}} % </strong></span>
                                </b-progress-bar>
                            </b-progress>
                            <b-progress :max="max" height="30px" animated>
                                <b-progress-bar :value="value">
                                    <span> <strong> Fearful: {{((value / max) * 100)}} % </strong></span>
                                </b-progress-bar>
                            </b-progress>
                            <b-progress :max="max" height="30px" animated>
                                <b-progress-bar :value="value">
                                    <span> <strong> Happy: {{((value / max) * 100)}} % </strong></span>
                                </b-progress-bar>
                            </b-progress>
                            <b-progress :max="max" height="30px" animated>
                                <b-progress-bar :value="value">
                                    <span> <strong> Neutral: {{((value / max) * 100)}} % </strong></span>
                                </b-progress-bar>
                            </b-progress>
                            <b-progress :max="max" height="30px" animated>
                                <b-progress-bar :value="value">
                                    <span> <strong> Sad: {{((value / max) * 100)}} % </strong></span>
                                </b-progress-bar>
                            </b-progress>
                            <b-progress :max="max" height="30px" animated>
                                <b-progress-bar :value="value">
                                    <span> <strong> Surprised: {{((value / max) * 100)}} % </strong></span>
                                </b-progress-bar>
                            </b-progress>
                            <b-progress :max="max" height="30px" animated>
                                <b-progress-bar :value="value">
                                    <span> <strong> Sad: {{((value / max) * 100)}} % </strong></span>
                                </b-progress-bar>
                            </b-progress>
                        </div>
                    </b-col>
                </b-row>
            </b-tab>
        </b-tabs>
    </div>
</template>

<script>
    import ApexCharts from 'apexcharts'
    export default {
        data() {
            return {
                value: 45,
                max: 100,
                options: {
                    series: [50],
                    colors: ['#F8E9A1'],
                    chart: {
                        height: 300,
                        type: 'radialBar',
                    },
                    plotOptions: {
                        radialBar: {
                            hollow: {
                                margin: 10,
                                size: 70

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
                            hollow: {
                                margin: 10,
                                size: 70

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
        mounted() {
            var chart = new ApexCharts(document.querySelector("#chart"), this.options);
            var chart2 = new ApexCharts(document.querySelector("#chart2"), this.options2);
            var chart3 = new ApexCharts(document.querySelector("#chart3"), this.options)
            var chart4 = new ApexCharts(document.querySelector("#chart4"), this.options2)

            chart.render();
            chart2.render();
            chart3.render();
            chart4.render();
        },


    }
</script>

<style>
    .statsTab {
        width: 70%;
        margin: 10% auto 30% auto;
    }

    .caixas {
        margin-top: 100px !important;
    }

    .total {
        padding: auto;
        border-style: solid;
        border-color: #374785;
        border-radius: 5px;
        color: #374785;
        text-align: center;
    }

    .totalGeral {
        color: #F76C6C;
        font-size: 20px;
    }

    .totalJogo1 {
        color: #F76C6C;
        font-size: 20px;
    }

    .totalJogo2 {
        color: #F76C6C;
        font-size: 20px;
    }

    .progress-bar {
        font-size: 15px;
        background-color: #F8E9A1 !important;
    }

    .progress {
        margin: 30px 0 30px 0;
    }

    .tabGroup {
        margin: 0px 0px 600px 0px !important
    }
</style>