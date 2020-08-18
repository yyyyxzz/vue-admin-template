<template>
  <div id="data-view">
    <top-header />
    <div class="main-content">
      <div class="block-left-right-content">
        <div class="left-content">
          <dv-border-box-8 :reverse="true" class="top-item"
            ><statistics></statistics
          ></dv-border-box-8>
          <dv-border-box-9 class="bottom-item">
            <div class="bottom-wrapper">
              <device></device>
            </div>
          </dv-border-box-9>
        </div>
        <ranking-board />
        <div class="block-top-bottom-content">
          <div class="top-wrapper top-item">
            <dv-border-box-8 class="map-wrapper">
              <vmap></vmap>
            </dv-border-box-8>
          </div>
          <warning class="bottom-container bottom-item" />
        </div>
        <div class="right-content">
          <dv-border-box-10 class="right-item top-item"
            ><consumption></consumption
          ></dv-border-box-10>
          <dv-border-box-10 class="right-item bottom-item"
            ><comparison></comparison
          ></dv-border-box-10>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import topHeader from "./topHeader";
import rankingBoard from "./rankingBoard";
import warning from "./warning";
import comparison from "./comparison";
import statistics from "./statistics";
import consumption from "./consumption";
import device from "./device";
import vmap from "./map";

export default {
  name: "DataView",
  components: {
    topHeader,
    rankingBoard,
    warning,
    vmap,
    comparison,
    statistics,
    consumption,
    device
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
  .top-wrapper {
    display: flex;
  }
  .left-content {
    width: 20%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin-right: 20px;
  }
  .main-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    height: calc(100vh - 100px);
    padding-bottom: 20px;
  }
  .block-left-right-content {
    flex: 1;
    display: flex;
    height: 100%;
  }
  .top-item {
    width: 100%;
    height: 57%;
  }
  .bottom-item {
    width: 100%;
    height: 39%;
  }
  .bottom-wrapper {
    display: flex;
    height: 100%;
  }
  .right-content {
    width: 25%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
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
    width: 100%;
  }
  .table-wrapper {
    margin-left: 20px;
    height: 100%;
    width: 32%;
  }
  .bottom-container {
    position: relative;
  }

  .decoration-1 {
    position: absolute;
    left: 48%;
  }
  .decoration-2 {
    position: absolute;
    left: 66%;
  }
}
</style>
