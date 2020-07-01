<template>
  <div class="side-container app-container">
    <div class="content">
      <div class="content-item">
        <div ref="t1" class="title">网关详情</div>
        <Gateway></Gateway>
      </div>
      <div class="content-item">
        <div ref="t2" class="title">设备列表</div>
        <div class="device-container">
          <DeviceList></DeviceList>
        </div>
      </div>
      <div class="content-item">
        <div ref="t3" class="title">数据库查询</div>
        <div ref="t3-1" class="sub-title">状态量</div>
        <status></status>
        <div ref="t3-2" class="sub-title">累积量</div>
        <accumulation></accumulation>
      </div>
      <div class="content-item">
        <div ref="t4" class="title">操作日志</div>
        <record></record>
      </div>
    </div>
    <side-catalog v-bind="catalogProps" class="catalog"></side-catalog>
  </div>
</template>
<script>
import SideCatalog from "vue-side-catalog";
import "vue-side-catalog/lib/vue-side-catalog.css";
import DeviceList from "./components/device-list";
import Gateway from "./components/gateway";
import Status from "./components/status";
import Accumulation from "./components/accumulation";
import Record from "./components/record";

export default {
  components: {
    SideCatalog,
    DeviceList,
    Gateway,
    Status,
    Accumulation,
    Record
  },
  data() {
    return {
      catalogProps: {
        containerElementSelector: ".content",
        refList: [
          {
            ref: "t1",
            level: 1
          },
          {
            ref: "t2",
            level: 1
          },
          {
            ref: "t3",
            level: 1
          },
          {
            ref: "t3-1",
            level: 2 // designated as a secondary directory
          },
          {
            ref: "t3-2",
            level: 2
          },
          {
            ref: "t4",
            level: 1
          }
        ],
        openDomWatch: true
      }
    };
  }
};
</script>
<style lang="scss" scoped>
.side-container {
  position: relative;
  .content {
    width: calc(100% - 160px);
    .content-item {
      background-color: white;
      padding: 0 20px 20px 20px;
      margin-bottom: 15px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
      .title {
        padding-top: 20px;
        margin-bottom: 30px;
        font-size: 20px;
      }
      .sub-title {
        font-size: 18px;
        padding-top:10px;
        margin-bottom: 30px;
      }
    }
  }
  .device-container {
    overflow: hidden;
    height: 100%;
  }
}
.catalog {
  position: fixed;
  top: 100px;
  right: -100px;
}
</style>
