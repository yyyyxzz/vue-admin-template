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
        <span class="light-control">开灯</span>
        <span class="light-control">关灯</span>
      </div>
      <div class="subtitle">
        调光
      </div>
      <div class="light-control-container">
        <span class="brightness-control"
          ><i class="el-icon-s-opportunity"></i><span>一档亮度</span></span
        >
        <span class="brightness-control"
          ><i class="el-icon-s-opportunity"></i><span>二档亮度</span></span
        >
        <span class="brightness-control"
          ><i class="el-icon-s-opportunity"></i><span>三档亮度</span></span
        >
        <span class="brightness-control"
          ><i class="el-icon-s-opportunity"></i><span>四档亮度</span></span
        >
      </div>
    </div>
    <div class="menu-content" v-if="activeMenu === 'device'">
      <div class="info-item">
        <span class="title">设备名称：</span>
        <span class="content">{{ deviceInfo.name }}</span>
      </div>
      <div>
        <span class="title">设备位置：</span>
        <span class="content">{{ deviceInfo.pos }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      mapType: 0,
      isControl: false
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
    }
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
    .info-item{
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
      width: 45%;
      border: 1px solid lightgrey;
      padding: 5px 0;
      cursor: pointer;
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
