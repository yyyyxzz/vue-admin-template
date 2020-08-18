<template>
  <div class="chuan-statistics-container">
    <div class="title">全局指标</div>
    <div class="content">
      <dv-decoration-10 style="width:100%;height:5px;" class="horizontal" />
      <dv-decoration-10 style="width:100%;height:5px;" class="column" />

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
.chuan-statistics-container {
  height: 100%;
  padding: 10px;
  .title {
    font-size: 20px;
    font-weight: bold;
    line-height: 35px;
  }
  .content {
    height: calc(100% - 35px);
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
      width: 50%;
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
        font-size: 18px;
        font-weight: normal;
      }
    }
  }
}
</style>
