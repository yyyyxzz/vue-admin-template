<template>
  <div class="app-container">
    <!-- <el-cascader
      :options="options"
      :props="{ checkStrictly: true }"
      clearable
      @change="handleSelect"
      v-model="selectedItem"
    ></el-cascader> -->
    <el-row style="background:white;padding:16px 16px 0;margin-bottom:32px;">
      <line-chart :chart-data="lineChartData" />
      <el-button
        type="primary"
        style="position:absolute;top:10px;right:10px"
        @click="stop"
        >{{ timer === null ? "start" : "stop" }}</el-button
      >
    </el-row>
    <el-row style="background:white;padding:16px 16px 0;margin-bottom:32px;">
      <stack-chart :chart-data="lineChartData" />
      <el-button
        type="primary"
        style="position:absolute;top:10px;right:10px"
        @click="stop"
        >{{ timer === null ? "start" : "stop" }}</el-button
      >
    </el-row>
    <el-row :gutter="32">
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <raddar-chart />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <pie-chart />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <bar-chart />
        </div>
      </el-col>
    </el-row>
    <!-- <NormalBarChart
      id="bar"
      :style="{ height: '300px' ,width:'100%'}"
      title="本周用电量"
      :chartData="energyData"
    ></NormalBarChart> -->
  </div>
</template>
<script>
//import NormalBarChart from "@/components/Charts/NormalBarChart";
import PanelGroup from "./components/PanelGroup";
import LineChart from "./components/LineChart";
import RaddarChart from "./components/RaddarChart";
import PieChart from "./components/PieChart";
import BarChart from "./components/BarChart";
import StackChart from "./components/StackChart";

const lineChartData = {
  newVisitis: {
    expectedData: [100, 120, 161, 134, 105, 160, 165],
    actualData: [120, 82, 91, 154, 162, 140, 145]
  },
  messages: {
    expectedData: [200, 192, 120, 144, 160, 130, 140],
    actualData: [180, 160, 151, 106, 145, 150, 130]
  },
  purchases: {
    expectedData: [80, 100, 121, 104, 105, 90, 100],
    actualData: [120, 90, 100, 138, 142, 130, 130]
  },
  shoppings: {
    expectedData: [130, 140, 141, 142, 145, 150, 160],
    actualData: [120, 82, 91, 154, 162, 140, 130]
  }
};
export default {
  components: {
    PanelGroup,
    LineChart,
    RaddarChart,
    PieChart,
    BarChart,
    StackChart
  },
  data() {
    return {
      lineChartData: {
        expectedData: [100, 120, 161, 134, 105, 160, 165],
        actualData: [120, 182, 191, 154, 162, 180, 195],
        xData: [1, 2, 3, 4, 5, 6, 7]
      },
      energyData: {
        xAxis: [1, 2, 3],
        unit: "kW",
        data: [1, 2, 3]
      },
      options: [
        {
          value: "8111",
          label: "长江鸡场",
          children: [
            {
              value: "sck1",
              label: "鸡舍左",
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
          label: "公司食堂",
          children: [
            {
              value: "sck21",
              label: "餐厅1"
            },
            {
              value: "sck31",
              label: "插座3"
            }
          ]
        }
      ],
      selectedItem: "8111",
      timer: null
    };
  },

  methods: {
    handleSelect(val) {
      console.log("selectedItem: ", this.selectedItem);
    },
    stop() {
      if (this.timer != null) {
        clearInterval(this.timer);
        this.timer = null;
      } else {
        this.timer = setInterval(() => {
          this.lineChartData.expectedData.push(Math.random() * 100);
          this.lineChartData.actualData.push(Math.random() * 100);
          this.lineChartData.xData.push(
            this.lineChartData.xData[this.lineChartData.xData.length - 1] + 1
          );
        }, 1000);
      }
    }
  },
  created() {}
};
</script>
<style lang="scss" scoped>
.echarts {
  width: 100%;
  height: 100%;
}
.chart-wrapper {
  background: white;
  padding: 16px 16px 0;
  margin-bottom: 32px;
}
</style>
