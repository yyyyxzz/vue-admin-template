<template>
  <div class="status-wrapper">
    <div class="top center">
      <span>全部</span>
      <span style="color:#0198ff;cursor:pointer" @click="$router.push('./dashboard/index')">查看上报数据</span>
    </div>
    <div class="bottom center">
      <div class="item" v-for="device in status" :key="device.color">
        <div class="text-center number">{{device.number}}</div>
        <span class="center">
          <span class="point" :style="{backgroundColor: device.color}"></span>
          <span>{{device.name}}</span>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      status: [
        { number: 0, name: "开启", color: "#00b238" },
        { number: 0, name: "关闭", color: "#8e8e93" },
        { number: 0, name: "故障", color: "#d0021b" },
        { number: 0, name: "离线", color: "#8eb4f6" }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.status-wrapper {
  .top {
    margin-bottom: 15px;
  }
  .item {
    color: black;
    width: 16%;
    .number {
      margin-bottom: 12px;
      font-size: 18px;
    }
  }
  .point {
    display: inline-block;
    width: 14px;
    height: 14px;
    border-radius: 7px;
  }
}
</style>
