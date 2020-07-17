<template>
  <div class="right1">
    <div class="rc1-header">功率排行</div>
    <div class="rc1-chart-container">
      <BarChart
        id="loadChart131"
        width="100%"
        height="100%"
        :chartData="pData"
      ></BarChart>
    </div>
  </div>
</template>

<script>
import BarChart from "./Charts/BarChart";
export default {
  name: "RightChart2",
  data() {
    return {
      pData: {
        unit: "kW",
        data: [
          { name: "鸡场", value: 123 },
          { name: "食堂", value: 123 },
          { name: "猪场", value: 123 },
        ]
      }
    };
  },
  components: { BarChart }
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
