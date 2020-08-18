<template>
  <contentTemplate>
    <template v-slot:title
      >办公楼宇</template
    >
    <template v-slot:subtitle
      >能耗对比</template
    >
    <template v-slot:content>
      <StackChart id="office-chart" :chartData="pData"></StackChart>
    </template>
  </contentTemplate>
</template>

<script>
import contentTemplate from "./contentTemplate/index";
import StackChart from "./Charts/StackChart";


export default {
  data() {
    return {
      pData: {
        xAxis: ["7/21", "7/22", "7/23", "7/24", "7/25", "7/26", "7/27"],
        unit: "kW",
        data: [1, 2, 3, 2, 3, 5, 6, 3],
        data2: [2, 2, 6, 5, 3, 7, 8, 3]
      }
    };
  },
  components: { StackChart, contentTemplate }
};
</script>
