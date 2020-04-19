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
      <!--            <el-button style="background: none;border:none;font-size: 14px;font-weight: bold;height: 20px" type="small"-->
      <!--                       @click="showMore">更多<i class="el-icon-arrow-right"></i></el-button>-->
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
          left: 95,
          top: 0,
          bottom: 0,
          right: 40
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
              color: style.textColor,
              align: "center",
              baseline: "center",
              fontSize: 13
            },

            // rotate : 20,
            margin: 55
          }
        },
        xAxis: {
          show: false,
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
              shadowBlur: 20,
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
@import "../../../../styles/variables.scss";
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
