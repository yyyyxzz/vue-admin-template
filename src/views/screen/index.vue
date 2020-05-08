<template>
  <div id="screen-container">
    <Header></Header>
    <AppMain></AppMain>
  </div>
</template>

<script>
import Header from "./components/Header/index";
import AppMain from './components/AppMain'
export default {
  components: {
    Header,
    AppMain
  },
};
</script>

<style lang="scss" scoped>
#screen-container {
  position: relative;
  min-width: 1400px;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
