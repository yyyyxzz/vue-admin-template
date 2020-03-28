<template>
  <div
    :class="className"
    :style="{
      backgroundImage: 'url(' + bg + ')',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%'
    }"
  >
    <div class="title">
      <span>{{ title }}</span>
    </div>
    <div :id="id" class="content" />
  </div>
</template>

<script>
import echarts from "echarts";
import style from "./mixins/style";
import resize from "./mixins/resize";
import panel from "../../../../assets/panel.png";
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
    title: {
      type: String,
      default: "排行"
    },
    chartData: {
      //type:Object,
      // default:{}
    }
  },
  data() {
    return {
      bg: panel,
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
    showMore() {
      window.location.href = "http://202.121.138.158/AmiWeb/login!init.do";
    },
    initChart() {
      this.chart = echarts.init(document.getElementById(this.id));
      this.setOptions(this.chartData);
    },
    setOptions(chartData) {
      let barOption = {
        grid: {
          left: 40,
          top: 20,
          bottom: 30
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
          axisLabel: {
            textStyle: {
              color: style.textColor
            }
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          type: "value",
          boundaryGap: false,
          // 分隔线线的类型
          splitLine: {
            show: true,
            lineStyle: {
              color: "grey",
              type: "solid"
            }
          },
          splitNumber: 3
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
              // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              //     offset: 0,
              //     color: '#37BBF8'
              //
              // }, {
              //     offset: 1,
              //     color: '#2294E4'
              // }]),
              // shadowColor: 'rgba(35,149,229,0.8)',
              //shadowBlur: 20,
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
@import "../../../../styles/variables";
.chart {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 10px;
  height: 100%;
  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: $titleColor;
    width: 100%;
    font-size: 16px;
    font-weight: bold;
  }
  .content {
    width: 100%;
    height: 90%;
  }
}
</style>
