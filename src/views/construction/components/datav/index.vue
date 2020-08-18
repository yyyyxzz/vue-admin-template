<template>
  <div id="data-view">
    <!-- <dv-full-screen-container> -->
    <top-header />
    <div class="main-content">
      <!-- <digital-flop /> -->
      <div class="block-left-right-content">
        <ranking-board />
        <div class="block-top-bottom-content">
          <div class="top-wrapper">
            <dv-border-box-8 class="map-wrapper">
              <vmap></vmap>
            </dv-border-box-8>
            <dv-border-box-3 class="table-wrapper">
              <scroll-board />
            </dv-border-box-3>
          </div>
          <dv-border-box-9 class="bottom-container">
            <div class="bottom-wrapper">
              <RightChart1 style="width:33%" />
              <dv-decoration-2
                class="decoration-1"
                :reverse="true"
                style="width:5px;"
              />

              <RightChart2 style="width:33%" />
              <dv-decoration-2
                class="decoration-2"
                :reverse="true"
                style="width:5px;"
              />
              <RightChart3 style="width:33%" />
            </div>

            <!-- <RightChart2 style="width:33%" /> -->
          </dv-border-box-9>
        </div>
        <div class="right-content">
          <dv-border-box-3 class="right-item" style="height:57%"
            ><right2></right2></dv-border-box-3
          >
          <dv-border-box-10 class="right-item" style="height:39%"
            ><right1></right1></dv-border-box-10
          >
        </div>
        <!-- <ranking-board /> -->
        <!-- <div class="block-top-bottom-content">
            <div class="block-top-content">
              <rose-chart />
              <water-level-chart />
              <scroll-board />
            </div>
            <cards />
          </div> -->
      </div>
    </div>
    <!-- </dv-full-screen-container> -->
  </div>
</template>

<script>
import topHeader from "./topHeader";
import digitalFlop from "./digitalFlop";
import rankingBoard from "./rankingBoard";
import roseChart from "./roseChart";
import waterLevelChart from "./waterLevelChart";
import scrollBoard from "./scrollBoard";
import cards from "./cards";
import RightChart1 from "./RightChart1";
import RightChart2 from "./RightChart2";
import RightChart3 from "./RightChart3";
import Right1 from "./Right1";
import Right2 from "./Right2";

import vmap from "./map";

export default {
  name: "DataView",
  components: {
    topHeader,
    digitalFlop,
    rankingBoard,
    roseChart,
    waterLevelChart,
    scrollBoard,
    cards,
    vmap,
    RightChart1,
    RightChart2,
    RightChart3,
    Right1,
    Right2,

  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss">
#data-view {
  width: 100%;
  height: 100vh;
  background-color: #1f326c;
  color: #fff;
  overflow: hidden;
  
  // #dv-full-screen-container {
  //   background-image: url("./img/bg.png");
  //   background-size: 100% 100%;
  //   box-shadow: 0 0 3px blue;
  //   display: flex;
  //   flex-direction: column;
  //   height: 100vh !important;
  //   width: 100vw !important;
  // }
  .top-wrapper {
    display: flex;
    height: 56%;
    width: 100%;
  }
  .main-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    height: calc(100vh - 100px);
  }
  .block-left-right-content {
    flex: 1;
    display: flex;
    height: 100%;
  }
  .right-content {
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding-bottom:20px;

    .right-item {
      width: 100%;
      // border: 1px solid red;

    }
  }
  .block-top-bottom-content {
    height: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    margin: 0 20px;
    box-sizing: border-box;
    justify-content: space-between;
  }
  .map-wrapper {
    height: 100%;
    width: 60%;
  }
  .table-wrapper {
    margin-left: 20px;
    height: 100%;
    width: 40%;
  }
  .bottom-container {
    // margin-top: 20px;
    margin-bottom: 20px;
    height: 38%;
    box-sizing: border-box;
    padding: 10px;
  }
  .bottom-wrapper {
    position: relative;
    height: 100%;
    width: 100%;
    padding: 10px;
    display: flex;
  }

  .decoration-1 {
    position: absolute;
    left: 33%;
  }
  .decoration-2 {
    position: absolute;
    left: 66%;
  }
}
</style>
