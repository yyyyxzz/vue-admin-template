<template>
  <div class="right1">
    <div class="rc1-header">功率对比</div>
    <div class="rc1-chart-container">
      <LineChart :chartData="pData"></LineChart>
    </div>
  </div>
</template>

<script>
import LineChart from "./Charts/LineChart";
export default {
  name: "RightChart2",
  data() {
    return {
      pData: {
        xAxis: [0, 1, 2, 3, 4, 5, 6, 7],
        unit: "kW",
        data: [1, 2, 3, 2, 3, 5, 6, 3],
        data2: [2, 2, 6, 5, 3, 7, 8, 3]
      }
    };
  },
  components: { LineChart }
};
</script>

<style lang="scss">
.right1 {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
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
