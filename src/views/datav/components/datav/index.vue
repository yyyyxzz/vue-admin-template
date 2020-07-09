<template>
  <div id="data-view">
    <dv-full-screen-container>
      <div class="main-header">
        <!-- <div class="mh-left">技术支持:<a href="https://github.com/jiaming743/DataV">https://github.com/jiaming743/DataV</a></div> -->
        <span class="mh-middle">机电设备电子档案</span>
        <!-- <div class="mh-right">
          <dv-border-box-2
            style="width: 120px; height: 50px; line-height: 50px; text-align:center;margin-left:200px;"
          >
            综合管理台
          </dv-border-box-2>
        </div> -->
      </div>

      <dv-border-box-1 class="datav-main-container">
        <dv-border-box-3 class="left-chart-container">
          <Left-Chart-1 />
          <Left-Chart-2 />
          <Left-Chart-3 />
        </dv-border-box-3>

        <div class="right-main-container">
          <div class="rmc-top-container">
            <dv-border-box-3 class="rmctc-left-container">
              <Center-Cmp />
            </dv-border-box-3>

            <div class="rmctc-right-container">
              <dv-border-box-3 class="rmctc-chart-1">
                <Right-Chart-1 />
              </dv-border-box-3>

              <dv-border-box-4 class="rmctc-chart-2" :reverse="true">
                <Right-Chart-2 />
              </dv-border-box-4>
            </div>
          </div>

          <dv-border-box-4 class="rmc-bottom-container">
            <Bottom-Charts />
          </dv-border-box-4>
        </div>
      </dv-border-box-1>
    </dv-full-screen-container>
  </div>
</template>

<script>
import LeftChart1 from "./LeftChart1";
import LeftChart2 from "./LeftChart2";
import LeftChart3 from "./LeftChart3";

import CenterCmp from "./CenterCmp";

import RightChart1 from "./RightChart1";
import RightChart2 from "./RightChart2";

import BottomCharts from "./BottomCharts";

export default {
  name: "DataView",
  components: {
    LeftChart1,
    LeftChart2,
    LeftChart3,
    CenterCmp,
    RightChart1,
    RightChart2,
    BottomCharts
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
#data-view {
  width: 100%;
  height: 100%;
  background-color: #030409;
  color: #fff;

  #dv-full-screen-container {
    background-image: url("./img/bg.png");
    background-size: 100% 100%;
    box-shadow: 0 0 3px blue;
    display: flex;
    flex-direction: column;
  }

  .main-header {
    height: 60px;
    text-align: center;
    font-size: 2rem;
    .mh-middle {
      line-height: 5rem;
    }
  }

  .datav-main-container {
    height: calc(100% - 180px);

    .border-box-content {
      padding: 20px;
      box-sizing: border-box;
      display: flex;
    }
  }

  .left-chart-container {
    width: 22%;
    padding: 10px;
    box-sizing: border-box;

    .border-box-content {
      flex-direction: column;
    }
  }

  .right-main-container {
    width: 78%;
    padding-left: 5px;
    box-sizing: border-box;
  }

  .rmc-top-container {
    height: 65%;
    display: flex;
  }

  .rmctc-left-container {
    width: 65%;
  }

  .rmctc-right-container {
    width: 35%;
  }

  .rmc-bottom-container {
    height: 35%;
  }

  .rmctc-chart-1,
  .rmctc-chart-2 {
    height: 50%;
  }
}
</style>
