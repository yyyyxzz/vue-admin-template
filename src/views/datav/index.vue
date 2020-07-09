<template>
  <div class="datav-container">
    <datav />
  </div>
</template>

<script>
import datav from "./components/datav/index.vue";

export default {
  name: "app",
  components: {
    datav
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss" >
.datav-container {
  height: 100vh;
}
</style>
