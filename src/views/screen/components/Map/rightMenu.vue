<template>
  <div class="right-menu-container">
    <div class="menu-list">
      <div
        :class="['right-menu-item', activeMenu === 'control' ? 'active' : '']"
        @click="changeActiveMenuChild('control')"
      >
        <i class="el-icon-set-up"></i>
        <span class="text">批量控制</span>
      </div>
      <div
        :class="[
          'right-menu-item',
          activeMenu === 'device' ? 'active' : 'disabled'
        ]"
        @click="changeActiveMenuChild('device')"
      >
        <i class="el-icon-document"></i>
        <span class="text">设备信息</span>
      </div>
      <div
        class="right-menu-item"
        @click="changeMap"
        :style="{
          backgroundColor: mapType === 0 ? 'white' : '#0198ff',
          color: mapType === 0 ? 'black' : 'white'
        }"
      >
        <i class="el-icon-map-location"></i>
        <span class="text">卫星图</span>
      </div>
    </div>
    <div class="menu-content" v-if="activeMenu === 'control'">
      <div class="subtitle">
        智控路灯
      </div>
      <div class="light-control-container">
        <span
          class="light-control"
          @click="sendControl($event, 'open')"
          v-preventReClick="3000"
          >开灯</span
        >
        <span class="light-control" @click="sendControl('close')">关灯</span>
      </div>
      <div class="subtitle">
        调光
      </div>
      <div class="light-control-container">
        <span class="brightness-control" @click="sendControl(1)"
          ><i class="el-icon-s-opportunity"></i><span>一档亮度</span></span
        >
        <span class="brightness-control" @click="sendControl(2)"
          ><i class="el-icon-s-opportunity"></i><span>二档亮度</span></span
        >
        <span class="brightness-control" @click="sendControl(3)"
          ><i class="el-icon-s-opportunity"></i><span>三档亮度</span></span
        >
        <span class="brightness-control" @click="sendControl(4)"
          ><i class="el-icon-s-opportunity"></i><span>四档亮度</span></span
        >
      </div>
    </div>
    <div class="menu-content" v-if="activeMenu === 'device'">
      <div class="info-item">
        <span class="title">设备名称：</span>
        <span class="content">{{ deviceInfo.name }}</span>
      </div>
      <div class="info-item">
        <span class="title">设备位置：</span>
        <span class="content">{{ deviceInfo.pos }}</span>
      </div>
      <div class="info-item">
        <span class="title">负荷曲线</span>
      </div>
      <NormalBarChart
        id="loadChart"
        style="{ height: '200px' ,width :'100%' ,padding:'10px'}"
        height="200px"
        width="100%"
        title="本周用电量"
        :chartData="energyData"
      ></NormalBarChart>
    </div>
  </div>
</template>
<script>
import NormalBarChart from "@/components/Charts/NormalBarChart";
export default {
  data() {
    return {
      mapType: 0,
      isControl: false,
      energyData: {
        xAxis: [1, 2, 3],
        unit: "kW",
        data: [1, 2, 3]
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
    },
    changeActiveMenuChild(type) {
      if (type === "control") {
        if (this.activeMenu === "control") {
          this.$emit("changeActiveMenu", null);
        } else {
          this.$emit("changeActiveMenu", "control");
        }
      } else {
        if (this.activeMenu === "device") {
          this.$emit("changeActiveMenu", null);
        }
      }
    },
    sendControl(event, type) {
      if (event.target.disabled) {
        this.$notify({
          title: "警告",
          message: "请勿重复点击",
          type: "warning",
          position: "bottom-right"
        });
      } else {
        this.$notify({
          title: "成功",
          message: `批量控制成功`,
          type: "success",
          position: "bottom-right"
        });
      }
    }
  },
  components: {
    NormalBarChart
  }
};
</script>
<style lang="scss" scoped>
.right-menu-container {
  font-size: 14px;
  .menu-list {
    display: flex;
    background: white;
  }
  .menu-content {
    width: 375px;
    margin-top: 20px;
    background: white;
    padding: 15px;
    text-align: left;
    .info-item {
      line-height: 30px;
    }
    .title {
      color: grey;
    }
    .light-control-container {
      display: flex;
      justify-content: space-between;
    }
    .light-control {
      display: inline-block;
      text-align: center;
      width: 48%;
      border: 1px solid lightgrey;
      padding: 5px 0;
      cursor: pointer;
      border-radius: 5px;
    }
    .brightness-control {
      text-align: center;
      width: 22%;
      border: 1px solid lightgrey;
      height: 80px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding: 10px 5px;
      cursor: pointer;
      border-radius: 5px;
    }
  }
  .right-menu-item {
    color: black;
    padding: 18px;
    cursor: pointer;
  }
  .text {
    margin-left: 20px;
  }
  .disabled {
    color: lightgray;
    cursor: not-allowed;
  }
  .active {
    color: blue;
  }
  .subtitle {
    position: relative;
    height: 45px;
    line-height: 45px;
    text-align: center;
  }
  .subtitle:before {
    content: "";
    position: absolute;
    width: 37%;
    height: 1px;
    top: 50%;
    left: 0%;
    border-bottom: 1px dashed #dcdfe6;
  }
  .subtitle:after {
    content: "";
    position: absolute;
    width: 37%;
    height: 1px;
    top: 50%;
    border-bottom: 1px dashed #dcdfe6;
    right: 0%;
  }
}
</style>
