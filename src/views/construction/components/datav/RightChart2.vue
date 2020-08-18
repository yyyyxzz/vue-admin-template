<template>
  <div class="right-chart-2">
    <div class="rc1-header">需求响应能力</div>

    <div class="rc1-chart-container">
      <dv-charts :option="option" />
    </div>
  </div>
</template>

<script>
import LineChart from "./Charts/LineChart";
export default {
  name: "RightChart2",
  data() {
    return {
      option: {
        series: [
          {
            type: "gauge",
            startAngle: -Math.PI / 2,
            endAngle: Math.PI * 1.5,
            arcLineWidth: 10,
            data: [
              {
                name: "一级",
                value: 25,
                gradient: ["#03c2fd", "#1ed3e5", "#2fded6"],
                radius: "83%"
              },
              {
                name: "二级",
                value: 45,
                gradient: ['#e7bcf3', '#e690d1', '#fb7293'],
                radius: "63%"
              },
              {
                name: "三级",
                value: 65,
                gradient: ["#fb7293", "#fb7293", "#D55356"],
                radius: "43%"
              },
            ],
            axisLabel: {
              show: false
            },
            axisTick: {
              show: false
            },
            pointer: {
              show: false
            },
            dataItemStyle: {
              lineCap: "round"
            },
            backgroundArc: {
              show: false
            },
            details: {
              show: true,
              formatter: "{name}占比{value}%",
              position: "start",
              offset: [-10, 0],
              style: {
                fill: "#1ed3e5",
                fontSize: 13,
                textAlign: "right"
              }
            }
          }
        ]
      },
      
    };
  },
  components: { LineChart }
};
</script>

<style lang="scss">
.right-chart-2 {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 10px;

  .rc1-header {
    font-size: 18px;
    font-weight: bold;
    height: 30px;
    line-height: 30px;
  }

  .rc1-chart-container {
    flex: 1;
    display: flex;
  }

  .left {
    width: 30%;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .number {
      font-size: 34px;
      color: #096dd9;
      font-weight: bold;
      margin-bottom: 30px;
    }
  }

  .right {
    flex: 1;
    padding-bottom: 20px;
    padding-right: 20px;
    box-sizing: border-box;
  }
}
</style>
