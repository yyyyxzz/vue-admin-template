<template>
  <div class="gate-container">
    <div
      :style="{
        background: `url(${cad})  no-repeat `,
        'background-size': '100% 100%'
      }"
      class="cad"
    ></div>
    <el-popover width="200" trigger="hover" placement="top" v-for="(socket,index) in devices" :key="index">
      <div class="socket-popover-container">
        <div class="title center">
          <span>{{socket.name}}</span>
          <el-switch
            v-model="socket.state"
            active-color="#13ce66"
            inactive-color="#ff4949"
          >
          </el-switch>
        </div>
        <div class="content">
          <div class="center item">
            <span class="subtitle">位置：</span>
            <span class="subcontent">{{socket.location}}</span>
          </div>
          <div class="center item">
            <span class="subtitle">当前功率：</span>
            <span class="subcontent">{{socket.p}}W</span>
          </div>
        </div>
      </div>
      <span
        slot="reference"
        :style="{
          background: `url(${socketImg})  no-repeat 100% `,
          'background-size': '100% 100%',
          left:`${socket.position[0]}%`,
          top:`${socket.position[1]}%`,
        }"
        class="device"
        @click="$router.push('/device/controller')"
      ></span>
    </el-popover>
    <el-button type="primary" @click="$router.back(-1)" class="back-container"
      >点击返回</el-button
    >
  </div>
</template>
<script>
import cad from "@/assets/cad.jpg";
import socketImg from "@/assets/device/socket.svg";
export default {
  data() {
    return {
      gateId: undefined,
      cad,
      socketImg,
      state: true,
      devices: [{ name: "卫生间插座", position: [10, 20], location:'卫生间',state: true, p: 30 },
      { name: "厨房插座", position: [20, 20], location:'厨房',state: false, p: 30 },
      { name: "卧室插座", position: [40, 20], location:'卧室',state: true, p: 30 },
      { name: "客厅插座", position: [10, 30], location:'客厅',state: true, p: 30 },
      { name: "冰箱插座", position: [10, 50], location:'冰箱',state: true, p: 30 },
      { name: "电视机插座", position: [60, 20], location:'电视机',state: true, p: 30 },
      { name: "书房插座", position: [40, 60], location:'卧室',state: true, p: 30 },
      { name: "阳台插座", position: [10, 80], location:'客厅',state: true, p: 30 },
      { name: "台灯插座", position: [70, 50], location:'冰箱',state: true, p: 30 },
      { name: "电脑插座", position: [80, 20], location:'电视机',state: true, p: 30 }]
    };
  },
  created() {
    this.gateId = this.$route.query.id;
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.gate-container {
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  .cad {
    height: 100%;
    width: 100%;
  }
  .device {
    display: inline-block;
    width: 30px;
    height: 30px;
    position: absolute;
    z-index: 3;
    cursor: pointer;

  }
  .back-container {
    position: absolute;
    bottom: 20px;
    right: 30px;
    z-index: 3;
   
  }
}
</style>
