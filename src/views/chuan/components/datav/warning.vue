<template>
  <div id="scroll-board">
    <dv-scroll-board :config="config" class="content" />
  </div>
</template>

<script>
export default {
  name: "ScrollBoard",
  data() {
    return {
      config: {
        header: ["时间", "预警信息", "位置"],
        data: [
          ["2020-07-01", "插座电流过大", "沙村鸡场"],
          ["2020-07-02", "插座掉线", "新兴公司食堂"],
          ["2020-07-03", "温度过高", "福安鸡场"],
          ["2020-07-04", "插座电流过大", "长江鸡场"],
          ["2020-07-05", "插座电流过大", "禅泉酒店"],
          ["2020-07-06", "插座电流过大", "长江鸡场"],
          ["2020-07-05", "插座电流过大", "禅泉酒店"],
          ["2020-07-06", "插座电流过大", "长江鸡场"],
          ["2020-07-06", "插座电流过大", "长江鸡场"]
        ],
        index: false,
        // columnWidth: [160],
        align: ["center"],
        rowNum: 5,
        headerBGC: "#1981f6",
        headerHeight: 45,
        oddRowBGC: "rgba(0, 44, 81, 0.8)",
        evenRowBGC: "rgba(10, 29, 50, 0.8)"
      }
    };
  }
};
</script>

<style lang="scss">
#scroll-board {
  height: 100%;
  width: 100%;
  overflow: hidden;
  .content {
    height: 100%;
    width: 100%;
  }
}
</style>
