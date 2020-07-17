<template>
  <div :class="className" :style="{ height: height, width: width }" />
</template>

<script>
import echarts from "echarts";
import resize from "./mixins/resize";
// import Bpbus from '../../api/bpbus'
// import {mapState} from 'vuex' //注册 action 、 state 、getter
// import g38 from '../../json/86200001038/app'
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
      chart: null,
      busData: ""
    };
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
      let lineOption = {
        animationDuration: 1000,
        grid: {
          top: 40,
          bottom: 30
        },
        title: {
          // text: "负荷曲线",
          textStyle: {
            //文字颜色
            color: "white",
            //字体风格,'normal','italic','oblique'
            fontStyle: "normal",
            //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
            fontWeight: "bold",
            //字体系列
            fontFamily: "sans-serif",
            //字体大小
            fontSize: 16
          }
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
          formatter: `{b0}时<br />{c0}(${chartData.unit})`,
          axisPointer: {
            type: "line",
            lineStyle: {
              color: "white",
              width: 1,
              type: "solid"
            }
          }
          // axisPointer : {      // 坐标轴指示器，坐标轴触发有效
          //   type : 'shadow',    // 默认为直线，可选为：'line' | 'shadow'
          //   shadowStyle :{
          //     color : '#D6EAFA',
          //     opacity : 0.5,
          //   }
          // },
        },
        calculable: true,
        xAxis: {
          axisTick: {
            show: false
          },
          data: chartData.xAxis.map(function(x) {
            return x;
          }),
          axisLine: {
            lineStyle: {
              color: "white"
            }
          },
          axisLabel: {
            textStyle: {
              color: "white",
              align: "center",
              baseline: "top"
            },
            //rotate : 20,
            margin: 15
          }
        },
        yAxis: {
          //   name: "负荷曲线",
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          // 横向标线 默认为TRUE
          axisLabel: {
            textStyle: {
              color: "white"
            }
          },
          type: "value",
          boundaryGap: false,
          // 分隔线线的类型
          splitLine: {
            show: true,
            lineStyle: {
              color: "#EFF0F0",
              type: "dashed"
            }
          },
          splitNumber: 3
        },
        series: [
          {
            //name:systemName[0],
            type: "line",
            data: chartData.data,
            symbol: "none", //拐点样式
            symbolSize: 8, //拐点大小
            smooth: true,
            color: "balck", //拐点大小
            shadowColor: "rgba(35,149,229,0.8)",
            shadowBlur: 20,
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
      this.chart.setOption(lineOption);
    }
  }
};
</script>
