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
                <p>Número de perguntas respondidas:</p>
                <span class="totalGeral">{{stats.game1totalnumber + stats.game2totalnumber}}</span>
              </div>
            </b-col>
            <b-col>
              <div class="total">
                <p>Número de partidas jogo 1:</p>
                <span class="totalJogo1">{{Math.round(stats.game1totalnumber/20)}}</span>
              </div>
            </b-col>
            <b-col>
              <div class="total">
                <p>Número de partidas jogo 2:</p>
                <span class="totalJogo2">{{Math.round(stats.game2totalnumber/20)}}</span>
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
                  <b-progress-bar :value="Math.round((stats.game1rightanswers[0]*100)/stats.game1totalanwsers[0]) || 0">
                    <span>
                      <strong>
                        Angry: {{Math.round((stats.game1rightanswers[0]*100)/stats.game1totalanwsers[0]) || 0}} %
                      </strong></span
                    >
                  </b-progress-bar>
                </b-progress>
                <b-progress :max="max" height="30px" animated>
                  <b-progress-bar :value="Math.round((stats.game1rightanswers[1]*100)/stats.game1totalanwsers[1]) || 0">
                    <span>
                      <strong>
                        Disgusted: {{Math.round((stats.game1rightanswers[1]*100)/stats.game1totalanwsers[1]) || 0}} %
                      </strong></span
                    >
                  </b-progress-bar>
                </b-progress>
                <b-progress :max="max" height="30px" animated>
                  <b-progress-bar :value="Math.round((stats.game1rightanswers[2]*100)/stats.game1totalanwsers[2]) || 0">
                    <span>
                      <strong>
                        Fearful: {{Math.round((stats.game1rightanswers[2]*100)/stats.game1totalanwsers[2]) || 0}} %
                      </strong></span
                    >
                  </b-progress-bar>
                </b-progress>
                <b-progress :max="max" height="30px" animated>
                  <b-progress-bar :value="Math.round((stats.game1rightanswers[3]*100)/stats.game1totalanwsers[3]) || 0">
                    <span>
                      <strong>
                        Happy: {{Math.round((stats.game1rightanswers[3]*100)/stats.game1totalanwsers[3]) || 0}} %
                      </strong></span
                    >
                  </b-progress-bar>
                </b-progress>
                <b-progress :max="max" height="30px" animated>
                  <b-progress-bar :value="Math.round((stats.game1rightanswers[4]*100)/stats.game1totalanwsers[4]) || 0">
                    <span>
                      <strong>
                        Neutral: {{Math.round((stats.game1rightanswers[4]*100)/stats.game1totalanwsers[4]) || 0}} %
                      </strong></span
                    >
                  </b-progress-bar>
                </b-progress>
                <b-progress :max="max" height="30px" animated>
                  <b-progress-bar :value="Math.round((stats.game1rightanswers[5]*100)/stats.game1totalanwsers[5]) || 0">
                    <span>
                      <strong> Sad: {{Math.round((stats.game1rightanswers[5]*100)/stats.game1totalanwsers[5]) || 0}} % </strong></span
                    >
                  </b-progress-bar>
                </b-progress>
                <b-progress :max="max" height="30px" animated>
                  <b-progress-bar :value="Math.round((stats.game1rightanswers[6]*100)/stats.game1totalanwsers[6]) || 0">
                    <span>
                      <strong>
                        Surprised: {{Math.round((stats.game1rightanswers[6]*100)/stats.game1totalanwsers[6]) || 0}} %
                      </strong></span
                    >
                  </b-progress-bar>
                </b-progress>
              </div>
            </b-col>
          </b-row>
          <b-row class="caixas">
            <b-col>
              <div class="total">
                <p>Número de perguntas respondidas:</p>
                <span class="totalGeral">{{stats.game1totalnumber}}</span>
              </div>
            </b-col>
            <b-col>
              <div class="total">
                <p>Número de partidas:</p>
                <span class="totalJogo1">{{Math.round(stats.game1totalnumber/20)}}</span>
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
                  <b-progress-bar :value="0">
                    <span>
                      <strong>
                        Angry: 0 %
                      </strong></span
                    >
                  </b-progress-bar>
                </b-progress>
                <b-progress :max="max" height="30px" animated>
                  <b-progress-bar :value="0">
                    <span>
                      <strong>
                        Disgusted: 0 %
                      </strong></span
                    >
                  </b-progress-bar>
                </b-progress>
                <b-progress :max="max" height="30px" animated>
                  <b-progress-bar :value="0">
                    <span>
                      <strong>
                        Fearful: 0 %
                      </strong></span
                    >
                  </b-progress-bar>
                </b-progress>
                <b-progress :max="max" height="30px" animated>
                  <b-progress-bar :value="0">
                    <span>
                      <strong>
                        Happy: 0 %
                      </strong></span
                    >
                  </b-progress-bar>
                </b-progress>
                <b-progress :max="max" height="30px" animated>
                  <b-progress-bar :value="0">
                    <span>
                      <strong>
                        Neutral: 0 %
                      </strong></span
                    >
                  </b-progress-bar>
                </b-progress>
                <b-progress :max="max" height="30px" animated>
                  <b-progress-bar :value="0">
                    <span>
                      <strong> Sad: 0 % </strong></span
                    >
                  </b-progress-bar>
                </b-progress>
                <b-progress :max="max" height="30px" animated>
                  <b-progress-bar :value="0">
                    <span>
                      <strong>
                        Surprised: 0 %
                      </strong></span
                    >
                  </b-progress-bar>
                </b-progress>  
              </div>
            </b-col>
          </b-row>
          <b-row class="caixas">
            <b-col>
              <div class="total">
                <p>Número de perguntas respondidas:</p>
                <span class="totalGeral">{{game2totalnumber || 0}}</span>
              </div>
            </b-col>
            <b-col>
              <div class="total">
                <p>Número de partidas:</p>
                <span class="totalJogo1">{{Math.round(game2totalnumber/20) || 0}}</span>
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
                <b-progress-bar :value="Math.round((stats.game1rightanswers[0]*100)/stats.game1totalanwsers[0]) || 0">
                  <span>
                    <strong> Angry: {{Math.round((stats.game1rightanswers[0]*100)/stats.game1totalanwsers[0]) || 0}} % </strong></span
                  >
                </b-progress-bar>
              </b-progress>
              <b-progress :max="max" height="30px" animated>
                <b-progress-bar :value="Math.round((stats.game1rightanswers[1]*100)/stats.game1totalanwsers[1]) || 0">
                  <span>
                    <strong>
                      Disgusted: {{Math.round((stats.game1rightanswers[1]*100)/stats.game1totalanwsers[1]) || 0}} %
                    </strong></span
                  >
                </b-progress-bar>
              </b-progress>
              <b-progress :max="max" height="30px" animated>
                <b-progress-bar :value="Math.round((stats.game1rightanswers[2]*100)/stats.game1totalanwsers[2]) || 0">
                  <span>
                    <strong>
                      Fearful: {{Math.round((stats.game1rightanswers[2]*100)/stats.game1totalanwsers[2]) || 0}} %
                    </strong></span
                  >
                </b-progress-bar>
              </b-progress>
              <b-progress :max="max" height="30px" animated>
                <b-progress-bar :value="Math.round((stats.game1rightanswers[3]*100)/stats.game1totalanwsers[3]) || 0">
                  <span>
                    <strong> Happy: {{Math.round((stats.game1rightanswers[3]*100)/stats.game1totalanwsers[3]) || 0}} % </strong></span
                  >
                </b-progress-bar>
              </b-progress>
              <b-progress :max="max" height="30px" animated>
                <b-progress-bar :value="Math.round((stats.game1rightanswers[4]*100)/stats.game1totalanwsers[4]) || 0">
                  <span>
                    <strong>
                      Neutral: {{Math.round((stats.game1rightanswers[4]*100)/stats.game1totalanwsers[4]) || 0}} %
                    </strong></span
                  >
                </b-progress-bar>
              </b-progress>
              <b-progress :max="max" height="30px" animated>
                <b-progress-bar :value="Math.round((stats.game1rightanswers[5]*100)/stats.game1totalanwsers[5]) || 0">
                  <span>
                    <strong> Sad: {{Math.round((stats.game1rightanswers[5]*100)/stats.game1totalanwsers[5]) || 0}} % </strong></span
                  >
                </b-progress-bar>
              </b-progress>
              <b-progress :max="max" height="30px" animated>
                <b-progress-bar :value="Math.round((stats.game1rightanswers[6]*100)/stats.game1totalanwsers[6]) || 0">
                  <span>
                    <strong>
                      Surprised: {{Math.round((stats.game1rightanswers[6]*100)/stats.game1totalanwsers[6]) || 0}} %
                    </strong></span
                  >
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
import ApexCharts from "apexcharts";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      stats:{
          game1totalanwsers: [],
          game1rightanswers: [],
          game1totalnumber: 0,
          game1rightnumber: 0,
          game2totalnumber: 0,
      },
      value: 45,
      max: 100,
      options: {
        series: [50],
        colors: ["#F8E9A1"],
        chart: {
          height: 300,
          type: "radialBar",
        },
        plotOptions: {
          radialBar: {
            hollow: {
              margin: 10,
              size: 70,
            },
            dataLabels: {
              name: {
                fontSize: "22px",
              },
              value: {
                fontSize: "16px",
              },
              total: {
                show: true,
                label: "Taxa de sucesso",
              },
            },
          },
        },
        labels: ["Jogo 1"],
      },
      options2: {
        series: [0],
        colors: ["#F8E9A1"],
        chart: {
          height: 300,
          type: "radialBar",
        },
        plotOptions: {
          radialBar: {
            hollow: {
              margin: 10,
              size: 70,
            },
            dataLabels: {
              name: {
                fontSize: "22px",
              },
              value: {
                fontSize: "16px",
              },
              total: {
                show: true,
                label: "Taxa de sucesso",
              },
            },
          },
        },
        labels: ["Jogo 2"],
      },
    };
  },
  computed: {
    ...mapGetters(["getselectedPatient"]),
  },
  methods: {
      calculateStats() {
          for(let i=0;i< this.getselectedPatient.categories.length -1; i++){
              this.stats.game1totalanwsers.push(this.getselectedPatient.categories[i].total);
              this.stats.game1totalnumber+= this.getselectedPatient.categories[i].total;
              this.stats.game1rightanswers.push(this.getselectedPatient.categories[i].correct);
              this.stats.game1rightnumber+= this.getselectedPatient.categories[i].correct;
          } 
          this.options.series = [Math.round((this.stats.game1rightnumber*100)/this.stats.game1totalnumber)];
      }
  },
  mounted() {
    this.calculateStats();
    var chart = new ApexCharts(document.querySelector("#chart"), this.options);
    var chart2 = new ApexCharts(
      document.querySelector("#chart2"),
      this.options2
    );
    var chart3 = new ApexCharts(
      document.querySelector("#chart3"),
      this.options
    );
    var chart4 = new ApexCharts(
      document.querySelector("#chart4"),
      this.options2
    );

    chart.render();
    chart2.render();
    chart3.render();
    chart4.render();
  },
};
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
  color: #f76c6c;
  font-size: 20px;
}

.totalJogo1 {
  color: #f76c6c;
  font-size: 20px;
}

.totalJogo2 {
  color: #f76c6c;
  font-size: 20px;
}

.progress-bar {
  font-size: 15px;
  background-color: #f8e9a1 !important;
}

.progress {
  margin: 30px 0 30px 0;
}

.tabGroup {
  margin: 0px 0px 600px 0px !important;
}
</style>