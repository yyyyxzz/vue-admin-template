<template>
  <div class="data-view-container">
    <top-header />
    <div class="main-content">
      <div class="content-wrapper">
        <dv-border-box-12 class="content-item"
          ><hotel></hotel
        ></dv-border-box-12>
        <dv-border-box-12 class="content-item"><farm></farm></dv-border-box-12>
      </div>
      <dv-border-box-8 class="map-wrapper">
        <dv-scroll-board :config="config" class="warning-wrapper" />
        <vmap></vmap>
        <mapStatistics class="statistics-wrapper"></mapStatistics>
      </dv-border-box-8>
      <div class="content-wrapper">
        <dv-border-box-12 class="content-item"
          ><factory></factory
        ></dv-border-box-12>
        <dv-border-box-12 class="content-item"
          ><office></office
        ></dv-border-box-12>
      </div>
    </div>
  </div>
</template>
<script>
import topHeader from "./topHeader";
import vmap from "./map";
import hotel from "./hotel";
import farm from "./farm";
import office from "./office";
import factory from "./factory";
import mapStatistics from "./mapStatistics";

export default {
  name: "DataView",
  components: {
    topHeader,
    vmap,
    hotel,
    factory,
    office,
    farm,
    mapStatistics
  },
  data() {
    return {
      config: {
        data: [
          ["2020-07-01", "插座电流过大", "沙村鸡场"],
          ["2020-07-02", "插座掉线", "新兴公司食堂"],
          ["2020-07-03", "温度过高", "福安鸡场"],
          ["2020-07-04", "插座电流过大", "长江鸡场"],
          ["2020-07-05", "插座电流过大", "禅泉酒店"],
          ["2020-07-06", "插座电流过大", "长江鸡场"],
          ["2020-07-05", "插座电流过大", "禅泉酒店"],
          ["2020-07-06", "插座电流过大", "长江鸡场"],
          ["2020-07-06", "插座电流过大", "长江鸡场"]
        ],
        index: false,
        align: ["center"],
        rowNum: 1,
        // oddRowBGC: "#4169E3",
        // evenRowBGC: "#4169E3"
        oddRowBGC: "rgba(10, 29, 50, 0.8)",
        evenRowBGC: "rgba(10, 29, 50, 0.8)"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.data-view-container {
  width: 100%;
  height: 100vh;
  background-color: #1f326c;
  color: #fff;
  overflow: hidden;
  .main-content {
    flex: 1;
    display: flex;
    height: calc(100vh - 100px);
    padding-bottom: 20px;
    .map-wrapper {
      flex: 1;
      height: 100%;
      margin: 0 10px;
      position: relative;
      .warning-wrapper {
        position: absolute;
        bottom: 2px;
        left: 2px;
        right: 2px;
        height: 50px;
        z-index: 99;
        width: calc(100% - 5px);
      }
      .statistics-wrapper {
        position: absolute;
        top: 20px;
        left: 2px;
        right: 2px;
        height: 80px;
        z-index: 99;
        width: calc(100% - 5px);
      }
    }
    .content-wrapper {
      width: 25%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .content-item {
        height: 50%;
        width: 100%;
      }
    }
  }
}
</style>
