<template>
  <div class="right-chart-2">
    <div class="rc1-header">需求响应情况</div>

    <div class="rc1-chart-container">
      <dv-charts :option="option" />
    </div>
  </div>
</template>

<script>
import NormalBarChart from "./Charts/NormalBarChart";
const radius = '65%'
export default {
  name: "RightChart3",
  data() {
    return {
      option: {
        series: [
          {
            type: "gauge",
            startAngle: -Math.PI / 2,
            endAngle: Math.PI * 1.5,
            arcLineWidth: 10,
            radius:radius,
            data: [
              {
                name: "itemA",
                value: 65,
                gradient: ["#03c2fd", "#1ed3e5", "#2fded6"],
                radius:radius
              }
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
            details: {
              show: true,
              formatter: "{value}%",
              style: {
                fill: "#1ed3e5",
                fontSize: 30
              }
            }
          }
        ]
      },
      energyData: {
        xAxis: [1, 2, 3, 4, 5, 6, 7],
        unit: "kWh",
        data: [100, 210, 113, 450, 230, 400, 40]
      }
    };
  },
  components: { NormalBarChart }
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
    // padding-bottom: 10px;
    // padding-right: 10px;
    box-sizing: border-box;
  }
}
</style>
