<template>
  <div class="right-chart-2">
    <div class="rc1-header">设备信息</div>

    <div class="rc1-chart-container">
      <div class="left">
        <div class="number">267</div>
        <div>设备运行总数</div>
      </div>
      <dv-charts class="right" :option="option" />
    </div>
  </div>
</template>

<script>
export default {
  name: "RightChart2",
  data() {
    return {
      option: {
        series: [
          {
            type: "pie",
            data: [
              { name: "在线", value: 193 },
              { name: "离线", value: 23 },
              { name: "故障", value: 0 }
            ],
            radius: ["55%", "65%"],
            insideLabel: {
              show: false
            },
            outsideLabel: {
              labelLineEndLength: 10,
              formatter: "{percent}%\n{name}",
              style: {
                fontSize: 14,
                fill: "#fff"
              }
            }
          }
        ],
        color: ["#00baff", "#3de7c9", "#ffc530", "#469f4b"]
      }
    };
  },

};
</script>

<style lang="scss">
.right-chart-2 {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 10px;

  .rc1-header {
    font-size: 18px;
    font-weight: bold;
    height: 30px;
    line-height: 30px;
  }

  .rc1-chart-container {
    flex: 1;
    display: flex;
  }

  .left {
    width: 30%;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .number {
      font-size: 34px;
      color: #096dd9;
      font-weight: bold;
      margin-bottom: 30px;
    }
  }

  .right {
    flex: 1;
    padding-bottom: 20px;
    padding-right: 20px;
    box-sizing: border-box;
  }
}
</style>
