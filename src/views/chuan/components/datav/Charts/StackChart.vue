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
          right: 10
        },
        legend: {
          itemWidth: 15,
          itemHeight: 15,
          data: ["工作时间", "非工作时间"],
          textStyle: {
            color: "white"
          }
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "line" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        calculable: true,
        xAxis: {
          data: chartData.xAxis,
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
          name: "kWh",
          axisLabel: {
            textStyle: {
              color: style.textColor
            }
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: "white"
            }
          },
          axisTick: {
            show: false
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
          splitNumber: 4
        },
        series: [
          {
            name: "工作时间",
            type: "bar",
            data: chartData.data,
            barWidth: 10,
            stack: "num", //折叠显示
            itemStyle: {
              normal: { color: "#306BD2" }
            }
          },
          {
            name: "非工作时间",
            type: "bar",
            data: chartData.data,
            barWidth: 10,
            stack: "num", //折叠显示
            itemStyle: {
              normal: { color: "#FF8849" }
            }
          }
        ]
      };
      this.chart.setOption(barOption);
    }
  }
};
</script>
