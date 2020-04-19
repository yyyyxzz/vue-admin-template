<template>
  <div class="statistics-wrapper">
    <span class="link" @click="$router.push('./dashboard/index')">更多</span>
    <NormalBarChart
      id="bar"
      :style="{ height: '100%' }"
      title="本周用电量"
      :chartData="energyData"
    ></NormalBarChart>
  </div>
</template>
<script>
import NormalBarChart from "./Charts/NormalBarChart";

export default {
  data() {
    return {
      energyData: {
        xAxis: [1, 2, 3],
        unit: "kW",
        data: [1, 2, 3]
      }
    };
  },
  components: {
    NormalBarChart
  }
};
</script>
<style lang="scss" scoped>
.statistics-wrapper {
  position: relative;
  .link {
    position: absolute;
    top: -5px;
    right: -5px;
    color: #0198ff;
    cursor: pointer;
  }
}
</style>
