<template>
  <div id="map-container">
    <Header @changeScreen="changeScreen" :screenShow="screenShow"></Header>
    <div class="content">
      <Map style="height:100%"></Map>
      <div
        class="screen-container"
        :style="{ display: screenShow ? 'block' : 'none' }"
      >
        <Main></Main>
      </div>
    </div>
  </div>
</template>

<script>
import Main from "./components/Main/index";
import Header from "./components/Header/index";
import Map from "./components/Map/index";

export default {
  data() {
    return {
      screenShow: false
    };
  },

  components: {
    Header,
    Main,
    Map
  },
  methods: {
    changeScreen() {
      this.screenShow = !this.screenShow;
    },
    async logout() {
      await this.$store.dispatch("user/logout");
      this.$router.push(`/login?redirect=${this.$route.fullPath}`);
    },
    dashboard() {
      this.$router.push("/dashboard");
    }
  }
};
</script>

<style lang="scss" scoped>
#map-container {
  position: relative;
  text-align: center;
  min-width: 1400px;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  .content {
    height: calc(100% - 55px);
    position: relative;
  }
  .screen-container {
    position: absolute;
    top: 0;
    z-index: 30;
    background-color: rgba(255, 255, 255, 0.9);
    width: 100%;
    height: calc(100vh - 55px);
  }
}
</style>
