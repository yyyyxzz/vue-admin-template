<template>
  <div :id="id" :class="className" :style="{ height: height, width: width }" />
</template>
<script>
import echarts from "echarts";
import resize from "./mixins/resize";
import style from "./mixins/style";

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
      this.chart = echarts.init(document.getElementById(this.id));
      this.setOptions(this.chartData);
    },
    setOptions(chartData) {
      let lineOption = {
        legend: {
          data: ['卧室空调']
        },
        title: {
          text: "",
          textStyle: {
            //文字颜色
            color: style.textColor,
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
              color: style.lineColor,
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
          // axisLine:{
          //     show:false
          // },
          data: chartData.xAxis.map(function(x) {
            return x;
          }),
          axisLabel: {
            textStyle: {
              color: style.axiasColor,
              align: "center",
              baseline: "top"
            },
            //rotate : 20,
            margin: 15
          }
        },
        yAxis: {
          name: "功率（W）",
          nameTextStyle: {
            fontSize: 15
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: true
          },
          // 横向标线 默认为TRUE
          axisLabel: {
            textStyle: {
              color: style.axiasColor
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
            name:'卧室空调',
            data: chartData.data,
            symbol: "none", //拐点样式
            symbolSize: 8, //拐点大小
            smooth: true,
            color: style.pointColor, //拐点大小
            shadowColor: "rgba(35,149,229,0.8)",
            shadowBlur: 20,
            itemStyle: {
              normal: {
                lineStyle: {
                  width: 3, //折线宽度
                  color: style.lineColor //折线颜色
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
<style scoped lang="scss"></style>
