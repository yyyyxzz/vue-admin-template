<template>
  <div class="chart-container">
    <div :id="id" class="content" :style="{height:height,width:width}"/>
  </div>
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
    title: {
      type: String,
      default: "排行"
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
      var el = document.getElementById(this.id)
      el.style.width = this.width;
      this.chart = echarts.init(el);
      this.setOptions(this.chartData);
    },
    setOptions(chartData) {
      let barOption = {
        grid: {
          left: 40,
          top: 30,
          bottom: 30,
          right:10
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
          name:'用电量（W）',
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
        series: {
          type: "bar",
          data: chartData.data,
          barWidth: 10,
          itemStyle: {
            normal: {
              //barBorderRadius: 20,
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
<style scoped lang="scss">
.chart-container {
  height: 100%;
  width:100%;
}
</style>
