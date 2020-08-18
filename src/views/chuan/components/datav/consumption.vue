<template>
  <div class="consumption-container">
    <div class="header">用电详情</div>
    <div class="container">
      <StackChart :chartData="pData"></StackChart>
    </div>
  </div>
</template>

<script>
import StackChart from "./Charts/StackChart";
export default {

  data() {
    return {
     pData: {
        xAxis: ['7/21','7/22','7/23','7/24','7/25','7/26','7/27'],
        unit: "kW",
        data: [1, 2, 3, 2, 3, 5, 6, 3],
        data2:[2, 2, 6, 5, 3, 7, 8, 3],
      }
    };
  },
  components: { StackChart }
};
</script>

<style lang="scss">
.consumption-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  .header {
    font-size: 18px;
    font-weight: bold;
    height: 30px;
    line-height: 30px;
  }

  .container {
    flex: 1;
    display: flex;
  }
}
</style>
