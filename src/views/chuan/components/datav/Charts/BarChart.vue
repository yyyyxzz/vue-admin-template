<template>
  <div :class="className" :style="{ height: height, width: width }" />
</template>

<script>
import echarts from "echarts";
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
      default: "30%"
    },
    chartData: {
      //type:Object,
      // default:{}
    }
  },
  data() {
    return {
      chart: null
      // chartData:this.chartData
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
  mounted() {
    this.initChart();
    this.chartData = this.chartData;
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  watch: {
    chartData: {
      deep: true,
      handler(val) {
        this.setOptions(val);
      }
    }
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el);
      this.setOptions(this.chartData);
    },
    setOptions(chartData) {
      let barOption = {
        animationDuration: 1000,
        grid:{
          left:80
        },
        tooltip: {
          trigger: "item",
          borderColor: "#636F7F",
          borderWidth: 1,
          backgroundColor: "rgba(99,111,127,1)",
          textStyle: {
            color: "#ffffff",
            fontWeight: "bold",
            fontSize: 12
          },
          transitionDuration: 0.6,
          formatter: `{b0}<br />{c0}(${chartData.unit})`,
          axisPointer: {
            type: "line",
            lineStyle: {
              color: "#05F41E",
              width: 1,
              type: "solid"
            }
          }
        },
        calculable: true,
        yAxis: {
          data: this.xAiasData,
          axisLine: { show: false },
          axisTick: { show: false },
          axisLabel: {
            textStyle: {
              color: "white",
              align: "center",
              baseline: "center",
              fontSize: 13
            },

            // rotate : 20,
            margin: 55
          }
        },
        xAxis: {
          // 横向标线 默认为TRUE
          axisLabel: {
            textStyle: {
              color: "#ffaa32"
            }
          },
          type: "value",
          boundaryGap: false,
          // 分隔线线的类型
          splitLine: {
            show: false,
            lineStyle: {
              color: "#EFF0F0",
              type: "dashed"
            }
          },
          splitNumber: 3
        },
        series: {
          type: "bar",
          data: this.value,
          barWidth: 12,
          itemStyle: {
            normal: {
              label: {
                show: true,
                position: "right",
                formatter: item => {
                  return `${item.value} ${chartData.unit}`;
                },
                color: "white"
              },
              barBorderRadius: 20,
              color: new echarts.graphic.LinearGradient(
                0,
                0,
                1,
                0,
                [
                  {
                    offset: 0,
                    color: "rgb(0,112,254)" // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "rgb(0,188,225)" // 100% 处的颜色
                  }
                ],
                false
              ),
              // shadowColor: 'rgba(35,149,229,0.8)',
              // shadowBlur: 20,
              areaStyle: { type: "default" }
            }
          }
        }
      };
      this.chart.setOption(barOption);
    }
  }
};
</script>
