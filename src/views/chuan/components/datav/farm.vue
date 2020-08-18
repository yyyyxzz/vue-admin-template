<template>
  <contentTemplate>
    <template v-slot:title
      >养殖场</template
    >
    <template v-slot:subtitle
      >单位产量能耗</template
    >
    <template v-slot:content>
      <MultiLineChart id="farmChart" :chartData="pData"></MultiLineChart>
    </template>
  </contentTemplate>
</template>

<script>
import contentTemplate from "./contentTemplate/index";
import MultiLineChart from "./Charts/MultiLineChart";

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
  components: { MultiLineChart, contentTemplate }
};
</script>
