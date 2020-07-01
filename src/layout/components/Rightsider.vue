<template>
  <div class="sider-container">
    <el-button type="primary" class="button-container" @click="handleClick"
      >测试</el-button
    >
    <div class="content">
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    handleClick() {
      this.$store.dispatch("app/toggleRightsider");
    }
  }
};
</script>
<style lang="scss" scoped>
.sider-container {
  transform: translateY(-50%);
  .button-container {
    position: absolute;
    top: 50%;
    left: 0;
    -webkit-transform: translate(-100%, -50%);
    transform: translate(-100%, -50%);
  }
  .content {
    padding: 30px;
  }
}
</style>
