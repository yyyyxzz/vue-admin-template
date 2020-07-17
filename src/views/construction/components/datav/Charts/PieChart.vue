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
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "300px"
    }
  },
  data() {
    return {
      chart: null
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart();
    });
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
      this.chart.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        color: ["#346EF2", "#67C23A", "#E6A23C"],
        // legend: {
        //   left: "center",
        //   bottom: "10",
        //   data: ["在线", "离线", "故障"],
        //   textStyle: {
        //     color: "white"
        //   }
        // },
        series: [
          {
            name: "设备详情",
            type: "pie",
            // roseType: "radius",
            radius: ['50%', '60%'],
            // center: ["50%", "48%"],
            data: [
              { value: 320, name: "在线", itemStyle: {} },
              { value: 240, name: "离线", itemStyle: {} },
              { value: 0, name: "故障", itemStyle: {} }
            ],
            animationEasing: "cubicInOut",
            animationDuration: 2600,
            label: {
                show: false
            },
          }
        ]
      });
    }
  }
};
</script>
