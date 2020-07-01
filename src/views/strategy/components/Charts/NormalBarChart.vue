<template>
  <div :id="id" :style="{ height: height, width: width }" />
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
      this.chart = echarts.init(document.getElementById(this.id));
      this.setOptions(this.chartData);
    },
    setOptions(chartData) {
      let barOption = {
        grid: {},
        legend: {
          data: ['卧室空调']
        },
        tooltip: {
          trigger: "axis",
          borderColor: "#636F7F",
          borderWidth: 1,
          backgroundColor: "rgba(99,111,127,1)",
          textStyle: {
            color: "#ffffff",
            fontWeight: "bold",
            fontSize: 14
          },
          transitionDuration: 0.6,
          formatter: `{b0}<br />{c0}(${chartData.unit})`,
          axisPointer: {
            type: "line",
            lineStyle: {
              color: style.lineColor,
              width: 1,
              type: "solid"
            }
          }
        },
        calculable: true,
        xAxis: {
          data: chartData.xAxis.map(function(x) {
            return x;
          }),
          axisTick: {
            show: false
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
          name: "用电量（kWh）",
          nameTextStyle: {
            fontSize: 15
          },
          axisLabel: {
            textStyle: {
              color: style.textColor
            }
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: true
          },
          type: "value",
          boundaryGap: false,
          // 分隔线线的类型
          splitLine: {
            show: true,
            lineStyle: {
              color: "lightgrey",
              type: "dashed"
            }
          },
          splitNumber: 6
        },
        series:[{
          type: "bar",
          name:'卧室空调',
          data: chartData.data,
          barWidth: 10,
          itemStyle: {
            normal: {
              //barBorderRadius: 20,
              color: 'rgb(0,133,246)'
            }
          }
        }]
      };
      this.chart.setOption(barOption);
    }
  }
};
</script>
