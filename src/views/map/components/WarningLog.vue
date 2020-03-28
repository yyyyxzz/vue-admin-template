<template>
  <div
    id="warning-log-container"
    :style="{
      backgroundImage: 'url(' + bg + ')',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%'
    }"
  >
    <div class="title">
      告警记录
    </div>
    <div class="content" v-if="JSON.stringify(this.log) === '[]'">
      <p>暂无记录</p>
    </div>
    <div class="data-content" v-else>
      <div class="data-item">
        <span class="date">12月3日 8:12,</span><span>4楼插座5温度38℃</span>
      </div>
      <div class="data-item">
        <span class="date">12月3日 8:12,</span><span>4楼插座5温度38℃</span>
      </div>
      <div class="data-item">
        <span class="date">12月3日 8:12,</span><span>4楼插座5温度38℃</span>
      </div>
      <div class="data-item">
        <span class="date">12月3日 8:12,</span><span>4楼插座5温度38℃</span>
      </div>
    </div>
  </div>
</template>

<script>
import panel from "../../../assets/panel.png";
export default {
  name: "WarningLog",
  data() {
    return {
      bg: panel,
      log: []
    };
  }
};
</script>

<style scoped lang="scss">
@import "../../../styles/variables";
#warning-log-container {
  /*height: 100%;*/
  //   width: 100%;
  padding: 10px;
  color: $titleColor;
  box-sizing: border-box;
  font-size: 13px;
  .title {
    text-align: left;
    width: 100%;
    font-size: 16px;
    font-weight: bold;
    /*margin-bottom: 10px;*/
  }
  .content {
    height: 90%;
    margin-top: -10px;
    color: white;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .data-content {
    height: 100%;
    padding: 10px;
    margin-top: 10px;
    text-align: left;
    letter-spacing: 1px;
    .data-item {
      height: 20%;
    }
    .date {
      margin-right: 8px;
    }
  }
}
</style>
