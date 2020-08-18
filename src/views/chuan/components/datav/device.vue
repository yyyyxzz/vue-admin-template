<template>
  <div class="chuan-device-container">
    <div class="title">运行工况</div>
    <div class="content">
      <PieChart width="50%" height="100%" id="pie1" :chartData="chart1"></PieChart>
      <dv-decoration-2
        class="decoration-1"
        :reverse="true"
        style="width:5px;"
      />
      <PieChart width="50%" height="100%" id="pie2" :chartData="chart2"></PieChart>
    </div>
  </div>
</template>

<script>
import PieChart from "./Charts/PieChart";

export default {
  data() {
    return {
      chart1: {
        legend: ["在线", "离线"],
        data: [{ value: 320, name: "在线" }, { value: 240, name: "离线" }]
      },
      chart2: {
        legend: ["正常", "异常"],
        data: [{ value: 120, name: "正常" }, { value: 4, name: "异常" }]
      }
    };
  },
  components: { PieChart }
};
</script>

<style lang="scss">
.chuan-device-container {
  height: 100%;
  padding: 10px;
  position: relative;
  width: 100%;
  .title {
    font-size: 20px;
    font-weight: bold;
    line-height: 35px;
  }

  .content {
    height: calc(100% - 35px);
    display: flex;
    width: 100%;
    align-items: space-between;
    flex-wrap: wrap;
    position: relative;
    .decoration-1 {
      position: absolute;
      left: 50%;
    }
    .horizontal {
      position: absolute;
      top: 50%;
    }
    .column {
      position: absolute;
      top: 50%;
      transform: rotate(90deg);
    }
    .content-item {
      height: 50%;
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .number {
        color: #306bd2;
        font-size: 35px;
        font-weight: bold;
      }
      .title {
        font-size: 18px;
        font-weight: normal;
      }
    }
  }
}
</style>
