<template>
  <div id="screen-container">
    <Header class="header"></Header>
    <AppMain class="main"></AppMain>
  </div>
</template>

<script>
import Header from "./components/Header/index";
import AppMain from "./components/AppMain";
export default {
  components: {
    Header,
    AppMain
  }
};
</script>

<style lang="scss" scoped>
#screen-container {
  position: relative;
  min-width: 1300px;
  width: 100vw;
  height: 100%;
  .header {
    position: fixed;
    top: 0;
  }
  .main {
    position: absolute;
    top: 50px;
    overflow: auto;
  }
}
</style>
