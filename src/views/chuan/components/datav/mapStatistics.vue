<template>
  <div class="map-statistics-container">
    <div class="content">
      <div class="content-item" v-for="(item, index) in info" :key="index">
        <div>
          <span class="number">{{ item.number }}</span>
          <span class="unit">{{ item.unit }}</span>
        </div>
        <div class="title">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cards",
  data() {
    return {
      info: [
        { number: 10, name: "用户数", unit: "户" },
        { number: 101, name: "累计节能量", unit: "kWh" },
        { number: 910, name: "安全运行", unit: "天" },
        { number: 1011, name: "总负荷", unit: "kW" }
      ]
    };
  }
};
</script>

<style lang="scss">
.map-statistics-container {
  height: 100%;
  padding: 10px;
  .content {
    height: 100%;
    display: flex;
    align-items: space-between;
    flex-wrap: wrap;
    position: relative;
    .horizontal {
      position: absolute;
      top: 50%;
    }
    .column {
      position: absolute;
      top: 50%;
      transform: rotate(90deg);
    }
    .content-item {
      height: 50%;
      width: 25%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .number {
        color: #306bd2;
        font-size: 35px;
        font-weight: bold;
      }
      .title {
        font-size: 16px;
        font-weight: normal;
      }
    }
  }
}
</style>
