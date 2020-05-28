<template>
  <div class="app-container sticky-wrapper">
    <div class="con">
      <div class="samecon">
        <h2>标题一</h2>
        <p>这是一段文本</p>
        <p>这是一段文本</p>
        <p>这是一段文本</p>
      </div>
      <div class="samecon">
        <h2>标题二</h2>
        <p>这是一段文本</p>
        <p>这是一段文本</p>
        <p>这是一段文本</p>
      </div>
      <div class="samecon">
        <h2>标题三</h2>
        <p>这是一段文本</p>
        <p>这是一段文本</p>
        <p>这是一段文本</p>
      </div>
      <div class="samecon">
        <h2>标题四</h2>
        <p>这是一段文本</p>
        <p>这是一段文本</p>
        <p>这是一段文本</p>
      </div>
      <div class="samecon">
        <h2>标题五</h2>
        <p>这是一段文本</p>
        <p>这是一段文本</p>
        <p>这是一段文本</p>
      </div>
      <div class="samecon">
        <h2>标题五六</h2>
        <p>这是一段文本</p>
        <p>这是一段文本</p>
        <p>这是一段文本</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {}
};
</script>
<style lang="scss">
.sticky-wrapper{
  overflow: visible;
  position: relative;
}
.samecon {
  overflow: visible;
}
.samecon h2 {
  position: -webkit-sticky;
  position: sticky;
  top: 50px;
  background: #ccc;
  padding: 10px 0;
}
</style>
