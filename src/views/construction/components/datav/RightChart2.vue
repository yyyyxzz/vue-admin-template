<template>
  <div class="right-chart-2">
    <div class="rc1-header">功率信息</div>

    <div class="rc1-chart-container">
      <LineChart
        id="loadChart13"
        width="100%"
        height="100%"
        :chartData="pData"
      ></LineChart>
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
        xAxis: {
          name: "第一周",
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
          axisTick: {
            show: false
          },
          style: {
            fill: "white"
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
        title: {
          show: false
        },
        grid: {
          top: 20,
          bottom: 10,
          right: 0,
          left: 60
        },
        yAxis: {
          name: "销售额",
          data: "value",
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
        series: [
          {
            data: [1200, 2230, 1900, 2100, 3500, 4200, 3985],
            type: "line",
            symbol: "none" //拐点样式
          }
        ]
      },
      pData: {
        xAxis: [0, 1, 2, 3, 4, 5, 6, 7],
        unit: "kW",
        data: [1, 2, 3, 2, 3, 5, 6, 3]
      }
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
