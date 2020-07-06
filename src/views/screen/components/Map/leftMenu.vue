<template>
  <div class="left-menu-container">
    <el-popover
      placement="right"
      :width="popWidth"
      trigger="click"
      @show="popShow(0)"
      @hide="popHide(0)"
    >
      <status></status>
      <div
        slot="reference"
        :class="['pop-menu-item', activeMenu1 === 0 ? 'menu-active' : '']"
      >
        <i class="el-icon-info icon"></i><span>设备状态</span>
      </div>
    </el-popover>
    <el-popover
      placement="right"
      :width="popWidth"
      trigger="click"
      @show="popShow(1)"
      @hide="popHide(1)"
    >
      <warning></warning>
      <div
        slot="reference"
        :class="['pop-menu-item', activeMenu1 === 1 ? 'menu-active' : '']"
      >
        <i class="el-icon-warning icon"></i><span>预警信息</span>
      </div>
    </el-popover>
    <el-popover
      placement="right"
      :width="popWidth"
      trigger="click"
      @show="popShow(2)"
      @hide="popHide(2)"
    >
      <strategy></strategy>
      <div
        slot="reference"
        :class="['pop-menu-item', activeMenu1 === 2 ? 'menu-active' : '']"
      >
        <i class="el-icon-upload icon"></i><span>云端策略</span>
      </div>
    </el-popover>
    <!-- <el-popover
      placement="right"
      :width="popWidth"
      trigger="click"
      @show="popShow(3)"
      @hide="popHide(3)"
    >
      <statistics></statistics>
      <div
        slot="reference"
        :class="[
          'pop-menu-item',
          'last-item',
          activeMenu1 === 3 ? 'menu-active' : ''
        ]"
      >
        <i class="el-icon-s-data icon"></i><span>用电统计</span>
      </div>
    </el-popover> -->
  </div>
</template>
<script>
import status from "./leftMenuItem/status";
import warning from "./leftMenuItem/warning";
import strategy from "./leftMenuItem/strategy";
import statistics from "./leftMenuItem/statistics";

export default {
  data() {
    return {
      popWidth: 350,
      activeMenu1: null
    };
  },
  methods: {
    popShow(index) {
      this.activeMenu1 = index;
    },
    popHide(index) {
      if (index === this.activeMenu1) {
        this.activeMenu1 = null;
      }
    }
  },
  components: {
    status,
    strategy,
    warning,
    statistics
  }
};
</script>
<style lang="scss" scoped>
.left-menu-container {
  display: flex;
  flex-direction: column;
  font-size: 14px;
}
</style>
