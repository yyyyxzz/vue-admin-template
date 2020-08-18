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
        legend: {
          data: ["养殖场A", "养殖场B"],
          textStyle: {
            color: "white"
          }
        },
        grid: {
          left: 40,
          top: 40,
          bottom: 30,
          right: 10
        },
        tooltip: {
          trigger: "axis",
        },
        calculable: true,
        xAxis: {
          data: chartData.xAxis.map(function(x) {
            return x;
          }),
          axisTick: {
            show: false
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "white"
            }
          },
          axisLabel: {
            textStyle: {
              color: style.textColor,
              align: "center",
              baseline: "top"
            },
            margin: 15
          }
        },
        yAxis: {
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          type: "value",
          boundaryGap: false,
          name: "kWh",
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
          // 分隔线线的类型
          splitLine: {
            show: true,
            lineStyle: {
              color: "lightgrey",
              type: "dashed"
            }
          },
          splitNumber: 4
        },
        series: [
          {
            type: "line",
            data: chartData.data,
            name: "养殖场A",
            itemStyle: {
              normal: {
                //barBorderRadius: 20,
                color: "#469CE6",
              }
            }
          },
          {
            type: "line",
            name: "养殖场B",
            data: chartData.data2,
            itemStyle: {
              normal: {
                //barBorderRadius: 20,
                color: "#E19362",
                
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
