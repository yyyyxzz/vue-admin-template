<template>
  <div id="advice">
    <dv-scroll-board :config="config" class="content" />
  </div>
</template>

<script>
export default {
  name: "ScrollBoard",
  data() {
    return {
      config: {
        header: [ "节能建议", "位置"],
        data: [
          [ "关闭空调", "沙村鸡场"],
          [ "关闭灯光", "新兴公司食堂"],
          [ "空调温度调低", "福安鸡场"],
          [ "调整空调模式", "长江鸡场"],
          [ "关闭电源", "禅泉酒店"],
          [ "打开除湿模式", "长江鸡场"],
          [ "打开下班模式", "长江鸡场"],
          [ "开启节能模式", "禅泉酒店"],
          [ "关闭空调", "长江鸡场"],
        ],
        index: false,
        // columnWidth: [160],
        align: ["center"],
        rowNum: 7,
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
#advice {
  height: 100%;
  width: 100%;
  padding:25px;
  // margin-left: 20px;
  overflow: hidden;
  .content {
    height: 100%;
    width: 100%;
  }
}
</style>
