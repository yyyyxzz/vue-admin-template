<template>
  <div class="screen-main-container">
    <div v-for="(route, index) in routes" :key="index" class="route-wrapper">
      <div class="route-title">
        <i :class="route.meta.icon"></i
        ><span style="margin-left:20px">{{ route.meta.title }}</span>
      </div>
      <div class="route-container">
        <router-link
          v-for="(item, index) in route.children"
          :key="index"
          :to="`${route.path}/${item.path}`"
          tag="div"
          class="route-item"
        >
          {{ item.meta.title }}
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    routes() {
      return this.$router.options.routes.filter(route => {
        return !route.hidden;
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.screen-main-container {
  width: 100%;
  height: 100%;
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(auto-fill, 250px);
  grid-gap: 20px;
  padding: 20px 55px;
  text-align: left;
  .route-wrapper {
    height: 50%;
  }
  .route-title {
    font-size: 20px;
    font-weight: bold;
    border-bottom: 2px solid blue;
    padding: 10px;
  }
  .route-container {
    margin-top: 10px;
    .route-item {
      font-weight: bold;
      cursor: pointer;
      font-size: 16px;
      padding: 8px 15px;
    }
  }
}
</style>
