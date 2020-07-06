<template>
  <div class="right-menu-container col-center">
    <div
      class="menu-content"
      :style="{
        backgroundImage: 'url(' + panel + ')',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%'
      }"
    >
      <BarChart
        id="loadChart"
        style="{ height: '90%' ,width :'355px'}"
        width="100%"
        title="本周用电量"
        :chartData="barData"
      ></BarChart>
    </div>
    <div
      class="menu-content"
      :style="{
        backgroundImage: 'url(' + panel + ')',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%'
      }"
    >
      <NormalBarChart
        id="loadChart1"
        style="{ height: '30%' ,width :'355px' }"
        width="100%"
        title="本周用电量"
        :chartData="energyData"
      ></NormalBarChart>
    </div>
    <div
      class="menu-content"
      :style="{
        backgroundImage: 'url(' + panel + ')',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%'
      }"
    >
      <LineChart
        id="loadChart3"
        style="{ height: '30%' ,width :'355px' }"
        width="100%"
        title="本周用电量"
        :chartData="pData"
      ></LineChart>
    </div>
  </div>
</template>
<script>
import NormalBarChart from "@/components/Charts/NormalBarChart";
import BarChart from "@/components/Charts/BarChart";
import LineChart from "@/components/Charts/LineChart";
import panel from "@/assets/panel.png";
export default {
  data() {
    return {
      panel,
      mapType: 0,
      isControl: false,
      pData: {
        xAxis: [0, 1, 2, 3, 4, 5, 6, 7],
        unit: "kW",
        data: [1, 2, 3, 2, 3, 5, 6, 3]
      },
      energyData: {
        xAxis: [1, 2, 3,4,5,6,7],
        unit: "kWh",
        data: [100, 210, 113,450,230,400,40]
      },
      barData: {
        data: [
          { name: "新兴公司食堂", value: 110 },
          { name: "沙村鸡场", value: 411 },
          { name: "禅泉酒店", value: 1111 }
        ],
        unit: "kWh"
      }
    };
  },
  props: {
    toggleMapType: {},
    activeMenu: {},
    changeActiveMenu: {},
    deviceInfo: {}
  },
  methods: {
    changeMap() {
      this.mapType = this.mapType === 0 ? 1 : 0;
      this.$emit("toggleMapType");
    }
  },
  components: {
    NormalBarChart,
    BarChart,
    LineChart
  }
};
</script>
<style lang="scss" scoped>
.right-menu-container {
  font-size: 14px;
  .menu-content {
    width: 375px;
    height: 30%;
    margin-top: 20px;
    background: rgba(255, 255, 255, 0.8);
    padding: 15px;
    text-align: left;
  }
}
</style>
