<template>
  <div class="right2">
    <div class="rc1-header">设备类型</div>

    <div class="rc1-chart-container">
       <pie-chart width="100%" height="100%"></pie-chart>
    </div>
  </div>
</template>

<script>
import PieChart from "./Charts/PieChart";
export default {
  name: "RightChart2",
  data() {
    return {
      percentage: 10,
      colors: [
        { color: "#f56c6c", percentage: 20 },
        { color: "#e6a23c", percentage: 40 },
        { color: "#5cb87a", percentage: 60 },
        { color: "#1989fa", percentage: 80 },
        { color: "#6f7ad3", percentage: 100 }
      ]
    };
  },
  components: { PieChart }
};
</script>

<style lang="scss">
.right2 {
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
