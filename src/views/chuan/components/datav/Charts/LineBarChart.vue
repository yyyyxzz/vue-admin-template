<template>
  <div :class="className" :style="{ height: height, width: width }" />
</template>

<script>
import echarts from "echarts";
import style from "./mixins/style";
import resize from "./mixins/resize";
export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: "chart"
    },
    id: {
      type: String,
      default: "chart"
    },
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "100%"
    },
    chartData: {}
  },
  data() {
    return {
      chart: null
    };
  },
  computed: {
    xAiasData() {
      return this.chartData.data.map(item => {
        return item.name;
      });
    },
    value() {
      return this.chartData.data.map(item => {
        return item.value;
      });
    }
  },
  watch: {
    chartData: {
      deep: true,
      handler(val) {
        this.setOptions(val);
      }
    }
  },
  mounted() {
    this.initChart();
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el);
      this.setOptions(this.chartData);
    },
    setOptions(chartData) {
      let barOption = {
        animationDuration: 1000,
        grid: {
          left: 40,
          top: 40,
          bottom: 30,
          right: 40
        },
        tooltip: {
          trigger: "axis",
          // axisPointer: {
          //   type: "line" // 默认为直线，可选为：'line' | 'shadow'
          // }
        },
        calculable: true,
        legend: {
          data: ["酒店A", "酒店B", "平均温度"],
          textStyle: {
            color: "white"
          }
        },
        xAxis: [
          {
            type: "category",
            data: [
              "1月",
              "2月",
              "3月",
              "4月",
              "5月",
              "6月",
              "7月",
              "8月",
              "9月",
              "10月",
              "11月",
              "12月"
            ],
            axisPointer: {
              type: "shadow"
            },

            axisLabel: {
              textStyle: {
                color: "white"
              }
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "white"
              }
            },
            axisTick: {
              show: false
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            name: "kWh",
            axisLabel: {
              formatter: "{value} kWh"
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              textStyle: {
                color: "white"
              }
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: "white"
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: "lightgrey",
                type: "dashed"
              }
            },
            splitNumber: 4
          },
          {
            type: "value",
            name: "温度",
            axisLabel: {
              formatter: "{value} °C"
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              textStyle: {
                color: "white"
              }
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: "white"
              }
            },
            splitLine: {
              show: false
            },
            splitNumber: 4
          }
        ],
        series: [
          {
            name: "酒店A",
            type: "bar",
            barWidth: 10,
            data: [
              2.0,
              4.9,
              7.0,
              23.2,
              25.6,
              76.7,
              135.6,
              162.2,
              32.6,
              20.0,
              6.4,
              3.3
            ],
            itemStyle: {
              normal: {
                //barBorderRadius: 20,
                color: "#306BD2"
              }
            }
          },
          {
            name: "酒店B",
            type: "bar",
            barWidth: 10,
            data: [
              2.6,
              5.9,
              9.0,
              26.4,
              28.7,
              70.7,
              175.6,
              182.2,
              48.7,
              18.8,
              6.0,
              2.3
            ],
            itemStyle: {
              normal: {
                color: "#EF8E57"
              }
            }
          },
          {
            name: "平均温度",
            type: "line",
            yAxisIndex: 1,
            data: [
              2.0,
              2.2,
              3.3,
              4.5,
              6.3,
              10.2,
              20.3,
              23.4,
              23.0,
              16.5,
              12.0,
              6.2
            ],
            itemStyle: {
              normal: {
                lineStyle: {
                  width: 3, //折线宽度
                  color: "#367CF1" //折线颜色
                }
              }
            }
          }
        ]
      };
      this.chart.setOption(barOption);
    }
  }
};
</script>
