<template>
  <div>
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <div class="left">
          <slot name="image" :row="item"></slot>
        </div>
        <div class="right">
          <div class="name"><slot name="name" :row="item"></slot></div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "test",
  props: {
    list: {
      type: Array
    }
  }
};
</script>
