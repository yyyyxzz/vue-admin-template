<template>
  <section class="app-main-wrapper">
    <!-- <transition> -->
      <!-- enter-active-class="animated zoomIn"
      leave-active-class="animated zoomOut" -->
      <!-- <keep-alive> -->
        <!-- <router-view :key="key" /> -->
      <!-- </keep-alive> -->
    <!-- </transition> -->

    <transition name="fade-transform" mode="out-in">
      <router-view :key="key" />
    </transition>
    <div
      class="menu-container"
      :style="{ display: showMenu ? 'block' : 'none' }"
    >
      <Menu></Menu>
    </div>
  </section>
</template>

<script>
import Menu from "./Menu/index";
import { mapGetters } from "vuex";

export default {
  name: "AppMain",
  components: {
    Menu
  },
  computed: {
    ...mapGetters(["showMenu"]),
    key() {
      return this.$route.path;
    }
  }
};
</script>

<style scoped lang="scss">
@import "~@/styles/variables.scss";

.app-main-wrapper {
  /*50 = navbar  */
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  background: #EBEEF2;
  .menu-container {
    position: absolute;
    top: 0;
    z-index: 30;
    background-color: rgba(255, 255, 255, 0.9);
    width: 100%;
    height: calc(100vh - 50px);
  }
}
.fixed-header + .app-main {
  padding-top: 50px;
}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style>
