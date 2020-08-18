<template>
  <contentTemplate>
    <template v-slot:title
      >酒店</template
    >
    <template v-slot:subtitle
      >温度能耗关联性</template
    >
    <template v-slot:content>
      <LineBarChart id="hotelChart"></LineBarChart>
    </template>
  </contentTemplate>
</template>

<script>
import LineBarChart from "./Charts/LineBarChart";
import contentTemplate from "./contentTemplate/index";

export default {
  data() {
    return {};
  },
  components: { LineBarChart, contentTemplate }
};
</script>
