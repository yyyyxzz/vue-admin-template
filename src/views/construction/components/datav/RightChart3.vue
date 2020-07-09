<template>
  <div class="right-chart-2">
    <div class="rc1-header">电量信息</div>

    <div class="rc1-chart-container">
       <NormalBarChart
        id="loadChart14"
        style="{ height: '100%' ,width :'100%' }"
        width="100%"
        :chartData="energyData"
      ></NormalBarChart>
    </div>
  </div>
</template>

<script>
import NormalBarChart from "./Charts/NormalBarChart";


export default {
  name: "RightChart3",
  data() {
    return {
       energyData: {
        xAxis: [1, 2, 3,4,5,6,7],
        unit: "kWh",
        data: [100, 210, 113,450,230,400,40]
      },
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
