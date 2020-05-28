<template>
  <div class="side-container app-container">
    <div class="demo">
      <div class="content-item">
        <div ref="t1" class="title">历史</div>
        <div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
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
      <div class="content-item">
        <h3 ref="t1-1" class="title">肇始于网景</h3>
        <div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
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
      <div class="content-item">
        <h3 ref="t1-2" class="title">微软采纳</h3>
        <div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
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
      <div class="content-item">
        <h3 ref="t1-3" class="title">标准化</h3>
        <div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
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
      <div class="content-item">
        <h2 ref="t2" class="title">概论</h2>
        <div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
        </div>
        <div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
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
    </div>
    <side-catalog v-bind="catalogProps" class="catalog"></side-catalog>
  </div>
</template>
<script>
import SideCatalog from "vue-side-catalog";
import "vue-side-catalog/lib/vue-side-catalog.css";
export default {
  components: {
    SideCatalog
  },
  data() {
    return {
      catalogProps: {
        containerElementSelector: ".demo",
        refList: [
          {
            ref: "t1",
            level: 0
          },
          {
            ref: "t1-1",
            level: 2 // designated as a secondary directory
          },
          {
            ref: "t1-2",
            level: 2
          },
          {
            ref: "t1-3",
            level: 4
          },
          {
            ref: "t2"
          }
        ]
      }
    };
  }
};
</script>
<style lang="scss" scoped>
.side-container {
  position: relative;
  .demo {
    width: calc(100% - 160px);
    .content-item {
      background-color: white;
      padding:0 20px 20px 20px;
      margin-bottom: 15px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
      .title{
        padding-top: 20px;
      }
    }
  }
}
.catalog {
  position: fixed;
  top: 100px;
  right: -100px;
}
</style>
