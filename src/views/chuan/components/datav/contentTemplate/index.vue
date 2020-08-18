<template>
  <div class="content-template-container">
    <div >
      <span class="title">  <slot name="title"></slot> ---- </span>
      <span class="subtitle"><slot name="subtitle"></slot></span>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.content-template-container {
  height: 100%;
  padding: 10px;
  position: relative;
  width: 100%;
  .title {
    font-size: 20px;
    font-weight: bold;
    line-height: 35px;
  }
  .subtitle{
    font-size: 18px;
    font-weight: bold;
    line-height: 35px;
    color:#61BEE1;

  }
  .content {
    height: calc(100% - 35px);
    display: flex;
    width: 100%;
  }
}
</style>
