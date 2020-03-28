<template>
  <div
    class="statistics-container"
    :style="{
      backgroundImage: 'url(' + bg + ')',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%'
    }"
  >
    <div class="item-title">能耗统计</div>
    <div class="data-content" v-for="(item, index) in data" :key="index">
      <div class="left-content">{{ item.title }}本月电耗</div>
      <div class="right-content">
        <div>
          <count-to
            :startVal="0"
            :endVal="item.value"
            :duration="6000"
            class="middle-number"
          ></count-to
          >度
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import countTo from "vue-count-to";
import panel from "../../../assets/panel.png";
export default {
  name: "Statistics",
  data() {
    return {
      bg: panel,
      titles: ["图书馆", "中厅", "一楼阅览室", "四楼阅览室"]
    };
  },
  components: { countTo },
  props: {
    statisticsData: {}
  },
  computed: {
    data() {
      return this.statisticsData.map((item, index) => {
        return { title: this.titles[index], value: item };
      });
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../../styles/variables";
.statistics-container {
  width: 100%;
  text-align: left;
  padding: 10px;
  color: $titleColor;
  box-sizing: border-box;

  .item-title {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .data-content {
    font-size: 13px;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    .left-content {
      width: 60%;
      padding-right: 20px;
      padding-left: 10px;
      border-right: 2px solid $titleColor;
    }
    .right-content {
      width: 30%;
      padding-left: 20px;
    }
    .middle-number {
      width: 36px;
      font-weight: bold;
      font-size: 16px;
      /*margin-right: 3px;*/
    }
  }
}
</style>
