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
    <div class="title">使用占比</div>
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
    chartData: {}
  },
  data() {
    return {
      bg: panel,
      chart: null
    };
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
  computed: {
    sum() {
      return (
        this.chartData[0].value +
        this.chartData[1].value +
        this.chartData[2].value
      );
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
  methods: {
    initChart() {
      this.chart = echarts.init(document.getElementById(this.id));
      this.setOptions(this.chartData);
    },
    setOptions(val) {
      var pieOption = {
        animationDuration: 1000,
        title: {
          text: "",
          textStyle: {
            //文字颜色
            color: "#ffaa32",
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
        grid: {
          top: 0,
          bottom: 0
        },
        tooltip: {
          trigger: "item",
          formatter: "{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          top: 10,
          x: "right",
          data: ["空闲", "工作", "告警"],
          textStyle: {
            color: style.textColor
          }
        },
        series: [
          {
            name: "",
            type: "pie",
            radius: ["50%", "60%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: true,
                position: "center",
                formatter: () => {
                  var html;
                  html = "总数量\r\n\r\n" + this.sum;
                  return html;
                },
                textStyle: {
                  fontSize: 15,
                  color: style.textColor
                }
              },
              emphasis: {
                show: false,
                textStyle: {
                  fontSize: "20",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: val,
            itemStyle: {
              normal: {
                barBorderRadius: 20,
                color: function(params) {
                  let colorList = style.color;
                  return colorList[params.dataIndex];
                },
                // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                //     offset: 0,
                //     color: '#37BBF8'
                //
                // }, {
                //     offset: 1,
                //     color: '#2294E4'
                // }]),
                shadowColor: "rgba(35,149,229,0.8)",
                shadowBlur: 20,
                areaStyle: { type: "default" }
              }
            }
          }
        ]
      };
      this.chart.setOption(pieOption);
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
    color: $titleColor;
    text-align: left;
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
