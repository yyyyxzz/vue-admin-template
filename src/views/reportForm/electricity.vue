<template>
  <div class="app-container">
    <el-cascader
      :options="options"
      :props="{ checkStrictly: true }"
      clearable
      @change="handleSelect"
      v-model="selectedItem"
    ></el-cascader>
      <NormalBarChart
      id="bar"
      :style="{ height: '300px' ,width:'100%'}"
      title="本周用电量"
      :chartData="energyData"
    ></NormalBarChart>
  </div>
</template>
<script>
import NormalBarChart from "@/components/Charts/NormalBarChart";

export default {
  components: {
    NormalBarChart
  },
  data() {
    return {
      energyData: {
        xAxis: [1, 2, 3],
        unit: "kW",
        data: [1, 2, 3]
      },
      options: [
        {
          value: "8111",
          label: "网关1",
          children: [
            {
              value: "sck1",
              label: "插座1",
              children: [
                {
                  value: "sck11111",
                  label: "插座11111"
                }
              ]
            },
            {
              value: "sck2",
              label: "插座2"
            }
          ]
        },
        {
          value: "8112",
          label: "网关2",
          children: [
            {
              value: "sck21",
              label: "插座2"
            },
            {
              value: "sck31",
              label: "插座3"
            }
          ]
        }
      ],
      selectedItem: "8111"
    };
  },

  methods: {
    handleSelect(val) {
      console.log("selectedItem: ", this.selectedItem);
    }
  }
};
</script>
<style lang="scss" scoped>
.echarts {
  width: 100%;
  height: 100%;
}
</style>
